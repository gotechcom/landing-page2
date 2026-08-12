export type Translations = {
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    contact: string;
    language: string;
  };

  hero: {
    headline: string;
    subheadline: string;
    cta_contact: string;
    cta_learn_more: string;
  };

  about: {
    title: string;
    description: string;
    stats: {
      years: string;
      projects: string;
      clients: string;
      products: string;
    };
  };

  products: {
    title: string;
    subtitle: string;
    gostore: {
      name: string;
      year: string;
      description: string;
      features: readonly string[];
    };
    betinyai: {
      name: string;
      year: string;
      description: string;
      features: readonly string[];
    };
  };

  services: {
    title: string;
    subtitle: string;
    items: {
      infrastructure: {
        name: string;
        description: string;
      };
      custom_software: {
        name: string;
        description: string;
      };
      ai_consulting: {
        name: string;
        description: string;
      };
    };
  };

  faq: {
    title: string;
    subtitle: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };

  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      submit: string;
      name_placeholder: string;
      email_placeholder: string;
      phone_placeholder: string;
      company_placeholder: string;
      message_placeholder: string;
    };
    info: {
      title: string;
      company: string;
      transaction_name: string;
      tax_id: string;
      representative: string;
      address: string;
      email: string;
      phone: string;
    };
  };

  footer: {
    copyright: string;
    address: string;
    links: {
      privacy: string;
      terms: string;
      sitemap: string;
    };
  };
};

const en = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services",
    contact: "Contact",
    language: "Tiếng Việt",
  },

  hero: {
    headline: "Digital Transformation Solutions for Vietnamese Enterprises",
    subheadline:
      "GoTechCom delivers comprehensive technology solutions for Vietnamese enterprises. Since 2015, we have empowered small and medium businesses through their digital transformation journey with software products, technology infrastructure, and AI consulting. Our experienced engineering team is ready to help you enhance competitiveness and achieve sustainable growth in the digital economy.",
    cta_contact: "Get in Touch",
    cta_learn_more: "Learn More",
  },

  about: {
    title: "About GoTechCom",
    description:
      "GoTechCom Technology JSC was founded in 2015 to be the trusted technology partner for Vietnamese enterprises on their digital transformation journey. Over the past decade, we have served more than 500 clients across retail, education, manufacturing, and services. Our flagship products include <a href=\"#products\">GoStore.vn</a> and <a href=\"#products\">Betinyai.com</a>. Our experienced team delivers <a href=\"#services\">Services</a> in software development, infrastructure, and AI consulting, committed to creating measurable business value for every client.",
    stats: {
      years: "Years of Experience",
      projects: "Projects Delivered",
      clients: "Trusted Clients",
      products: "Tech Products",
    },
  },

  products: {
    title: "Products",
    subtitle:
      "Technology products developed by GoTechCom, serving the diverse needs of businesses and consumers alike.",
    gostore: {
      name: "GoStore.vn",
      year: "2017",
      description:
        "GoStore.vn is a cloud-based POS retail management platform designed for small and medium businesses in Vietnam. Launched in 2017, GoStore supports multi-branch management, real-time inventory tracking, e-commerce marketplace integration, and iOS/Android mobile apps. Advanced reporting and analytics provide insights into sales performance and business trends. The platform scales from a single store to a nationwide chain, backed by our dedicated technical support team. Combined with GoTechCom's <a href=\"#services\">Services</a> for deployment and support to optimize your business operations.",
      features: [
        "Centralized multi-branch management",
        "Real-time inventory tracking",
        "E-commerce marketplace integration",
        "Mobile apps for iOS & Android",
        "Revenue reporting & business analytics",
        "Customer management & promotions",
      ],
    },
    betinyai: {
      name: "Betinyai.com",
      year: "2025",
      description:
        "Betinyai.com is a screen-free AI companion device for children's education, launched in 2025. Using voice recognition and natural language processing, it enables children to interact through conversation, ask questions, and explore topics. Age-appropriate content covers languages, math, science, and creative arts. The screen-free design protects children's eyes, GPS tracking ensures safety, and NFC-enabled plush shells make it friendly. Parents have full control via a companion app. Explore GoTechCom's <a href=\"#services\">Services</a> for AI consulting.",
      features: [
        "Smart AI voice interaction",
        "Age-appropriate educational content",
        "GPS location tracking for safety",
        "Parental controls via mobile app",
        "NFC-enabled plush toy shells",
        "Screen-free — protecting children's eyes",
      ],
    },
  },

  services: {
    title: "Services",
    subtitle:
      "GoTechCom provides a comprehensive range of technology services to meet every digital need of your business.",
    items: {
      infrastructure: {
        name: "Tech Infrastructure Development",
        description:
          "We provide end-to-end technology infrastructure consulting, design, and deployment for businesses of all sizes. Starting with a thorough assessment of your current setup, we design scalable, secure, and cost-effective solutions. We specialize in cloud migration, server architecture, network planning, database optimization, and backup and disaster recovery. Our solutions combine cloud and on-premises approaches tailored to Vietnamese business needs. Explore our <a href=\"#products\">Products</a> GoStore.vn and Betinyai.com, built on robust infrastructure.",
      },
      custom_software: {
        name: "Custom Software Development",
        description:
          "Our custom software development delivers tailored solutions for your unique business processes and challenges. We follow Agile methodology for transparency and flexibility. Specializing in web apps, mobile apps, enterprise systems, and API integrations with modern technology stacks. Our experienced team ensures high-quality code, on-time delivery, thorough testing, and complete documentation. We provide training and ongoing support. Explore our <a href=\"#products\">Products</a> GoStore.vn and Betinyai.com, developed by GoTechCom.",
      },
      ai_consulting: {
        name: "AI Consulting Services",
        description:
          "Our AI consulting helps businesses apply artificial intelligence and machine learning practically. We assess readiness, identify high-impact use cases, and implement process automation, intelligent document processing, advanced analytics, and predictive modeling. We develop custom chatbots and virtual assistants. Our team stays current with the latest AI advances including large language models and computer vision. We build AI strategy and sustainable adoption roadmaps focused on measurable business value. Explore our <a href=\"#products\">Products</a> Betinyai.com, powered by advanced AI.",
      },
    },
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers to common questions about GoTechCom's products, services, and how we can help your business.",
    items: [
      {
        question: "What is GoTechCom and what do you do?",
        answer:
          "GoTechCom Technology JSC is a Vietnamese technology company founded in 2015, specializing in digital transformation solutions for small and medium businesses. We offer custom software development, technology infrastructure services, and AI consulting. Our products include GoStore.vn (POS management platform) and Betinyai.com (AI children's education device).",
      },
      {
        question: "What are your main products and services?",
        answer:
          "GoStore.vn is our cloud-based POS retail management platform for businesses. Betinyai.com is a screen-free AI companion device for children's education. Our services include technology infrastructure development, custom software development tailored to your needs, and AI consulting for business growth.",
      },
      {
        question: "How does your development process work?",
        answer:
          "GoTechCom follows Agile methodology for transparency and flexibility. The process includes: initial consultation, requirements analysis, iterative development with regular feedback, thorough testing, deployment, and ongoing support. Clients are involved at every stage to ensure the final product meets expectations.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "GoTechCom serves diverse industries including retail, e-commerce, education, manufacturing, professional services, healthcare, and more. Our solutions adapt to various business models and sectors. Whether you are a small startup or an established enterprise, we tailor technology solutions to your specific industry requirements.",
      },
      {
        question: "Do you provide support after project completion?",
        answer:
          "GoTechCom provides comprehensive post-project support including technical assistance, bug fixes, performance monitoring, and system updates. We offer flexible support packages for different needs and budgets. Our commitment extends beyond deployment — we build long-term partnerships to ensure continued success and help clients adapt to evolving business needs.",
      },
      {
        question: "How can I get started with GoTechCom?",
        answer:
          "Contact us through our website form, email thanhle@gotechcom.com, or call directly. GoTechCom will schedule a free consultation to understand your needs, then provide a detailed proposal covering scope, timeline, and investment. No obligation — we ensure the right fit before moving forward.",
      },
    ] as const,
  },

  contact: {
    title: "Contact Us",
    subtitle:
      "Leave your information and the GoTechCom team will reach out to you as soon as possible.",
    form: {
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      company: "Company Name",
      message: "Message",
      submit: "Send Message",
      name_placeholder: "Enter your full name",
      email_placeholder: "email@example.com",
      phone_placeholder: "+84 xxx xxx xxx",
      company_placeholder: "Your company name",
      message_placeholder: "Describe your needs...",
    },
    info: {
      title: "Contact Information",
      company: "GOTECHCOM TECHNOLOGY JSC",
      transaction_name: "GOTC CO.,LTD",
      tax_id: "0107123893",
      representative: "Le Cao Minh Thanh",
      address:
        "5th Floor, 1/120 Truong Chinh Street, Phuong Mai Ward, Dong Da District, Hanoi",
      email: "thanhle@gotechcom.com",
      phone: "+84936900898",
    },
  },

  footer: {
    copyright: "© {year} GOTECHCOM TECHNOLOGY JSC. All rights reserved.",
    address:
      "5th Floor, 1/120 Truong Chinh Street, Phuong Mai Ward, Dong Da District, Hanoi",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
    },
  },
} as const satisfies Translations;

export default en;
