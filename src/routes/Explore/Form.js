import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const initialState = {
  value: '',
};

export default function Form({ sendMessage }) {
  const [value, setValue] = useState(initialState.value);

  return (
    <form
      onSubmit={e => {
        sendMessage(value);
        setValue(initialState.value);
        e.preventDefault();
      }}
    >
      <TextField
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        value={value}
        id="chatbot-input"
        margin="dense"
        autoFocus
        hiddenLabel
        variant="filled"
        placeholder="Tell me something..."
        inputProps={{ 'aria-label': 'chatbot input' }}
      />
    </form>
  );
}

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
