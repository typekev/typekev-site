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
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

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
            <A
              href={ContactAddress.linkedin}
              highlight={channel === ContactChannel.LinkedIn}
            >
              {t("LinkedIn")}
            </A>
          </li>
          <li>
            <Tooltip title={t(copied ? "Copied" : "Copy")} followCursor>
              <A onClick={copyEmail}>
                {t("Email")}
                <Icon
                  path={
                    copied
                      ? mdiClipboardCheckMultipleOutline
                      : mdiClipboardMultipleOutline
                  }
                />
              </A>
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
`;
