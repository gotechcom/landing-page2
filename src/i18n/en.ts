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
      "GoTechCom is a leading technology company in Vietnam, specializing in comprehensive digital transformation solutions for small and medium businesses. Since 2015, we have been delivering cutting-edge software products, robust technology infrastructure, and innovative artificial intelligence consulting services that empower enterprises across the country. Our mission is to bridge the technology gap and enable Vietnamese businesses to compete effectively in the digital economy. With a proven track record of over 200 successful projects and more than 500 satisfied clients, we understand the unique challenges faced by local enterprises. Our flagship products — GoStore.vn for retail management and Betinyai.com for AI-powered children's education — demonstrate our commitment to creating practical, scalable solutions that address real market needs. Whether you need custom software development, cloud infrastructure setup, or AI integration, our experienced team of engineers is ready to transform your business operations and drive sustainable growth. Explore our products and services to discover how we can help your enterprise thrive in today's digital landscape.",
    cta_contact: "Get in Touch",
    cta_learn_more: "Learn More",
  },

  about: {
    title: "About GoTechCom",
    description:
      "GoTechCom Technology JSC was founded in 2015 with a clear vision: to become the trusted technology partner for Vietnamese enterprises on their digital transformation journey. Over the past decade, we have grown from a small software development team into a comprehensive technology solutions provider, serving more than 500 clients across various industries including retail, education, manufacturing, and services. Our story began with a simple belief — that Vietnamese businesses deserve world-class technology solutions tailored to their unique needs and budget constraints. This belief has driven us to develop innovative products like GoStore.vn, which has helped hundreds of retailers modernize their operations, and Betinyai.com, which brings AI-powered education to children in a safe, screen-free format. Our team consists of experienced engineers, designers, and consultants who are passionate about technology and committed to delivering excellence. We follow international standards in software development while maintaining deep understanding of the local market. Our approach combines technical expertise with business acumen, ensuring that every solution we deliver not only works flawlessly but also creates measurable business value. From infrastructure development to custom software and AI consulting, we provide end-to-end services that cover the entire technology stack. Our commitment extends beyond project delivery — we build long-term partnerships with our clients, providing ongoing support and continuous improvement to ensure their sustained success in the digital era.",
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
        "GoStore.vn is a comprehensive cloud-based POS retail management platform specifically designed for small and medium businesses in Vietnam. Launched in 2017, GoStore has evolved into a complete business management ecosystem that handles everything from sales transactions and inventory control to customer relationship management and business analytics. The platform supports multi-branch operations with centralized management, allowing business owners to monitor all locations in real-time from any device. GoStore integrates seamlessly with major e-commerce marketplaces, enabling merchants to manage both online and offline sales channels from a single dashboard. The mobile applications for iOS and Android ensure that managers can access critical business data and perform key operations on the go. Advanced reporting and analytics features provide actionable insights into sales performance, inventory turnover, customer behavior, and revenue trends. Built with scalability in mind, GoStore grows with your business — from a single store to a nationwide chain. The platform is backed by our dedicated technical support team, ensuring minimal downtime and maximum productivity for your business operations.",
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
        "Betinyai.com represents a breakthrough innovation in children's education technology — a screen-free AI companion device designed to nurture creativity, curiosity, and learning in young children. Launched in 2025, Betinyai addresses growing concerns about excessive screen time while harnessing the power of artificial intelligence to create engaging educational experiences. The device uses advanced voice recognition and natural language processing to enable children to interact naturally through conversation, asking questions, exploring topics, and receiving personalized learning content. Unlike traditional tablets or smartphones, Betinyai's screen-free design protects children's eyes and encourages active imagination rather than passive consumption. The device comes with age-appropriate educational content covering languages, mathematics, science, storytelling, and creative arts. Parents have full control through a companion mobile app, where they can monitor usage, set learning goals, and customize content preferences. Built-in GPS tracking ensures child safety, while NFC-enabled plush toy shells make the device friendly and approachable for young users. Betinyai represents our commitment to creating technology that serves families and contributes positively to children's development.",
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
          "We provide end-to-end technology infrastructure consulting, design, and deployment services for businesses of all sizes. Our comprehensive approach begins with a thorough assessment of your current infrastructure and business requirements, followed by the design of a scalable, secure, and cost-effective solution tailored to your specific needs. We specialize in cloud infrastructure setup and migration, helping businesses leverage the flexibility and cost savings of cloud computing while maintaining data security and compliance. Our services include server architecture design, network infrastructure planning, database optimization, and implementation of robust backup and disaster recovery systems. We work with leading cloud providers and on-premises solutions to find the optimal balance for your organization. Our infrastructure solutions are built with scalability in mind, ensuring your technology foundation can grow seamlessly with your business. With years of experience serving Vietnamese enterprises, we understand local regulatory requirements and business constraints, delivering solutions that are both technically excellent and practically viable.",
      },
      custom_software: {
        name: "Custom Software Development",
        description:
          "Our custom software development service delivers tailored solutions designed to address your unique business processes and challenges. We believe that off-the-shelf software doesn't always fit every business, which is why we work closely with you to understand your workflows, pain points, and goals before designing a solution. Our development process follows Agile methodology, ensuring transparency, flexibility, and rapid iteration throughout the project lifecycle. We specialize in web applications, mobile apps, enterprise systems, and API integrations using modern technology stacks. Our team of experienced developers, designers, and project managers ensures high-quality code, intuitive user interfaces, and on-time delivery. Every solution we build is thoroughly tested, well-documented, and designed for maintainability. We also provide comprehensive training and ongoing support to ensure your team can effectively use and maintain the software. Whether you need to automate manual processes, integrate disparate systems, or create a completely new digital product, our custom development service turns your vision into reality.",
      },
      ai_consulting: {
        name: "AI Consulting Services",
        description:
          "Our AI consulting services help businesses navigate the complex landscape of artificial intelligence and machine learning, turning emerging technologies into practical business solutions. We begin by assessing your organization's readiness for AI adoption and identifying high-impact use cases that align with your strategic objectives. Our consulting covers the full spectrum of AI implementation — from process automation using robotic process automation (RPA) and intelligent document processing, to advanced analytics and predictive modeling that uncover insights hidden in your data. We develop custom chatbots and virtual assistants that enhance customer service while reducing operational costs. Our team stays current with the latest AI developments, including large language models, computer vision, and natural language processing, ensuring you benefit from cutting-edge capabilities. We also provide AI strategy development, helping you build a roadmap for gradual, sustainable AI adoption across your organization. Our approach emphasizes practical, measurable outcomes — we focus on delivering solutions that generate real business value, whether through cost reduction, revenue growth, or improved customer experience.",
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
} as const satisfies Translations;

export default en;
