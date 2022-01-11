/**
 *
 * RobotHeadButton
 *
 */
import ButtonBase, {
  ButtonBaseProps,
  ButtonBaseTypeMap,
  ExtendButtonBase,
} from "@mui/material/ButtonBase";
import { styled, css } from "@mui/material/styles";

type Button = ExtendButtonBase<
  ButtonBaseTypeMap<ButtonBaseProps<"div">, "div">
>;

type StyledButton = (
  props: ButtonBaseProps<"div"> & { component: "div" }
) => JSX.Element;

export const RobotHeadButton = styled<Button>(ButtonBase as Button)`
  border-radius: 50%;
  margin: 0.5em -0.5em 1em -0.5em;
  padding: 0.5em;

  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      margin: 0 -1.5em 2em -1.5em;
      padding: 1.5em;
    }
    ${theme.breakpoints.up("md")} {
      margin: 0 -2em 3em -2em;
      padding: 2em;
    }
    ${theme.breakpoints.up("lg")} {
      margin: 0 -3em 4em -3em;
      padding: 3em;
    }
  `}
` as StyledButton;
