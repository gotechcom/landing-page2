"use client";

import { useI18n } from "@/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <form
            action={`mailto:thanhle@gotechcom.com`}
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name_placeholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email_placeholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.contact.form.phone_placeholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={t.contact.form.company_placeholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                {t.contact.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={t.contact.form.message_placeholder}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              {t.contact.form.submit}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>

          {/* Contact info */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">{t.contact.info.title}</h3>

            <div className="space-y-5">
              <div>
                <div className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-wider">
                  {t.contact.info.company}
                </div>
                <div className="text-xs text-muted-foreground">
                  ({t.contact.info.transaction_name})
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">MST / Tax ID</div>
                  <div className="font-mono text-sm">{t.contact.info.tax_id}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">
                    {t.contact.info.representative}
                  </div>
                  <div className="font-semibold text-sm">Lê Cao Minh Thành</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">Address</div>
                  <div className="text-sm">{t.contact.info.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a
                    href="mailto:thanhle@gotechcom.com"
                    className="text-sm text-primary hover:underline"
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <a
                    href="tel:+84936900898"
                    className="text-sm text-primary hover:underline"
                  >
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
