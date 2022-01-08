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
  useEffect,
  useRef,
  useState,
} from "react";

import { Fade } from "@mui/material";
import Grow from "@mui/material/Grow";
import { debounce } from "@mui/material/utils";

import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { Bot, RobotSentiment, Workplace } from "types.d";

import { RobotChatBubble } from "./robot/RobotChatBubble";
import { RobotChatInput } from "./robot/RobotChatInput";
import { RobotChatInputForm } from "./robot/RobotChatInputForm";
import { RobotHead } from "./robot/RobotHead";
import { RobotHeadButton } from "./robot/RobotHeadButton";
import { RobotHeadContainer } from "./robot/RobotHeadContainer";
import { TypeAheadInput } from "./robot/TypeAheadInput";
import { SENTIMENT_EMOTE_MAP } from "./robot/emotes";
import { workplaceIntents } from "./robot/workplaceIntents";

const RobotInPortal = dynamic<PropsWithChildren<unknown>>(
  () =>
    import("./robot/RobotInPortal").then(({ RobotInPortal }) => RobotInPortal),
  { ssr: false }
);

const suggestions = ["A suggestion"];
const getSuggestion = (value: string) =>
  suggestions.find(
    (suggestion) =>
      suggestion.toLowerCase().substring(0, value.length) ===
      value.toLowerCase()
  );

export const Robot = memo(() => {
  const { t } = useTranslation();
  const {
    query: { place },
  } = useRouter();
  const [bot, setBot] = useState<Bot>();
  const [displayInput, setDisplayInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputSuggestion, setInputSuggestion] = useState<string>();
  const [sentimentInput, setSentimentInput] = useState(inputValue);
  const [sentiment, setSentiment] = useState(RobotSentiment.NEUTRAL);
  const [botMessage, setBotMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const botMessageDelay = botMessage ? 500 : 0;

  const clickPrompt = t("Have a question? Click me!");
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

    if (inputValue) {
      setInputSuggestion(getSuggestion(inputValue));
      setSentimentInputDebounced(inputValue);
    } else {
      setInputSuggestion(undefined);
    }
  }, [setSentimentInputDebounced, inputValue]);

  useEffect(() => {
    if (bot && typeof place === "string" && place in workplaceIntents) {
      setBotMessage("");
      setTimeout(
        () => setBotMessage(bot.getReply(workplaceIntents[place as Workplace])),

        botMessageDelay
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bot, place]);

  if (!bot) {
    return null;
  }

  return (
    <RobotInPortal>
      <RobotChatBubble message={botMessage} />
      <Fade appear mountOnEnter unmountOnExit in>
        <RobotHeadButton
          component="div"
          onClick={() => !displayInput && setDisplayInput(true)}
        >
          <RobotHeadContainer
            disableHover={displayInput}
            onMouseEnter={() =>
              !displayInput && !botMessage && setBotMessage(clickPrompt)
            }
            onMouseLeave={() =>
              botMessage === clickPrompt &&
              setTimeout(() => setBotMessage(""), 200)
            }
          >
            <RobotHead
              id="robot-head"
              path={SENTIMENT_EMOTE_MAP[sentiment]}
              color="transparent"
            />
          </RobotHeadContainer>
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
        </RobotHeadButton>
      </Fade>
    </RobotInPortal>
  );
});

Robot.displayName = Robot.name;
