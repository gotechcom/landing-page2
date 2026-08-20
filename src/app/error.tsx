"use client";

import { useI18n } from "@/i18n";
import ErrorShell from "@/components/ErrorShell";
import { useEffect, useCallback } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useI18n();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleRetry = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorShell
      code="500"
      title={t.errors.generic.title}
      description={t.errors.generic.description}
      homeLabel={t.errors.back_home}
      onRetry={handleRetry}
      retryLabel={t.errors.retry}
    />
  );
}
