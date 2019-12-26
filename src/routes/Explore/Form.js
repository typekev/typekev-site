import React, { useState, useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiSend, mdiRobot, mdiMicrophone, mdiMicrophoneOff } from '@mdi/js';
import { Container, Tooltip } from '@material-ui/core';
import { getSampleQuestion } from 'hooks/useSocket';

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

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit(sendMessage, setValue, value)}>
        <FormControl required fullWidth autoFocus hiddenLabel>
          <FilledInput
            onChange={onChange(setValue)}
            value={value}
            disabled={disabled}
            id="chatbot-input"
            margin="dense"
            placeholder={disabled ? 'The bot is typing' : 'Tell me something'}
            inputProps={{ 'aria-label': 'chatbot input' }}
            startAdornment={
              <InputAdornment position="start">
                <Tooltip title="Generate a random question">
                  <IconButton
                    edge="start"
                    aria-label="generate a random question"
                    onClick={onGetRandomQuestion(setValue)}
                  >
                    <Icon path={mdiRobot} size={1} color="currentColor" />
                  </IconButton>
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
                        aria-label="submit message"
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
                  <Tooltip title="Submit">
                    <span>
                      <IconButton
                        edge="end"
                        aria-label="submit message"
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
    </Container>
  );
}

Form.propTypes = {
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
