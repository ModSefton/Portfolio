// ==================== Mock Data ====================
const mockData = {
    skills: [
        {
            category: "Programming",
            icon: "fas fa-code",
            items: [
                { name: "HTML5", description: "Building semantic, accessible web structures", level: "advanced" },
                { name: "CSS3", description: "Responsive layouts with Flexbox & Grid", level: "advanced" },
                { name: "JavaScript", description: "Interactive web applications and automation", level: "intermediate" },
                { name: "C++", description: "Programming fundamentals and algorithms", level: "intermediate" }
            ]
        },
        {
            category: "Tools",
            icon: "fas fa-wrench",
            items: [
                { name: "Google Workspace", description: "Docs, Sheets, Slides, Drive for collaboration", level: "advanced" },
                { name: "Microsoft Office", description: "Word, Excel, PowerPoint proficiency", level: "advanced" },
                { name: "Slack", description: "Team communication and coordination", level: "intermediate" },
                { name: "Trello", description: "Project management and task tracking", level: "intermediate" },
                { name: "Canva", description: "Creating professional graphics and presentations", level: "intermediate" }
            ]
        },
        {
            category: "VA Skills",
            icon: "fas fa-briefcase",
            items: [
                { name: "Data Entry", description: "Fast and accurate data input and management", level: "advanced" },
                { name: "Email Management", description: "Inbox organization and professional correspondence", level: "advanced" },
                { name: "Social Media Scheduling", description: "Content planning and posting across platforms", level: "intermediate" },
                { name: "Calendar Management", description: "Scheduling meetings and managing appointments", level: "intermediate" }
            ]
        },
        {
            category: "Soft Skills",
            icon: "fas fa-star",
            items: [
                { name: "Time Management", description: "Prioritizing tasks and meeting deadlines", level: "advanced" },
                { name: "Communication", description: "Clear, professional written and verbal skills", level: "advanced" },
                { name: "Problem-Solving", description: "Finding creative solutions efficiently", level: "advanced" },
                { name: "Bilingual", description: "Fluent in English & Tagalog", level: "native" }
            ]
        }
    ],
    
    projects: [
        {
            id: 1,
            title: "Personal Task Manager",
            description: "A JavaScript-based task management application designed for virtual assistants to organize schedules, set reminders, and track daily activities.",
            fullDescription: "Developed a comprehensive task management system with features including drag-and-drop task organization, priority levels, due date reminders, and local storage for persistent data. The interface is clean and intuitive, making it perfect for busy professionals managing multiple clients.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
            technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
            liveDemo: "https://github.com/username/task-manager",
            github: "https://github.com/username/task-manager",
            features: [
                "Drag-and-drop task organization",
                "Priority levels and due dates",
                "Category-based filtering",
                "Persistent data with LocalStorage"
            ]
        },
        {
            id: 2,
            title: "Responsive Portfolio Site",
            description: "This modern, fully responsive portfolio website showcasing skills, projects, and experience as an aspiring Virtual Assistant.",
            fullDescription: "Built using modern HTML5, CSS3 with Flexbox/Grid, and vanilla JavaScript. Features smooth scrolling navigation, interactive skill cards, project modals, and a contact form. Optimized for all devices with mobile-first design approach.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            liveDemo: "https://github.com/username/portfolio",
            github: "https://github.com/username/portfolio",
            features: [
                "Smooth scroll navigation",
                "Interactive animations",
                "Fully responsive design",
                "Contact form integration"
            ]
        },
        {
            id: 3,
            title: "Filipino History Quiz App",
            description: "An educational web application featuring interactive quizzes on Philippine history, designed for students and educational platforms.",
            fullDescription: "Created an engaging quiz platform with multiple-choice questions, score tracking, and immediate feedback. Includes topics on Philippine heroes, historical events, and cultural heritage. Perfect for educators and students learning about Filipino history.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
            technologies: ["JavaScript", "HTML5", "CSS3", "JSON"],
            liveDemo: "https://github.com/username/quiz-app",
            github: "https://github.com/username/quiz-app",
            features: [
                "Multiple quiz categories",
                "Score tracking system",
                "Immediate feedback",
                "Mobile-friendly interface"
            ]
        },
        {
            id: 4,
            title: "Social Media Content Calendar",
            description: "A planning tool for organizing and scheduling social media content across multiple platforms with visual calendar interface.",
            fullDescription: "Developed a visual content calendar helping businesses and VAs plan social media posts in advance. Features include monthly/weekly views, platform-specific color coding, content type categorization, and export functionality.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
            technologies: ["HTML5", "CSS3", "JavaScript", "Calendar API"],
            liveDemo: "https://github.com/username/content-calendar",
            github: "https://github.com/username/content-calendar",
            features: [
                "Visual calendar interface",
                "Multi-platform support",
                "Content type categorization",
                "Export to CSV"
            ]
        }
    ],
    
    timeline: [
        {
            type: "education",
            title: "Bachelor of Science in Information Technology",
            organization: "St. Nicolas College of Business and Technology",
            location: "Pampanga, Philippines",
            period: "2025 - Present",
            description: "Currently pursuing BSIT degree with focus on web development, database management, and software engineering. Relevant coursework includes Data Structures, Web Technologies, and Systems Analysis.",
            achievements: [
                "Dean's List for current semester",
                "Member of IT Society",
                "Participated in coding competitions"
            ]
        },
        {
            type: "experience",
            title: "Senior Moderator",
            organization: "Brainly.ph",
            location: "Remote",
            period: "2020 - Present",
            description: "Managing online community, providing user support, moderating content, and ensuring platform guidelines are followed. Developed strong communication and problem-solving skills.",
            achievements: [
                "Resolved 500+ user inquiries monthly",
                "Trained 10+ new moderators",
                "Maintained 98% user satisfaction rate",
                "Recognized as Top Moderator of the Month (3 times)"
            ]
        },
        {
            type: "education",
            title: "Secondary Education",
            organization: "Gateways Institute of Science and Technology",
            location: "San Fernando City, Pampanga",
            period: "2022 - 2024",
            description: "Completed junior high school with honors, focusing on ICT subjects.",
            achievements: [
                "With High Honors",
                "Best in ICT Award",
                "School Paper Editor"
            ]
        }
    ]
};

// ==================== DOM Elements ====================
let selectedProject = null;

// ==================== Navigation Functions ====================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 64; // navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
        toggleMobileMenu(false);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMobileMenu(force) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    if (force !== undefined) {
        mobileMenu.classList.toggle('active', force);
    } else {
        mobileMenu.classList.toggle('active');
    }
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

// ==================== Scroll Effects ====================
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    // Add scroll animations
    const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .stat-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', handleScroll);

// ==================== Render Skills ====================
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    
    mockData.skills.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skills-category';
        categoryDiv.style.animationDelay = `${index * 0.2}s`;
        
        categoryDiv.innerHTML = `
            <div class=\"category-header\">
                <div class=\"category-icon\">
                    <i class=\"${category.icon}\"></i>
                </div>
                <h3 class=\"category-title\">${category.category}</h3>
                <div class=\"category-divider\"></div>
            </div>
            <div class=\"skills-grid\">
                ${category.items.map((skill, skillIndex) => `
                    <div class=\"skill-card\" style=\"opacity: 0; transform: translateY(20px); animation-delay: ${skillIndex * 0.1}s;\">
                        <div class=\"skill-header\">
                            <h4 class=\"skill-name\">${skill.name}</h4>
                            <span class=\"skill-badge ${skill.level}\">${skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
                        </div>
                        <p class=\"skill-description\">${skill.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categoryDiv);
    });
}

// ==================== Render Projects ====================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    mockData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateY(20px)';
        projectCard.style.animationDelay = `${index * 0.15}s`;
        projectCard.onclick = () => openModal(project);
        
        projectCard.innerHTML = `
            <div class=\"project-image-container\">
                <img src=\"${project.image}\" alt=\"${project.title}\" class=\"project-image\">
                <div class=\"project-overlay\">
                    <button class=\"btn btn-primary\" style=\"margin: 0;\">View Details</button>
                </div>
            </div>
            <div class=\"project-content\">
                <h3 class=\"project-title\">${project.title}</h3>
                <p class=\"project-description\">${project.description}</p>
                <div class=\"project-technologies\">
                    ${project.technologies.map(tech => `<span class=\"tech-badge\">${tech}</span>`).join('')}
                </div>
                <div class=\"project-links\">
                    <a href=\"${project.liveDemo}\" target=\"_blank\" class=\"project-link\" onclick=\"event.stopPropagation()\">
                        <i class=\"fas fa-external-link-alt\"></i>
                        Live Demo
                    </a>
                    <a href=\"${project.github}\" target=\"_blank\" class=\"project-link\" onclick=\"event.stopPropagation()\">
                        <i class=\"fab fa-github\"></i>
                        Source Code
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(projectCard);
    });
}

// ==================== Modal Functions ====================
function openModal(project) {
    selectedProject = project;
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 class=\"modal-title\">${project.title}</h2>
        <p class=\"modal-subtitle\">${project.description}</p>
        
        <img src=\"${project.image}\" alt=\"${project.title}\" class=\"modal-image\">
        
        <div class=\"modal-section\">
            <h4 class=\"modal-section-title\">About This Project</h4>
            <p class=\"modal-text\">${project.fullDescription}</p>
        </div>
        
        <div class=\"modal-section\">
            <h4 class=\"modal-section-title\">Key Features</h4>
            <ul class=\"modal-features\">
                ${project.features.map(feature => `
                    <li class=\"modal-feature\">
                        <i class=\"fas fa-check-circle\"></i>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class=\"modal-section\">
            <h4 class=\"modal-section-title\">Technologies Used</h4>
            <div class=\"modal-tech-list\">
                ${project.technologies.map(tech => `<span class=\"tech-badge\" style=\"font-size: 0.875rem; padding: 0.5rem 0.75rem;\">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class=\"modal-actions\">
            <a href=\"${project.liveDemo}\" target=\"_blank\" class=\"btn btn-primary\" style=\"flex: 1;\">
                <i class=\"fas fa-external-link-alt\"></i>
                View Live Demo
            </a>
            <a href=\"${project.github}\" target=\"_blank\" class=\"btn btn-secondary\" style=\"flex: 1;\">
                <i class=\"fab fa-github\"></i>
                View on GitHub
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProject = null;
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedProject) {
        closeModal();
    }
});

// ==================== Render Timeline ====================
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    
    mockData.timeline.forEach((item, index) => {
        const isLast = index === mockData.timeline.length - 1;
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.opacity = '0';
        timelineItem.style.transform = 'translateY(20px)';
        
        const periodClass = item.type === 'education' ? 'education' : 'experience';
        const icon = item.type === 'education' ? 'fa-graduation-cap' : 'fa-briefcase';
        
        timelineItem.innerHTML = `
            ${!isLast ? '<div class=\"timeline-line\"></div>' : ''}
            <div class=\"timeline-icon ${periodClass}\">
                <i class=\"fas ${icon}\"></i>
            </div>
            <div class=\"timeline-content\">
                <div class=\"timeline-header\">
                    <div style=\"flex: 1;\">
                        <h3 class=\"timeline-title\">${item.title}</h3>
                        <div class=\"timeline-organization\">${item.organization}</div>
                    </div>
                    <div class=\"timeline-period\">
                        <i class=\"fas fa-calendar\"></i>
                        ${item.period}
                    </div>
                </div>
                
                <div class=\"timeline-location\">
                    <i class=\"fas fa-map-marker-alt\"></i>
                    <span>${item.location}</span>
                </div>
                
                <p class=\"timeline-description\">${item.description}</p>
                
                ${item.achievements && item.achievements.length > 0 ? `
                    <div>
                        <h4 class=\"achievements-title\">Key Highlights:</h4>
                        <ul class=\"achievements-list\">
                            ${item.achievements.map(achievement => `
                                <li class=\"achievement-item\">
                                    <i class=\"fas fa-check\"></i>
                                    <span class=\"achievement-text\">${achievement}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// ==================== Contact Form ====================
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    
    // Disable form
    submitBtn.disabled = true;
    submitText.innerHTML = '<i class=\"fas fa-spinner fa-spin\"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        // Show toast
        showToast();
        
        // Reset form
        form.reset();
        submitBtn.disabled = false;
        submitText.innerHTML = '<i class=\"fas fa-paper-plane\"></i> Send Message';
    }, 1500);
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// ==================== Intersection Observer for Animations ====================
function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
}

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderTimeline();
    setupObserver();
    handleScroll();
    
    console.log('Portfolio loaded successfully!');
});