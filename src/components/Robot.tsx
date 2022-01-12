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
  const [sentimentInput, setSentimentInput] = useState(inputValue);
  const [sentiment, setSentiment] = useState(RobotSentiment.NEUTRAL);
  const [botMessage, setBotMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [chatPromptTimeout, setChatPromptTimeout] = useState<NodeJS.Timeout>();
  const { botNotificationAudio } = useContext(AudioContext);
  const inputRef = useRef<HTMLInputElement>();
  const botMessageDelay = botMessage ? 500 : 0;

  const clickPrompt = t("Have a question? Click me!");
  const unloadedPrompt = t("Looks like I'm not loaded yet");
  const typeAheadInputValue = inputSuggestion
    ? `${inputValue}${inputSuggestion.substring(inputValue.length)}`
    : inputValue;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSentimentInputDebounced = useCallback(
    debounce(setSentimentInput, 300),
    []
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (bot && canSubmit) {
      setInputValue("");
      setBotMessage("");
      setTimeout(
        () => setBotMessage(bot.getReply(inputValue)),
        botMessageDelay
      );
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!e.shiftKey && e.key === "Enter") {
      onSubmit(e);
    } else if (
      inputSuggestion &&
      e.key === "ArrowRight" &&
      inputRef.current?.selectionStart === inputValue.length
    ) {
      setInputValue(inputSuggestion);
    }
  };

  const endChat = () => {
    setDisplayInput(false);
    setInputValue("");
    setSentimentInput("");
    setBotMessage("");
  };

  const promptChat = () =>
    bot &&
    !displayInput &&
    !botMessage &&
    setChatPromptTimeout(setTimeout(() => setBotMessage(clickPrompt), 700));

  const promptUnloadedChat = () => {
    setBotMessage(unloadedPrompt);
    setTimeout(() => setBotMessage(""), 20000);
  };

  const clearChatPrompt = () =>
    chatPromptTimeout && clearTimeout(chatPromptTimeout);

  useEffect(() => {
    // Prevent double bot render on locale change by delaying mount
    const botTimeout = setTimeout(() => {
      import("lib/bot").then(({ bot }) => setBot(bot));
    }, 500);

    return () => clearTimeout(botTimeout);
  }, []);

  useEffect(() => {
    if (bot && sentimentInput) {
      setSentiment(bot.getSentiment(sentimentInput));
    }
  }, [bot, sentimentInput]);

  useEffect(() => {
    setCanSubmit(!!inputValue.trim());

    if (inputValue && bot) {
      setInputSuggestion(bot.getSuggestion(inputValue));
      setSentimentInputDebounced(inputValue);
    } else {
      setInputSuggestion(undefined);
    }
  }, [setSentimentInputDebounced, inputValue, bot]);

  useEffect(() => {
    if (bot) {
      setBotMessage("");
      if (typeof place === "string" && place in workplaceIntents) {
        setTimeout(
          () =>
            setBotMessage(bot.getReply(workplaceIntents[place as Workplace])),

          botMessageDelay
        );
      } else if (
        typeof channel === "string" &&
        channel in contactChannelIntents
      ) {
        setTimeout(
          () =>
            setBotMessage(
              bot.getReply(contactChannelIntents[channel as ContactChannel])
            ),

          botMessageDelay
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bot, channel, place]);

  useEffect(() => {
    if (bot && botMessage) {
      botNotificationAudio?.load();
      botNotificationAudio?.play();
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
            onMouseEnter={promptChat}
            onMouseLeave={clearChatPrompt}
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
                  InputProps={{
                    sx: {
                      height: "100%",
                    },
                  }}
                />
              </Grow>
              <Grow in={displayInput}>
                <RobotChatInput
                  inputRef={inputRef}
                  value={inputValue}
                  canSubmit={canSubmit}
                  onChange={(e) => setInputValue(e.target.value)}
                  onClose={endChat}
                  onKeyDown={onKeyDown}
                  placeholder={t("Type something")}
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
