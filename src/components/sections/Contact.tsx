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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled, css } from "@mui/material/styles";
import { writeText } from "clipboard-polyfill/text";

import { Section } from "components/Section";
import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { ContactChannel } from "types.d";

import { ContactLink } from "./contact/ContactLink";

export const Contact = memo(
  (props: ComponentPropsWithoutRef<typeof Section>) => {
    const { t } = useTranslation();
    const {
      query: { channel },
    } = useRouter();
    const [copied, setCopied] = useState(false);
    const copyEmail = () =>
      writeText(ContactAddress.email).then(() => setCopied(true));

    return (
      <ContactSection title={t("Ways you can contact me")} {...props}>
        <ul>
          <li>
            <ContactLink
              variant="text"
              color={channel === ContactChannel.LinkedIn ? "info" : undefined}
              href={ContactAddress.linkedin}
            >
              {t("LinkedIn")}
            </ContactLink>
          </li>
          <li>
            <ContactLink variant="text" href={`mailto:${ContactAddress.email}`}>
              {t("Email")}
            </ContactLink>
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
