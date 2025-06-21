
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- CONFIGURATION ---
// Replace these with your actual details
const YOUR_NAME = "Max"; // e.g., "Alexey Durov"
const YOUR_INITIALS = "MV"; // e.g., "AD"
const YOUR_TAGLINE = "Python Backend Developer | TON & Web3 Enthusiast";
const YOUR_HERO_BIO = "I build scalable, high-performance backend systems and have a deep passion for decentralized technologies on The Open Network.";
const YOUR_ABOUT_ME = `My expertise lies in building robust and scalable backend services using Python, with a strong focus on API development (FastAPI, Django REST Framework), database management (PostgreSQL, Redis), and message queues (Celery, RabbitMQ). I'm proficient in deploying and managing applications using Docker, Nginx, and CI/CD pipelines. My journey into Web3 and specifically The Open Network (TON) has been driven by a fascination with decentralized systems and their potential to reshape the digital landscape. I am eager to contribute to projects that leverage TON's unique architecture for innovative solutions.`;
const YOUR_TELEGRAM_USERNAME = "MaxEther0x"; // Updated
// const YOUR_LINKEDIN_URL = "https://linkedin.com/in/yourprofile"; // Removed
// const YOUR_GITHUB_URL = "https://github.com/yourusername"; // Removed

interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemoLink?: string; // Optional
}

const projectsData: Project[] = [
    {
        id: "project1",
        name: "TON Phone Shop",
        description: "A backend system for a conceptual phone shop integrated with TON for payments or NFT-based ownership.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "TON SDK", "Docker"],
        githubLink: "https://github.com/yourusername/ton-phone-shop", // Keep this example or update
        liveDemoLink: "https://t.me/VolTon_Store_bot/Store"
    }
    // { // Project Removed (Decentralized Task Manager)
    //     id: "project2",
    //     name: "Decentralized Task Manager",
    //     description: "A task management application where tasks and rewards could be managed on a TON-based smart contract.",
    //     technologies: ["Python", "Django", "Celery", "Redis", "Solidity (FunC learning)", "Web3.py"],
    //     githubLink: "https://github.com/yourusername/decentralized-task-manager",
    // },
    // { // Project Removed (Telegram Mini App)
    //     id: "project3",
    //     name: "Telegram Mini App: TON Wallet Helper",
    //     description: "A Telegram Mini App to simplify certain TON wallet interactions or display token information.",
    //     technologies: ["JavaScript", "React", "Telegram API", "TON Connect"],
    //     githubLink: "https://github.com/yourusername/ton-wallet-helper-tma",
    //     liveDemoLink: "https://your-tailscale-funnel-link2.com"
    // }
];

// --- COMPONENTS ---

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><a href="#hero">{YOUR_INITIALS}</a></div>
            <div className="nav-links">
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="container fade-in-section">
            <h1 className="hero-title hero-title-animated">{YOUR_NAME}</h1>
            <p className="hero-subtitle">{YOUR_TAGLINE}</p>
            <p className="hero-bio">{YOUR_HERO_BIO}</p>
            <div className="cta-buttons">
                <a href="#projects" className="btn btn-primary">View My Projects</a>
                <a href={`https://t.me/${YOUR_TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Contact Me</a>
            </div>
            <div className="social-links">
                <a href={`https://t.me/${YOUR_TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon-single">TG</a>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
                {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"></a>
                {project.liveDemoLink && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Test</a>
                )}
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="container fade-in-section">
            <h2 className="section-title">My Projects</h2>
            {projectsData.length > 0 ? (
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <p style={{textAlign: 'center', color: 'var(--ton-light-gray)'}}>More projects coming soon!</p>
            )}
        </section>
    );
};

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="container fade-in-section">
            <h2 className="section-title">About Me</h2>
            <p>{YOUR_ABOUT_ME}</p>
        </section>
    );
};

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="container fade-in-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <p>I'm currently looking for new opportunities and collaborations. Feel free to reach out!</p>
                <div className="contact-links">
                     <a href="mailto:varchenkomaks15@gmail.com" className="btn btn-primary">Email Me</a>
                     <a href={`https://t.me/${YOUR_TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Telegram</a>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                 <div className="social-links">
                    <a href={`https://t.me/${YOUR_TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon-single">TG</a>
                </div>
                <p>&copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
};

const App: React.FC = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: unobserve after animation to save resources
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: remove class if you want animation to re-trigger on scroll away and back
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.1 }); // Adjust threshold: 0.1 means 10% of the element is visible

        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup observer on component unmount
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <ProjectsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
