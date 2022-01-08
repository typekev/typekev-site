/**
 *
 * Contact
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { Section } from "components/Section";
import { useTranslation } from "hooks/useTranslation";
import { palette } from "theme";

const links = {
  linkedIn: "https://linkedin.com/in/typekev",
  email: "mailto:kevin.gonzalez@emailtree.ai",
  emailCopy: "kevin.gonzalez@emailtree.ai",
};

export const Contact = memo(
  (props: ComponentPropsWithoutRef<typeof Section>) => {
    const { t } = useTranslation();

    return (
      <ContactSection title={t("Ways you can contact me")} {...props}>
        <ul>
          <li>
            <A href={links.linkedIn}>{t("LinkedIn")}</A>
          </li>
          <li>
            <A href={links.email}>{t("Email")}</A>
          </li>
        </ul>
      </ContactSection>
    );
  }
);

Contact.displayName = Contact.name;

const ContactSection = styled(Section)`
  > div {
    margin-left: -0.625rem;
  }
`;

const A = styled(Button)`
  color: ${palette.pictonBlue};
  font-weight: 300;
  text-decoration: underline;
  text-decoration-thickness: 0.0625em;

  :hover {
    text-decoration: underline;
    text-decoration-thickness: 0.0625em;
  }
`;
