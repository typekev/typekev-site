import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiSend, mdiRobot } from '@mdi/js';
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

export default function Form({ sendMessage, disabled }) {
  const [value, setValue] = useState(initialState.value);

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit(sendMessage, setValue, value)}>
        <FilledInput
          fullWidth
          autoFocus
          hiddenLabel
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
                  onClick={() => setValue(getSampleQuestion())}
                  onMouseDown={() => setValue(getSampleQuestion())}
                >
                  <Icon path={mdiRobot} size={1} color="currentColor" />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Tooltip title="Submit">
                <IconButton
                  edge="end"
                  aria-label="submit message"
                  onClick={onSubmit(sendMessage, setValue, value)}
                  onMouseDown={onSubmit(sendMessage, setValue, value)}
                >
                  <Icon path={mdiSend} size={1} color="currentColor" />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          }
        />
      </form>
    </Container>
  );
}

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
