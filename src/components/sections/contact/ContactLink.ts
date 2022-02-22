import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ContactLink = styled(Button)`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  text-decoration: underline;
  text-decoration-thickness: 0.0625em;

  :hover {
    text-decoration: underline;
    text-decoration-thickness: 0.0625em;
  }

  & > svg {
    width: 0.625em;
    margin-left: 0.125ch;
  }
`;
