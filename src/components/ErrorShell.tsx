"use client";

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface ErrorShellProps {
  code: string;
  title: string;
  description: string;
  homeLabel: string;
}

export default function ErrorShell({ code, title, description, homeLabel }: ErrorShellProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-5xl sm:text-7xl font-bold text-primary">{code}</p>
          <h1 className="mt-4 text-2xl font-semibold text-foreground">{title}</h1>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <Link
            href="/"
            className="mt-6 inline-block px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {homeLabel}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
