import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

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
    <form onSubmit={onSubmit(sendMessage, setValue, value)}>
      <TextField
        onChange={onChange(setValue)}
        value={value}
        disabled={disabled}
        id="chatbot-input"
        margin="dense"
        autoFocus
        hiddenLabel
        variant="filled"
        placeholder={disabled ? 'The bot is typing...' : 'Tell me something...'}
        inputProps={{ 'aria-label': 'chatbot input' }}
      />
    </form>
  );
}

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};