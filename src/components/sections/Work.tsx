import { useTranslations } from "next-intl";

import { ListItemLink } from "@/components/ListItemLink";
import { linkedInExperienceUrl } from "@/helpers/links";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section id="work">
      <a href="#work" className="title">
        {t("title")}
      </a>
      <ListItemLink id="ses" href="#ses">
        SES Satellites
      </ListItemLink>
      <ListItemLink id="emailtreeai" href="#emailtreeai">
        EmailTree AI
      </ListItemLink>
      <ListItemLink id="devoteam" href="#devoteam">
        Devoteam
      </ListItemLink>
      <ListItemLink href={linkedInExperienceUrl}>{t("more")}</ListItemLink>
    </section>
  );
}
