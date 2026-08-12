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
      "GoTechCom delivers comprehensive technology solutions that empower Vietnamese businesses to achieve digital transformation effectively. Since 2015, we have been partnering with small and medium enterprises across the country through cutting-edge software products, robust technology infrastructure, and expert AI consulting services, helping enhance competitiveness and drive sustainable growth in the digital economy.",
    cta_contact: "Get in Touch",
    cta_learn_more: "Learn More",
  },

  about: {
    title: "About GoTechCom",
    description:
      "GoTechCom Technology JSC was founded in 2015 with a clear vision: to become the most trusted technology partner for Vietnamese enterprises on their digital transformation journey. Over more than a decade, we have accompanied hundreds of businesses across various sectors including retail, education, manufacturing, and professional services. Our flagship technology products include <a href=\"#products\">GoStore.vn</a>, a cloud-based POS management platform, and <a href=\"#products\">Betinyai.com</a>, an innovative AI-powered children's education device. Our experienced engineering team delivers <a href=\"#services\">services</a> in custom software development, technology infrastructure, and AI consulting, committed to creating measurable business value for every client we proudly serve across Vietnam.",
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
        "GoStore.vn is a cloud-based POS retail management platform designed specifically for small and medium businesses in Vietnam. Launched in 2017, GoStore supports centralized multi-branch management, real-time inventory tracking, e-commerce marketplace integration, and iOS/Android mobile apps. Advanced reporting and analytics help track business performance anytime, anywhere. The platform scales seamlessly from a single store to a nationwide chain, backed by our professional technical team. Combined with GoTechCom's <a href=\"#services\">services</a> for deployment and ongoing support to optimize your business operations effectively.",
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
        "Betinyai.com is a screen-free AI companion device for children's education, launched in 2025. The device uses voice recognition and natural language processing, enabling children to interact through conversation, ask questions, and explore topics independently. Age-appropriate educational content covers languages, math, science, and creative arts. The screen-free design protects children's eyes, GPS tracking ensures safety, and NFC-enabled plush shells create a friendly, tactile experience. Parents maintain full control via a companion mobile app. Explore GoTechCom's <a href=\"#services\">services</a> for AI consulting to learn more.",
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
          "We provide end-to-end technology infrastructure consulting, design, and deployment for businesses of all sizes. Starting with a thorough assessment of your current setup, we design scalable, secure, and cost-effective solutions. We specialize in cloud migration, server architecture, network planning, database optimization, and backup and disaster recovery. Our solutions combine cloud and on-premises approaches tailored to Vietnamese business requirements. Explore our <a href=\"#products\">products</a> GoStore.vn and Betinyai.com, both built and operated on this robust infrastructure foundation.",
      },
      custom_software: {
        name: "Custom Software Development",
        description:
          "Our custom software development service delivers tailored solutions designed for your unique business processes and challenges. We follow Agile methodology, ensuring transparency and flexibility throughout. We specialize in web apps, mobile apps, enterprise systems, and API integrations using modern technology stacks. Our experienced team ensures high-quality code, on-time delivery, thorough testing, and complete documentation. We provide training and ongoing support. Explore our <a href=\"#products\">products</a> GoStore.vn and Betinyai.com, both developed by GoTechCom.",
      },
      ai_consulting: {
        name: "AI Consulting Services",
        description:
          "Our AI consulting helps businesses apply artificial intelligence and machine learning practically. We assess readiness and identify high-impact use cases. We implement process automation, intelligent document processing, advanced analytics, and predictive modeling. We develop custom chatbots and virtual assistants. Our team stays current with the latest AI advances including large language models and computer vision. We build sustainable AI strategy and adoption roadmaps focused on measurable business value. Explore our <a href=\"#products\">product</a> Betinyai.com, powered by advanced AI technology.",
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
          "GoTechCom Technology JSC is a Vietnamese technology company founded in 2015, specializing in digital transformation solutions for small and medium businesses. We offer custom software development, technology infrastructure services, and AI consulting. Our products include GoStore.vn, a POS management platform, and Betinyai.com, an AI children's education device.",
      },
      {
        question: "What are your main products and services?",
        answer:
          "GoStore.vn is our cloud-based POS retail management platform designed for businesses of all sizes. Betinyai.com is a screen-free AI companion device for children's education. Our services include technology infrastructure development, custom software development tailored to your specific needs, and AI consulting to drive business growth.",
      },
      {
        question: "How does your development process work?",
        answer:
          "GoTechCom follows Agile methodology for maximum transparency and flexibility. The process includes: initial consultation to understand your needs, requirements analysis, iterative development with regular client feedback, thorough quality testing, deployment, and ongoing support. Clients are actively involved at every stage to ensure the final product meets all expectations.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "GoTechCom serves diverse industries including retail, e-commerce, education, manufacturing, professional services, healthcare, and many more sectors. Our flexible solutions adapt to various business models seamlessly. Whether you are a small startup or an established enterprise, we tailor technology solutions to meet your specific industry requirements and challenges.",
      },
      {
        question: "Do you provide support after project completion?",
        answer:
          "GoTechCom provides comprehensive post-project support including technical assistance, bug fixes, performance monitoring, and system updates. We offer flexible support packages tailored to different needs and budgets. Our commitment extends well beyond deployment — we build long-term partnerships to ensure continued success and help clients adapt to evolving business needs.",
      },
      {
        question: "How can I get started with GoTechCom?",
        answer:
          "Contact us through our website form, email thanhle@gotechcom.com, or call directly. GoTechCom will schedule a free consultation to understand your specific needs, then provide a detailed proposal covering scope, timeline, and investment required. There is no obligation — we ensure the right fit for your project before moving forward.",
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
