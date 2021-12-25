/**
 *
 * Robot
 *
 */
import {
  FormEvent,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { InPortal } from 'react-reverse-portal';
import styled, { css } from 'styled-components/macro';
import { Icon } from '@mdi/react';
import { debounce } from '@mui/material';
import Grow from '@mui/material/Grow';
import ButtonBase from '@mui/material/ButtonBase';

import { media } from 'styles/media';
import { gradients } from 'styles/gradients';
import { animations } from 'styles/animations';
import { translations } from 'locales/translations';
import { bot } from 'lib/bot';
import { RobotSentiment } from 'types/robot';

import { RobotChatBubble } from './robot/RobotChatBubble';
import { RobotChatInput } from './robot/RobotChatInput';
import { robotPortalNode } from './robot/robotPortalNode';
import { SENTIMENT_EMOTE_MAP } from './robot/emotes';

const suggestions = ['A suggestion'];
const getSuggestion = (value: string) =>
  suggestions.find(
    suggestion =>
      suggestion.toLowerCase().substring(0, value.length) ===
      value.toLowerCase(),
  );

export const Robot = memo(() => {
  const { t } = useTranslation();
  const [displayInput, setDisplayInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputSuggestion, setInputSuggestion] = useState<string>();
  const [sentimentInput, setSentimentInput] = useState(inputValue);
  const [sentiment, setSentiment] = useState(RobotSentiment.NEUTRAL);
  const [botMessage, setBotMessage] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const clickPrompt = t(translations['Have a question? Click me!']);
  const typeAheadInputValue = inputSuggestion
    ? `${inputValue}${inputSuggestion.substring(inputValue.length)}`
    : inputValue;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSentimentInputDebounced = useCallback(
    debounce(setSentimentInput, 300),
    [],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setInputValue('');
      setBotMessage('');
      setTimeout(
        () => setBotMessage(() => bot.getReply(inputValue)),
        botMessage ? 500 : 0,
      );
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!e.shiftKey && e.key === 'Enter') {
      onSubmit(e);
    } else if (
      inputSuggestion &&
      e.key === 'ArrowRight' &&
      inputRef.current?.selectionStart === inputValue.length
    ) {
      setInputValue(inputSuggestion);
    }
  };

  useEffect(() => {
    if (sentimentInput) {
      setSentiment(bot.getSentiment(sentimentInput));
    }
  }, [sentimentInput]);

  useEffect(() => {
    setCanSubmit(!!inputValue.trim());

    if (inputValue) {
      setInputSuggestion(getSuggestion(inputValue));
      setSentimentInputDebounced(inputValue);
    } else {
      setInputSuggestion(undefined);
    }
  }, [setSentimentInputDebounced, inputValue]);

  return (
    <InPortal node={robotPortalNode}>
      <RobotChatBubble message={botMessage} />
      <RobotHeadButton onClick={() => !displayInput && setDisplayInput(true)}>
        <RobotHeadContainer
          displayInput={displayInput}
          onMouseEnter={() =>
            !displayInput && !botMessage && setBotMessage(clickPrompt)
          }
          onMouseLeave={() =>
            botMessage === clickPrompt &&
            setTimeout(() => setBotMessage(''), 200)
          }
        >
          <RobotHead
            id="robot-head"
            path={SENTIMENT_EMOTE_MAP[sentiment]}
            color="transparent"
          />
        </RobotHeadContainer>
        <ChatInputForm onSubmit={onSubmit}>
          <Grow in={displayInput}>
            <TypeAheadInput
              disabled
              value={typeAheadInputValue}
              InputProps={{
                sx: {
                  height: '100%',
                },
              }}
            />
          </Grow>
          <Grow in={displayInput}>
            <RobotChatInput
              inputRef={inputRef}
              value={inputValue}
              canSubmit={canSubmit}
              onChange={e => setInputValue(e.target.value)}
              onClose={() => setDisplayInput(false)}
              onKeyDown={onKeyDown}
              InputProps={{
                sx: {
                  boxShadow: 1,
                  background: 'transparent',
                },
              }}
            />
          </Grow>
        </ChatInputForm>
      </RobotHeadButton>
    </InPortal>
  );
});

const ChatInputForm = styled.form`
  position: absolute;
  pointer-events: all;
  bottom: 0;
  left: 0;
  width: calc(100% + 4em);
  z-index: 1;

  ${css`
    ${media.small`
        left: -0.5em;
        width: calc(100% + 1em);
      `}

    ${media.medium`
        left: -1em;
        width: calc(100% + 2em);
        bottom: -0.5em;
      `}
  
      ${media.large`
        left: -2em;
        width: calc(100% + 4em);
      `}
  `}
`;

const TypeAheadInput = styled(RobotChatInput)`
  position: absolute;
  pointer-events: none;
  height: 100%;

  textarea {
    overflow: hidden;
    height: 100% !important;
  }

  fieldset {
    display: none;
  }

  svg {
    color: transparent;
  }
`;

const RobotHeadButton = styled(ButtonBase)`
  border-radius: 50%;
  margin: 0.5em -0.5em 1em -0.5em;
  padding: 0.5em;

  ${css`
    ${media.small`
      margin: 0 -1.5em 2em -1.5em;
      padding: 1.5em;
    `}

    ${media.medium`
      margin: 0 -2em 3em -2em;
      padding: 2em;
    `}

    ${media.large`
      margin: 0 -3em 4em -3em;
      padding: 3em;
    `}
  `}
`;

const RobotHeadContainer = styled.div<{ displayInput: boolean }>`
  position: relative;
  float: right;
  min-width: 5em;
  width: 5em;
  height: 5em;

  ${css`
    ${media.small`
      min-width: 6em;
      width: 9em;
      height: 9em;
    `}

    ${media.medium`
      min-width: 10em;
      width: 12em;
      height: 12em;
    `}

    ${media.large`
      min-width: 11em;
      width: 14em;
      height: 14em;
    `}
  `}

  & > svg {
    margin-top: -0.25em;

    ${css`
      ${media.small`
        margin-top: -0.5em;
      `}
      ${media.medium`
        margin-top: -0.75em;
      `}
    `}
  }

  ${({ displayInput }) =>
    !displayInput &&
    css`
      &:hover > svg {
        animation: ${animations.bgPosSway}, ${animations.axisSwayFast};
        mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${SENTIMENT_EMOTE_MAP.positive}'/></svg>")
          center/contain;
      }
    `}
`;

const RobotHead = styled(Icon)`
  --sway-x: 0em;

  ${css`
    ${media.small`
      --sway-x: 1em;
    `}
    ${media.medium`
      --sway-x: 1.5em;
    `}
  `}

  pointer-events: none;
  position: absolute;
  width: inherit;
  background: ${gradients.bgFocused};
  background-size: 550% 150%;
  animation: ${animations.bgPosSway}, ${animations.axisSway};

  ${({ path }) => css`
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${path}'/></svg>")
      center/contain;
  `}
`;

export { RobotOutPortal } from './robot/RobotOutPortal';
