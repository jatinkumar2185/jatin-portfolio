export const personalInfo = {
  name: "Jatin Kumar Singh",
  title: "AI & Machine Learning Enthusiast",
  subtitle: "Full Stack Developer",
  description: "Building intelligent applications, machine learning models, and modern web solutions.",
  about: "I am a Computer Science Engineering student at IILM University, Greater Noida specializing in Artificial Intelligence and Machine Learning. I enjoy building AI-powered applications, developing full-stack web solutions, and solving real-world problems through technology.",
  email: "jatinkumar2185@gmail.com",
  phone: "+91 6377774994",
  github: "https://github.com/jatinkumar2185",
  linkedin: "https://linkedin.com/in/jatin-kumar-singh-97869a355",
  githubUsername: "jatinkumar2185",
};

export const skills = {
  "Programming Languages": ["C++", "Java", "Python", "JavaScript", "SQL"],
  "Frontend": ["HTML", "CSS", "React.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Python"],
  "Databases": ["MySQL"],
  "Machine Learning": ["Pandas", "Scikit-Learn", "OpenCV"],
  "Tools": ["Git", "GitHub", "VS Code"],
};

export const projects = [
  {
    id: 1,
    title: "Desktop Voice Assistant",
    featured: true,
    description: "AI-powered Desktop Voice Assistant built using Python, Gemini AI, Speech Recognition, and PyQt6 for an intelligent, interactive desktop experience.",
    features: ["Voice Commands", "Desktop Automation", "Browser Control", "File Management", "AI Chat Integration"],
    tech: ["Python", "Gemini AI", "PyQt6", "Speech Recognition", "OpenCV"],
    color: "cyan",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Land Price Prediction",
    featured: false,
    description: "Machine Learning model for accurate land price prediction with approximately 85% accuracy using regression analysis and feature engineering.",
    features: ["85% Accuracy", "Data Preprocessing", "Feature Engineering", "Visualization"],
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    color: "purple",
    icon: "📊",
  },
  {
    id: 3,
    title: "Antibiotic Resistance Prediction",
    featured: false,
    description: "Predictive ML model for identifying antibiotic resistance patterns, aiding medical research with high-confidence classifications.",
    features: ["Medical ML", "Pattern Recognition", "Classification Model", "Research Ready"],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    color: "cyan",
    icon: "🧬",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    featured: false,
    description: "Responsive weather dashboard integrating OpenWeatherMap API with real-time conditions, 5-day forecasts, and dynamic visuals.",
    features: ["Real-time Data", "5-Day Forecast", "Location Search", "Responsive Design"],
    tech: ["React.js", "OpenWeatherMap API", "Tailwind CSS", "JavaScript"],
    color: "purple",
    icon: "🌤️",
  },
];

export const education = [
  {
    institution: "IILM University",
    location: "Greater Noida",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2024 – 2028",
    score: "CGPA: 8.5",
    icon: "🎓",
  },
  {
    institution: "Sir Padampat Singhania School",
    location: "",
    degree: "Class XII",
    period: "2023 – 2024",
    score: "Score: 77.5%",
    icon: "📚",
  },
  {
    institution: "Army Public School",
    location: "",
    degree: "Class X",
    period: "2021 – 2022",
    score: "Score: 88.6%",
    icon: "🏫",
  },
];

export const achievements = [
  { title: "Academic Excellence", desc: "Maintained CGPA of 8.5 at IILM University", icon: "⭐" },
  { title: "AI/ML Builder", desc: "Built multiple production-grade AI & Machine Learning projects", icon: "🤖" },
  { title: "Full Stack Dev", desc: "Developed complete Full Stack applications end-to-end", icon: "💻" },
  { title: "Problem Solver", desc: "Strong analytical and algorithmic problem-solving skills", icon: "🧠" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
