"use client";

import { useI18n } from "@/i18n";

const stats = [
  { value: "10+", key: "years" as const },
  { value: "200+", key: "projects" as const },
  { value: "500+", key: "clients" as const },
  { value: "2", key: "products" as const },
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                {t.about.stats[stat.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
