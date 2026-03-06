"use client";

import { useI18n } from "@/i18n";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo size={28} showText />
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.links.terms}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{t.footer.copyright.replace("{year}", String(year))}</p>
          <p>{t.footer.address}</p>
        </div>
      </div>
    </footer>
  );
}
