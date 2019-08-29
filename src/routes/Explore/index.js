import React from 'react';
import TextField from '@material-ui/core/TextField';
import Content from 'templates/Content';
import Title from 'components/Title';

export default function Explore() {
  return (
    <Content align="center">
      <Title variant="h6" align="center">
        Explore
      </Title>
      <TextField
        id="filled-dense-hidden-label"
        margin="dense"
        hiddenLabel
        variant="filled"
        placeholder="Dense hidden label"
        inputProps={{ 'aria-label': 'dense hidden label' }}
        fullWidth
      />
    </Content>
  );
}
