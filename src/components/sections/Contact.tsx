/**
 *
 * Contact
 *
 */
import { memo, ComponentPropsWithoutRef } from "react";

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
      <Section title={t("Ways you can contact me")} {...props}>
        <ul>
          <li>
            <A href={links.linkedIn} target="_blank" rel="noreferrer">
              {t("LinkedIn")}
            </A>
          </li>
          <li>
            <A href={links.email}>{t("Email")}</A>
          </li>
        </ul>
      </Section>
    );
  }
);

Contact.displayName = Contact.name;

const A = styled("a")`
  :hover {
    color: ${palette.dodgerBlue};
  }
`;
