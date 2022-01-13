/**
 *
 * Robot
 *
 */
import dynamic from "next/dynamic";
import {
  FormEvent,
  KeyboardEvent,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Fade } from "@mui/material";
import Grow from "@mui/material/Grow";
import { debounce } from "@mui/material/utils";
import { useSwipeable } from "react-swipeable";

import { AudioContext } from "contexts/AudioContext";
import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { Bot, ContactChannel, RobotSentiment, Workplace } from "types.d";

import { RobotChatBubble } from "./robot/RobotChatBubble";
import { RobotChatInput } from "./robot/RobotChatInput";
import { RobotChatInputForm } from "./robot/RobotChatInputForm";
import { RobotHead } from "./robot/RobotHead";
import { RobotHeadButton } from "./robot/RobotHeadButton";
import { RobotHeadContainer } from "./robot/RobotHeadContainer";
import { TypeAheadInput } from "./robot/TypeAheadInput";
import { contactChannelIntents } from "./robot/contactChannelIntents";
import { SENTIMENT_EMOTE_MAP } from "./robot/emotes";
import { workplaceIntents } from "./robot/workplaceIntents";

const RobotInPortal = dynamic<PropsWithChildren<unknown>>(
  () =>
    import("./robot/RobotInPortal").then(({ RobotInPortal }) => RobotInPortal),
  { ssr: false }
);

export const Robot = memo(() => {
  const { t } = useTranslation();
  const {
    query: { channel, place },
  } = useRouter();
  const [bot, setBot] = useState<Bot>();
  const [displayInput, setDisplayInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputSuggestion, setInputSuggestion] = useState<string>();
  const [didExplainSuggestion, setDidExplainSuggestion] = useState(false);
  const [sentimentInput, setSentimentInput] = useState(inputValue);
  const [sentiment, setSentiment] = useState(RobotSentiment.NEUTRAL);
  const [botMessage, setBotMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [chatPromptTimeout, setChatPromptTimeout] = useState<NodeJS.Timeout>();
  const [messageTimeout, setMessageTimeout] = useState<NodeJS.Timeout>();
  const { botNotificationAudio } = useContext(AudioContext);
  const inputRef = useRef<HTMLInputElement>();
  const botMessageDelay = botMessage ? 500 : 0;

  const clickPrompt = t("Have a question? Click me!");
  const unloadedPrompt = t("Looks like I'm still loading");
  const loadedPrompt = t("Okay, I'm ready!");
  const suggestionPrompt = t("I think I know what you want to type");
  const submitPrompt = t("Perfect! Now click the send button to talk to me");
  const typeAheadInputValue = inputSuggestion
    ? `${inputValue}${inputSuggestion.substring(inputValue.length)}`
    : inputValue;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSentimentInputDebounced = useCallback(
    debounce(setSentimentInput, 300),
    []
  );

  const replaceBotMessage = (message: string, delay = botMessageDelay) => {
    if (message !== "") {
      setBotMessage("");
    }

    return setTimeout(() => setBotMessage(message), delay);
  };

  const acceptInputSuggestion = () => {
    if (inputSuggestion) {
      setInputValue(inputSuggestion);
      if (botMessage === suggestionPrompt) {
        replaceBotMessage(submitPrompt);
      }
    }
  };

  const swipeableHandlers = useSwipeable({
    onSwipedRight: acceptInputSuggestion,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (bot && canSubmit) {
      setInputValue("");
      replaceBotMessage(bot.getReply(inputValue));
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!e.shiftKey && e.key === "Enter") {
      onSubmit(e);
    } else if (
      e.key === "ArrowRight" &&
      inputRef.current?.selectionStart === inputValue.length
    ) {
      acceptInputSuggestion();
    }
  };

  const endChat = () => {
    setDisplayInput(false);
    setInputValue("");
    setSentimentInput("");
  };

  const promptToClick = () =>
    bot &&
    !displayInput &&
    !botMessage &&
    setChatPromptTimeout(replaceBotMessage(clickPrompt, 700));

  const clearPromptToClickTimeout = () =>
    chatPromptTimeout && clearTimeout(chatPromptTimeout);

  const promptUnloadedChat = () => setBotMessage(unloadedPrompt);

  useEffect(() => {
    if (!bot) {
      // Prevent double bot render on locale change by delaying mount
      const botTimeout = setTimeout(() => {
        import("lib/bot").then(({ bot }) => setBot(bot));
      }, 500);

      return () => clearTimeout(botTimeout);
    } else if (botMessage === unloadedPrompt) {
      replaceBotMessage(loadedPrompt);
      setDisplayInput(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bot]);

  useEffect(() => {
    if (inputSuggestion && !didExplainSuggestion) {
      setDidExplainSuggestion(true);
      replaceBotMessage(suggestionPrompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSuggestion]);

  useEffect(() => {
    if (bot && sentimentInput) {
      setSentiment(bot.getSentiment(sentimentInput));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentimentInput]);

  useEffect(() => {
    setCanSubmit(!!inputValue.trim());

    if (inputValue && bot) {
      setInputSuggestion(bot.getSuggestion(inputValue));
      setSentimentInputDebounced(inputValue);
    } else {
      setInputSuggestion(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSentimentInputDebounced, inputValue]);

  useEffect(() => {
    if (bot) {
      if (typeof place === "string" && place in workplaceIntents) {
        replaceBotMessage(bot.getReply(workplaceIntents[place as Workplace]));
      } else if (
        typeof channel === "string" &&
        channel in contactChannelIntents
      ) {
        replaceBotMessage(
          bot.getReply(contactChannelIntents[channel as ContactChannel])
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, place]);

  useEffect(() => {
    if (bot && botMessage) {
      botNotificationAudio?.load();
      botNotificationAudio?.play();

      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
      const delay = Math.max(botMessage.length * 250, 7000);
      setMessageTimeout(replaceBotMessage("", delay));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botMessage]);

  return (
    <RobotInPortal>
      <RobotChatBubble message={botMessage} />
      <Fade appear mountOnEnter unmountOnExit in>
        <RobotHeadButton
          aria-label="Robot Head"
          component="div"
          onClick={() =>
            bot ? !displayInput && setDisplayInput(true) : promptUnloadedChat()
          }
        >
          <RobotHeadContainer
            disableHover={!bot || displayInput}
            onMouseEnter={promptToClick}
            onMouseLeave={clearPromptToClickTimeout}
          >
            <RobotHead
              id="robot-head"
              path={SENTIMENT_EMOTE_MAP[sentiment]}
              color="transparent"
            />
          </RobotHeadContainer>
          {!!bot && (
            <RobotChatInputForm onSubmit={onSubmit}>
              <Grow in={displayInput}>
                <TypeAheadInput
                  disabled
                  value={typeAheadInputValue}
                  InputProps={{ sx: { height: "100%" } }}
                />
              </Grow>
              <Grow in={displayInput}>
                <RobotChatInput
                  inputRef={inputRef}
                  value={inputValue}
                  placeholder={t("Type something")}
                  canSubmit={canSubmit}
                  onChange={(e) => setInputValue(e.target.value)}
                  onClose={endChat}
                  onKeyDown={onKeyDown}
                  {...swipeableHandlers}
                />
              </Grow>
            </RobotChatInputForm>
          )}
        </RobotHeadButton>
      </Fade>
    </RobotInPortal>
  );
});

Robot.displayName = Robot.name;
