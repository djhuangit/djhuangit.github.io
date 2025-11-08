const data ={
  "bio": [
    "Hi, I'm Huang De Jun (DJ) - an AI Engineer with experience across computer vision, NLP, time-series and production ML systems. My current focus is on LLM agents and synthetic data generation, where I'm building practical solutions through AI Singapore's intensive programme to unlock ML capabilities where real data is limited or expensive.",
    "I bring 9+ years of industrial R&D experience in additive manufacturing, robotics and computer vision, with a PhD in ML/DL applications from NTU Singapore (EDB-IPP programme with Emerson). I thrive in collaborative environments where we can tackle real problems with technology."
  ],
  "skills": [
    {
      "category": "Programming",
      "items": ["Python", "SQL"]
    },
    {
      "category": "ML Frameworks",
      "items": ["PyTorch", "PyTorch Lightning", "Scikit-learn", "Hugging Face", "OpenCV"]
    },
    {
      "category": "LLM/GenAI",
      "items": ["LangChain", "Haystack", "Pydantic AI", "vLLM", "RAG Systems", "Diffusion Models"]
    },
    {
      "category": "Data & MLOps",
      "items": ["Docker", "MLflow", "Weights & Biases", "Langfuse", "CI/CD", "Chroma", "PySpark", "Delta Lake"]
    },
    {
      "category": "Cloud & Visualization",
      "items": ["AWS (Certified ML Associate)", "Google Cloud Platform", "Power BI", "Looker"]
    }
  ],
  "experience": [
    {
      "title": "AI Singapore",
      "duration": "May 2025 - Present",
      "subtitle": "Associate AI Engineer",
      "details": [
        "Built synthetic time-series generation using agentic search and diffusion models (MMD: 0.32, JS: 0.21)",
        "Built production RAG system with 40% accuracy improvement using Haystack and Chroma",
        "Deployed CNN pipeline achieving 92% accuracy; implemented vLLM with 2x throughput"
      ],
      "tags": [
        "LLM Agents",
        "Diffusion Models",
        "RAG",
        "Haystack",
        "vLLM"
      ],
      "icon": "brain"
    },
    {
      "title": "Structo 3D",
      "duration": "Feb 2022 - Jun 2024",
      "subtitle": "Senior Engineer",
      "details": [
        "Increased revenue $2M/year via time-series optimization improving print speed 25%",
        "Enabled $1B market entry through 30% accuracy gain via multivariate experiments",
        "Reduced costs $100K (75%) using experimentation-driven sensor optimization",
        "Architected 3 ETL pipelines: 10x speed, 50% manpower reduction, 80% time savings",
        "Led C-level alignment on technical roadmap for next-generation products",
        "Mentored 3 junior engineers in Python, ETL, and data visualization"
      ],
      "tags": [
        "Time Series",
        "ETL",
        "Python",
        "Data Visualization",
        "MLOps"
      ],
      "icon": "cube"
    },
    {
      "title": "Emerson Automation Solutions",
      "duration": "Oct 2016 - Feb 2022",
      "subtitle": "Research Engineer",
      "details": [
        "Reduced failure rates 25% using ensemble ML on imbalanced datasets; published in Materials & Design",
        "Deployed CNN system processing 1M+ images for defect detection, reducing waste by 30%",
        "Built IoT platform with real-time ML inference, decreasing production downtime by 15%",
        "Mentored 6+ university students in statistical analysis and experimental design for academic research"
      ],
      "tags": [
        "Computer Vision",
        "CNN",
        "IoT",
        "ML",
        "Research"
      ],
      "icon": "cogs"
    }
  ],
  "education": [
    {
      "title": "Ph.D. in Mechanical Engineering",
      "duration": "2017 - 2022",
      "subtitle": "Nanyang Technological University (NTU)",
      "details": [
        "EDB-IPP programme with Emerson Automation Solutions",
        "Focus on ML/DL applications in additive manufacturing"
      ],
      "tags": [
        "Machine Learning",
        "Deep Learning",
        "Research"
      ],
      "icon": "graduation-cap"
    },
    {
      "title": "B.Eng. in Mechanical Engineering",
      "duration": "2010 - 2014",
      "subtitle": "National University of Singapore (NUS)",
      "details": [],
      "tags": [],
      "icon": "graduation-cap"
    }
  ],
  "contactLinks": [
    {
      "label": "Email",
      "link": "mailto:dejun.huang.sg@gmail.com",
      "icon": "fa fa-envelope"
    },
    {
      "label": "LinkedIn",
      "link": "https://www.linkedin.com/in/a-dejun-huang/",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "GitHub",
      "link": "https://github.com/djhuangit",
      "icon": "fa-brands fa-github"
    }
  ],
  "footer": [
    {
      "label": "Links",
      "data": [
        {
          "text": "GitHub",
          "link": "https://github.com/djhuangit"
        },
        {
          "text": "LinkedIn",
          "link": "https://www.linkedin.com/in/a-dejun-huang/"
        }
      ]
    },
    {
      "label": "copyright-text",
      "data": [
        "Built with HTML, CSS, JavaScript"
      ]
    }
  ]
}

export const bio = data.bio;

export const skills = data.skills;

export const experience = data.experience

export const education = data.education

export const contactLinks = data.contactLinks

export const footer = data.footer;
