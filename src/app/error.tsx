"use client";

import { useI18n } from "@/i18n";
import ErrorShell from "@/components/ErrorShell";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useI18n();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorShell
      code="500"
      title={t.errors.generic.title}
      description={t.errors.generic.description}
      homeLabel={t.errors.back_home}
    />
  );
}
