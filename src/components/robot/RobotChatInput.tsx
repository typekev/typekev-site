/**
 *
 * RobotChatInput
 *
 */
import { forwardRef, memo } from "react";

import { mdiClose, mdiSend } from "@mdi/js";
import { Icon } from "@mdi/react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends Omit<OutlinedTextFieldProps, "variant"> {
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
                <IconButton
                  aria-label="Close"
                  size="small"
                  onClick={onClose ?? undefined}
                >
                  <Icon path={mdiClose} size={1} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: -1 }}>
                <IconButton
                  aria-label="Submit"
                  type="submit"
                  size="small"
                  disabled={!canSubmit}
                >
                  <Icon path={mdiSend} size={1} />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              boxShadow: 1,
              background: "transparent",
            },
            ...InputProps,
          }}
          {...rest}
        />
      );
    }
  )
);

RobotChatInput.displayName = RobotChatInput.name;
