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
    headline: "Building Technology Solutions for Vietnamese Enterprises",
    subheadline:
      "GoTechCom delivers cutting-edge software, technology infrastructure, and AI solutions that empower small and medium businesses to transform digitally — since 2015.",
    cta_contact: "Get in Touch",
    cta_learn_more: "Learn More",
  },

  about: {
    title: "About GoTechCom",
    description:
      "GoTechCom Technology JSC was founded in 2015 as a pioneer in software development and technology solutions in Vietnam. With a team of seasoned engineers and a vision for innovation, we have partnered with hundreds of businesses on their digital transformation journey — from the multi-channel retail management platform GoStore.vn to the AI-powered children's education device Betinyai. GoTechCom doesn't just deliver products; we build sustainable technology ecosystems for Vietnamese enterprises.",
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
        "A cloud-based POS retail management platform designed specifically for small and medium businesses. GoStore enables business owners to manage stores, inventory, and multi-channel sales effortlessly — anytime, anywhere.",
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
        "A screen-free AI companion device for children — a breakthrough product combining artificial intelligence with early education. Betinyai enables children to interact through voice, learn creatively, and grow without screen dependency.",
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
          "End-to-end consulting, design, and deployment of IT infrastructure for businesses. From server systems and internal networks to cloud solutions, we ensure a rock-solid technical foundation for all your operations.",
      },
      custom_software: {
        name: "Custom Software Development",
        description:
          "Tailored software solutions designed to match your exact business processes and unique requirements. Our engineering team applies Agile methodology to deliver high-quality products on schedule.",
      },
      ai_consulting: {
        name: "AI Consulting Services",
        description:
          "AI consulting and implementation services for enterprises — from process automation and intelligent data analytics to chatbot and virtual assistant development. We help businesses unlock the full power of AI in the digital era.",
      },
    },
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
