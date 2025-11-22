import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const personalInfo = {
    name: "Pritam Das",
    role: "SDWAN/SASE Network Automation Engineer & Software Engineer",
    summary: "Motivated Software Engineer with 2.5 years of experience in full-stack development and DevOps automation. Specialized in scalable systems, cloud-native development, and CI/CD pipelines. Proven ability to deliver production-grade solutions combining development and infrastructure reliability.",
    location: "Chennai, India",
    phone: "+91 6382609047",
    email: "er.pritamdas22@gmail.com",
    linkedin: "https://linkedin.com/in/er-pritamdas",
    github: "https://github.com/er-pritamdas",
};

export const skills = {
    DevOps: ["Linux", "Docker", "Kubernetes", "Helm", "Jenkins", "CI/CD", "Ansible", "Chef", "Terraform", "Git", "F5", "Jira", "Nginx"],
    Cloud: ["AWS", "Azure", "VMware"],
    Databases: ["MongoDB", "MySQL"],
    Backend: ["Node.js", "Express.js", "REST API", "JWT", "Redux"],
    Frontend: ["React.js", "Tailwind CSS", "DaisyUI", "MaterialUI", "HTML5", "CSS3", "JavaScript"],
    Networking: ["SD-WAN", "SASE", "Cisco", "Juniper", "Arista", "Huawei"],
    "AI Automation": ["RAG", "N8N", "MCP Server"],
    "Languages & Tools": ["Python", "JavaScript", "C", "C++", "Bash", "Postman", "PuTTY", "VS Code"],
};

export const experience = [
    {
        company: "Tata Communications",
        role: "SDWAN/SASE Network Automation Engineer",
        period: "Jul 2023 – Present",
        description: [
            "Automated QoS testing lifecycle with 17+ use cases improving efficiency 70%",
            "Automated license deployment + alerts reducing manual monitoring 80%",
            "Built metrics collection from 50+ production servers feeding real-time dashboards",
            "Automated configuration backups for 25+ multi-vendor devices reducing manual effort by 90%",
            "Automated pre/post checks for upgrades reducing upgrade time by 60%",
            "Built UI to allow teammates to run automation without CLI knowledge",
            "Deployed high-availability headends on Azure using Terraform",
            "Integrated backend systems with F5 load balancer",
            "Led Santa Clara datacenter migration for 50+ devices",
            "Restored headend VMs after RAID failure in 48 hours",
            "Integrated MCP servers with VSCode Copilot and Claude for AI-driven workflows",
            "Standardized lab infra by rebuilding 20+ devices",
        ],
    },
    {
        company: "HighRadius",
        role: "Full Stack Developer Intern",
        period: "Feb 2022 – May 2022",
        description: [
            "Built full-stack enterprise solution connecting ML models with React frontend",
            "REST API based architecture, model inference with Java servlets",
            "Worked on data preprocessing, model deployment, and UI workflows",
        ],
    },
];

export const projects = [
    {
        title: "Progress Pulse",
        subtitle: "Habit, Expense & Investment Tracker",
        tech: ["MERN", "Redux Toolkit", "Tailwind", "DaisyUI", "Docker", "K8s", "Jenkins"],
        description: "A comprehensive tracker with modular dashboards, dynamic charts, and full CI/CD pipeline.",
    },
    {
        title: "RAG Chatbot",
        subtitle: "Company Document Assistant",
        tech: ["Google Drive", "Gemini AI", "Pinecone", "n8n"],
        description: "Automated chatbot for querying company documents using RAG architecture.",
    },
    {
        title: "AI Agent for ATS",
        subtitle: "Resume Optimization",
        tech: ["AI Agents", "LaTeX", "Python"],
        description: "Agent that analyzes resumes against job descriptions and rewrites them in LaTeX.",
    },
    {
        title: "MCP Server Integration",
        subtitle: "AI Tool Connectivity",
        tech: ["MCP", "Versa", "Zscaler", "Copilot", "Claude"],
        description: "Integrated network management tools with AI assistants for enhanced workflows.",
    },
];

export const education = [
    {
        degree: "B.Tech Computer Science & Engineering",
        institution: "SRM University",
        period: "2019–2023",
        grade: "CGPA: 9.37/10",
    },
];

export const certifications = [
    "AWS – Solutions Architect (In Progress)",
    "Cisco – CCNA (In Progress)",
    "PagerDuty DevOps Professional",
    "Canonical Ubuntu Linux Professional",
    "freeCodeCamp – JS DSA",
    "Atlassian Agile PM Certificate",
];
