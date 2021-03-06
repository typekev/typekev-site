import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Icon from '@mdi/react';
import { mdiSend, mdiRobot, mdiMicrophone, mdiMicrophoneOff } from '@mdi/js';
import { getSampleQuestion } from 'hooks/useSocket';
import Transition from 'components/Transition';

export const CHAT_INPUT_ID = 'chatbot-input';

export const focusChat = (value, disabled, chatInput, isChatFocused) =>
  (value || !disabled) && chatInput && !isChatFocused && chatInput.focus();

export const submitTranscript = (value, submit) => value && submit({ preventDefault: noop });

const PROMPT_DESTINATION_MAP = {
  'Learn more about Kevin': '/discover/',
  "Learn about Kevin's job": '/work/',
};

export const initialState = {
  value: '',
};

export const onSubmit = (sendMessage, setValue, value) => e => {
  e.preventDefault();
  sendMessage(value);
  setValue(initialState.value);
};

export const onChange = setValue => ({ currentTarget }) => setValue(currentTarget.value);

export const onGetRandomQuestion = setValue => () => setValue(getSampleQuestion());

function Form({
  prompts,
  sendMessage,
  disabled,
  interimTranscript,
  transcript,
  startListening,
  stopListening,
  listening,
  browserSupportsSpeechRecognition,
}) {
  const [value, setValue] = useState(initialState.value);

  useEffect(() => {
    if (browserSupportsSpeechRecognition && listening) {
      onChange(setValue)({ currentTarget: { value: interimTranscript || transcript } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interimTranscript, transcript]);

  useEffect(() => {
    const chatInput = document.getElementById(CHAT_INPUT_ID);
    focusChat(value, disabled, chatInput, document.activeElement.id === CHAT_INPUT_ID);
  }, [value, disabled]);

  useEffect(() => {
    submitTranscript(value, onSubmit(sendMessage, setValue, value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit(sendMessage, setValue, value)}>
        <FormControl required fullWidth autoFocus hiddenLabel>
          <FilledInput
            onChange={onChange(setValue)}
            value={value}
            disabled={disabled}
            id={CHAT_INPUT_ID}
            margin="dense"
            placeholder={disabled ? 'The bot is typing' : 'Tell me something'}
            inputProps={{ 'aria-label': 'chatbot input' }}
            startAdornment={
              <InputAdornment position="start">
                <Tooltip
                  title={
                    value
                      ? "You've already started typing a question"
                      : 'Generate a random question'
                  }
                >
                  <span>
                    <IconButton
                      edge="start"
                      aria-label="generate a random question"
                      disabled={disabled || !!value}
                      onClick={onGetRandomQuestion(setValue)}
                    >
                      <Icon path={mdiRobot} size={1} color="currentColor" />
                    </IconButton>
                  </span>
                </Tooltip>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {browserSupportsSpeechRecognition && !value ? (
                  <Tooltip title="Tap to talk">
                    <span>
                      <IconButton
                        edge="end"
                        aria-label="tap to talk"
                        disabled={disabled}
                        onClick={listening ? stopListening : startListening}
                      >
                        <Icon
                          path={listening ? mdiMicrophoneOff : mdiMicrophone}
                          size={1}
                          color="currentColor"
                        />
                      </IconButton>
                    </span>
                  </Tooltip>
                ) : (
                  <Tooltip title="Send message">
                    <span>
                      <IconButton
                        edge="end"
                        aria-label="send message"
                        disabled={disabled || !value}
                        onClick={onSubmit(sendMessage, setValue, value)}
                      >
                        <Icon path={mdiSend} size={1} color="currentColor" />
                      </IconButton>
                    </span>
                  </Tooltip>
                )}
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <br />
      <Transition
        component={Fade}
        in={prompts.length > 0 && !disabled}
        timeout={1000}
        delay={disabled ? 0 : 500}
      >
        <ButtonGroup variant="contained" color="primary">
          {prompts.map(prompt => (
            <Button key={prompt} component={Link} to={PROMPT_DESTINATION_MAP[prompt]}>
              {prompt}
            </Button>
          ))}
        </ButtonGroup>
      </Transition>
    </Container>
  );
}

Form.propTypes = {
  prompts: PropTypes.arrayOf(PropTypes.string).isRequired,
  sendMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  interimTranscript: PropTypes.string.isRequired,
  transcript: PropTypes.string.isRequired,
  startListening: PropTypes.func.isRequired,
  stopListening: PropTypes.func.isRequired,
  listening: PropTypes.bool.isRequired,
  browserSupportsSpeechRecognition: PropTypes.bool.isRequired,
};

const options = {
  autoStart: false,
  continuous: false,
};

export default SpeechRecognition(options)(Form);
