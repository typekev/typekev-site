/**
 *
 * TranslationMenu
 *
 */
import Link from "next/link";
import { memo } from "react";

import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useRouter } from "hooks/useRouter";
import { useTranslation } from "hooks/useTranslation";
import { Locale } from "types.d";

export const TranslationMenu = memo((props: MenuProps) => {
  const { t } = useTranslation();
  const { asPath, locale } = useRouter();

  return (
    <Menu
      disablePortal
      disableScrollLock
      MenuListProps={{ disablePadding: true }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          zIndex: 2000,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            bottom: 24,
            right: -5,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "bottom" }}
      {...props}
    >
      <Link href={asPath} locale={Locale.en} scroll={false} passHref>
        <MenuItem selected={locale === Locale.en}>{t("English")}</MenuItem>
      </Link>
      <Link href={asPath} locale={Locale.fr} scroll={false} passHref>
        <MenuItem selected={locale === Locale.fr}>{t("French")}</MenuItem>
      </Link>
      <Link href={asPath} locale={Locale.fil} scroll={false} passHref>
        <MenuItem selected={locale === Locale.fil}>{t("Filipino")}</MenuItem>
      </Link>
    </Menu>
  );
});

TranslationMenu.displayName = TranslationMenu.name;
