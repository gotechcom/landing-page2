"use client";

import { useI18n } from "@/i18n";
import ErrorShell from "@/components/ErrorShell";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <ErrorShell
      code="404"
      title={t.errors.not_found.title}
      description={t.errors.not_found.description}
      homeLabel={t.errors.back_home}
    />
  );
}
