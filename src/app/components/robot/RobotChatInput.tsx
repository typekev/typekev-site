/**
 *
 * RobotChatInput
 *
 */
import { forwardRef, memo } from 'react';
import { Icon } from '@mdi/react';
import IconButton from '@mui/material/IconButton';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { mdiChevronDown, mdiSend } from '@mdi/js';

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {
  onClose?: VoidFunction;
  canSubmit?: boolean;
}

export const RobotChatInput = memo(
  forwardRef<HTMLDivElement, Props>(
    ({ onClose, canSubmit, InputProps, ...rest }, ref) => {
      return (
        <TextField
          ref={ref}
          fullWidth
          multiline
          maxRows={2}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: -1 }}>
                <IconButton size="small" onClick={onClose ?? undefined}>
                  <Icon path={mdiChevronDown} size={1} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: -1 }}>
                <IconButton type="submit" size="small" disabled={!canSubmit}>
                  <Icon path={mdiSend} size={1} />
                </IconButton>
              </InputAdornment>
            ),
            ...InputProps,
          }}
          {...rest}
        />
      );
    },
  ),
);
