/**
 *
 * Contact
 *
 */
import { memo, ComponentPropsWithoutRef, useState } from "react";

import {
  mdiClipboardCheckMultipleOutline,
  mdiClipboardMultipleOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled, css } from "@mui/material/styles";

import { Section } from "components/Section";
import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { ContactChannel } from "types.d";

import { A } from "./contact/A";

export const Contact = memo(
  (props: ComponentPropsWithoutRef<typeof Section>) => {
    const { t } = useTranslation();
    const {
      query: { channel },
    } = useRouter();
    const [copied, setCopied] = useState(false);
    const copyEmail = () =>
      navigator.clipboard
        .writeText(ContactAddress.email)
        .then(() => setCopied(true));

    return (
      <ContactSection title={t("Ways you can contact me")} {...props}>
        <ul>
          <li>
            <Button variant="text">
              <A
                href={ContactAddress.linkedin}
                highlight={channel === ContactChannel.LinkedIn}
              >
                {t("LinkedIn")}
              </A>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <A href={`mailto:${ContactAddress.email}`}>{t("Email")}</A>
            </Button>
            <Tooltip title={t(copied ? "Copied" : "Copy")} followCursor>
              <IconButton color="inherit" onClick={copyEmail}>
                <Icon
                  path={
                    copied
                      ? mdiClipboardCheckMultipleOutline
                      : mdiClipboardMultipleOutline
                  }
                />
              </IconButton>
            </Tooltip>
          </li>
        </ul>
      </ContactSection>
    );
  }
);

Contact.displayName = Contact.name;

enum ContactAddress {
  linkedin = "https://linkedin.com/in/typekev",
  email = "kevin.gonzalez@emailtree.ai",
}

const ContactSection = styled(Section)`
  > div {
    margin-left: -0.625rem;
  }

  svg {
    width: 1.25em;
    height: 1.25em;

    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        width: 1.5em;
        height: 1.5em;
      }
      ${theme.breakpoints.up("lg")} {
        width: 1.75em;
        height: 1.75em;
      }
      ${theme.breakpoints.up("xl")} {
        width: 2em;
        height: 2em;
      }
    `}
  }
`;
