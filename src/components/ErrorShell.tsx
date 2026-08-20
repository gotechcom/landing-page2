"use client";

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface ErrorShellProps {
  code: string;
  title: string;
  description: string;
  homeLabel: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export default function ErrorShell({ code, title, description, homeLabel, onRetry, retryLabel }: ErrorShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-var(--header-height,4rem))] flex items-center justify-center pt-[var(--header-height,4rem)]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-5xl sm:text-7xl font-bold text-primary">{code}</p>
          <h1 className="mt-4 text-2xl font-semibold text-foreground">{title}</h1>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {onRetry && retryLabel && (
              <button
                onClick={onRetry}
                className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors"
              >
                {retryLabel}
              </button>
            )}
            <Link
              href="/"
              className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors"
            >
              {homeLabel}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
