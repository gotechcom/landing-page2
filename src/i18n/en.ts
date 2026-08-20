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

  errors: {
    not_found: {
      title: string;
      description: string;
    };
    generic: {
      title: string;
      description: string;
    };
    back_home: string;
    retry: string;
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
    headline: "Trusted Digital Transformation Solutions for Vietnamese Small and Medium Businesses",
    subheadline:
      "Since 2015, GoTechCom has delivered 200+ projects for 500+ Vietnamese businesses. We provide custom software, cloud infrastructure, and AI consulting through proven expertise and flagship products like GoStore.vn and Betinyai.com. Partner with us to drive sustainable growth in the digital economy.",
    cta_contact: "Get in Touch",
    cta_learn_more: "Learn More",
  },

  about: {
    title: "About GoTechCom",
    description:
      "GoTechCom Technology JSC was founded in 2015 with a clear vision: to become the trusted technology partner for Vietnamese enterprises on their digital transformation journey. Over the past decade, we have grown from a small software development team into a comprehensive technology solutions provider, serving more than 500 clients across retail, education, manufacturing, and services. Our flagship products — GoStore.vn for retail management and Betinyai.com for AI-powered children's education — demonstrate our commitment to creating practical, scalable solutions. Our team of experienced engineers and consultants follows international standards while maintaining deep understanding of the local market. From infrastructure development to custom software and AI consulting, we provide end-to-end services covering the entire technology stack. We build long-term partnerships with our clients, providing ongoing support and continuous improvement to ensure their sustained success.",
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
        "GoStore.vn is a cloud-based POS retail management platform built for Vietnamese small and medium businesses. Launched in 2017, it handles sales, inventory, multi-branch management, and e-commerce integration from a single dashboard with mobile apps for iOS and Android.",
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
        "Betinyai.com is a screen-free AI companion device designed to nurture creativity and learning in children. Launched in 2025, it uses voice interaction and age-appropriate educational content, with parental controls and GPS tracking for safety.",
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
          "We design and deploy scalable technology infrastructure tailored to your business needs. From cloud migration and server architecture to network planning and disaster recovery, we deliver secure, cost-effective solutions that grow with your organization.",
      },
      custom_software: {
        name: "Custom Software Development",
        description:
          "We build tailored software solutions using Agile methodology to address your unique business challenges. Our team specializes in web applications, mobile apps, enterprise systems, and API integrations with modern technology stacks, ensuring quality code and on-time delivery.",
      },
      ai_consulting: {
        name: "AI Consulting Services",
        description:
          "We help businesses turn AI into practical solutions, from process automation and intelligent document processing to predictive analytics and custom chatbots. Our consulting covers AI strategy, implementation, and ongoing optimization to deliver measurable business value.",
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
          "GoTechCom Technology JSC is a Vietnamese technology company founded in 2015, specializing in digital transformation solutions for small and medium businesses. We provide custom software development, technology infrastructure services, and AI consulting. We also develop our own products including GoStore.vn (POS management platform) and Betinyai.com (AI children's education device).",
      },
      {
        question: "What are your main products and services?",
        answer:
          "Our flagship products are GoStore.vn, a cloud-based POS retail management system for businesses, and Betinyai.com, a screen-free AI companion device for children's education. Our services include technology infrastructure development, custom software development tailored to your business needs, and AI consulting to help you leverage artificial intelligence for business growth.",
      },
      {
        question: "How does your development process work?",
        answer:
          "We follow an Agile development methodology that ensures transparency and flexibility. The process typically includes: initial consultation to understand your needs, requirements analysis and planning, iterative development with regular client feedback, thorough testing and quality assurance, deployment and launch, and ongoing support and maintenance. We keep you involved at every stage to ensure the final product meets your expectations.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including retail and e-commerce, education, manufacturing, professional services, healthcare, and more. Our solutions are adaptable to various business models and sectors. Whether you're a small startup or an established enterprise, we can tailor our technology solutions to meet your specific industry requirements.",
      },
      {
        question: "Do you provide support after project completion?",
        answer:
          "Yes, we provide comprehensive post-project support including technical assistance, bug fixes, performance monitoring, and system updates. We offer flexible support packages to suit different needs and budgets. Our commitment doesn't end at deployment — we build long-term partnerships with our clients to ensure their continued success and help them adapt to evolving business needs.",
      },
      {
        question: "How can I get started with GoTechCom?",
        answer:
          "Getting started is easy. You can contact us through our contact form, email us at thanhle@gotechcom.com, or call us directly. We'll schedule an initial consultation to understand your needs and goals. From there, we'll provide a detailed proposal outlining the scope, timeline, and investment required. There's no obligation — we want to ensure we're the right fit for your project before moving forward.",
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

  errors: {
    not_found: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
    },
    generic: {
      title: "Something went wrong",
      description: "We're working on fixing it. Please try again later.",
    },
    back_home: "Back to home",
    retry: "Try again",
  },
} as const satisfies Translations;

export default en;
