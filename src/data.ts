export const projects = [
  {
    title: "WellnessFusion",
    description: "A full-stack web application integrating AI-driven mental health support and personalized yoga recommendations",
    image: "/wellness-fusion.jpg",
    link: "https://wellness-fusion.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "REST APIs", "Gemini API", "Hugging Face Transformers"],
    points: [
      "Developed a full-stack web application integrating AI-driven mental health support for mental wellness and personalized yoga recommendations for physical wellness",
      "Built an interactive chatbot using NLP to provide real-time mental wellness assistance",
      "Integrated an interactive yoga module that suggests asanas based on age and fitness level",
      "Designed a responsive and user-friendly UI ensuring accessibility for users across different age groups"
    ]
  },
  {
    title: "Liver Cancer Classification",
    description: "Neural network model for liver cancer classification based on medical data",
    image: "/livercancer.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-86296-0_7",
    technologies: ["Neural Network", "Deep Learning", "Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Seaborn"],
    points: [
      "Developed a neural-network-based classification solution to analyze structured medical data and classify liver cancer outcomes.",
      "Implemented data preprocessing, feature engineering, model training, and evaluation using TensorFlow and Keras.",
      "Applied Binary Cross-Entropy loss and Adam optimizer, achieving 71.35% classification accuracy.",
      "Performed hyperparameter tuning and architecture optimization to improve model performance."
    ]
  },
  {
    title: "CrimsonCare",
    description: "AI-Enabled Smart Blood Donation & Emergency Assistance System",
    image: "/crimsoncare.png",
    link: "https://crimson-care-save.vercel.app/",
    technologies: ["Machine Learning", "Full stack development", "FireBase", "RNN"],
    points: [
      "Developed an AI-powered blood donation and emergency response platform connecting donors, patients, hospitals, and blood banks.",
      "Implemented ML models for donor eligibility prediction, health-risk detection, and blood-demand forecasting.",
      "Enabled real-time donor matching using geolocation, SOS alerts, and automated notifications to reduce emergency response time.",
      "Designed a secure, scalable cloud-based microservices architecture for reliable healthcare data management. "
    ]
  }
];

export const skillCategories = {
  languages: ["Java", "Python", "C", "SQL"],
  SoftwareEngineering: ["Data Structures and Algorithms", "OOP", "SDLC", "Agile Methodologies", "Problem Solving"],
  BackendandAPIs: ["Flask", "REST APIs", "API Integration"],
  AIML: ["TensorFlow", "Keras", "Hugging Face Transformers", "NumPy", "Pandas", "Neural Networks"],
  WebDevelopment: ["HTML", "CSS", "JavaScript"],
  DataBases: ["MySQL", "MongoDB"],
  CoreCS: ["DBMS", "Operating Systems", "Computer Networks", "Cloud Computing"],
  Tools: ["VS Code", "GitHub", "Git"]

};

export const certifications = [
  {
    title: "Programming in Java - IIT Kharagpur",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1ZBuY6GeSxXKOyYFVdQSPoTzRi4_B2Lti/view?usp=sharing",
    logo: "/nptel-logo.png"
  },
  {
    title: "Programming Essentials in C",
    issuer: "CISCO",
    link: "https://drive.google.com/file/d/1X_mTdc6_iS3jTuR5q4KcwpGe5xVoHZMQ/view?usp=sharing",
    logo: "/cisco-logo.png"
  },
  {
    title: "Programming Essentials in Python",
    issuer: "CISCO",
    link: "https://drive.google.com/file/d/1-_JiGs7Znddq-61k88Sgb2xNHU2lNusd/view?usp=sharing",
    logo: "/cisco-logo.png"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1GYhs9wDv7-5m4xV3GFzYx-WpJ_c8UREM/view?usp=sharing",
    logo: "/ibm-logo.png"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan Chase & Co",
    link: "https://drive.google.com/file/d/1RNpO7Q8VcHt41d2ZajqSYbsWBJ8qiX9e/view?usp=sharing",
    logo: "/jpmc-logo.png"
  }
];

export const experience = [
  {
    title: "Software Development Intern",
    organization: "Pragament Tech Solutions Pvt Ltd",
    period: "April,2025-July,2025",
    description: "Built a scalable web application using Flask and MongoDB. Collaborated with team members in an agile environment,participating in regular planning and execution of tasks."
  },
  {
    title: "Team Member",
    organization: "Data Science Visionary Hub BVRIT",
    period: "March,2024-March,2025",
    description: "Coordinated and supported the execution of technical workshops and seminars, contributing to event planning and participant engagement."
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "B V Raju Institute of Technology",
    period: "September,2022 – June,2026",
    grade: "CGPA: 8.97",
    logo: "/bvrit-logo.png"
  },
  {
    degree: "Intermediate",
    institution: "SR Junior College",
    period: "July,2020 - June,2022",
    grade: "Percentage: 96.80%",
    logo: "/sr-college-logo.png"
  },
  {
    degree: "SSC",
    institution: "SR Digi School",
    period: "June,2019 – June,2020",
    grade: "CGPA: 10.0",
    logo: "/sr-digi-school-logo.png"
  }
];

export const publications = [
  {
    title: "Neural Networks Approach for Liver Cancer Classification",
    publisher: "Springer Nature",
    description: "Published research paper detailing the design, training, and evaluation of a deep neural network model for medical classification and early detection of liver cancer.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-86296-0_7"
  }
];