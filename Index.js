// ============================================
// JOB DATA (shared across Jobs + Job Detail)
// ============================================

const JOB_DATA = {
    'junior-front-end': {
        title: 'Junior Front-End Developer',
        type: 'Hybrid',
        salary: '£24,000 - £28,000 per annum',
        location: 'Milton Keynes (2 days office, 3 days remote)',
        summary: 'Entry-level role focused on building responsive user interfaces alongside designers and senior developers.',
        requirements: [
            'GCSE/A-Levels or equivalent or proven self-taught ability.',
            'Portfolio with 3+ projects showing HTML, CSS, and JavaScript.',
            'Comfort with Git, branching, and reviewing pull requests.',
            'Awareness of accessibility basics (headings, labels, contrast).'
        ],
        responsibilities: [
            'Translate designs into responsive components with guidance from senior developers.',
            'Test layouts across modern browsers and mobile breakpoints.',
            'Document work, attend stand-ups, and participate in code reviews.'
        ],
        benefits: ['Free lunch on Thursdays', 'Mentorship program', 'Paid training certifications', '35 days annual leave', 'Flexible working after probation']
    },
    'front-end': {
        title: 'Front-End Developer',
        type: 'Remote',
        salary: '£32,000 - £38,000 per annum',
        location: 'Milton Keynes (fully remote)',
        summary: 'Lead the delivery of performant, accessible interfaces for client sites.',
        requirements: [
            '2+ years professional experience with modern front-end frameworks.',
            'Expertise in responsive design and CSS architecture.',
            'Strong JavaScript fundamentals and testing practice.',
            'Comfort collaborating with designers and backend teams.'
        ],
        responsibilities: [
            'Own UI builds for client projects and ship accessible, performant pages.',
            'Implement performance optimisations and cross-browser fixes.',
            'Review pull requests and help evolve our component standards.'
        ],
        benefits: ['Design tool stipend (Adobe/Figma)', 'Conference attendance funding', 'Quarterly innovation days', 'Performance bonuses', '35 days leave']
    },
    'back-end': {
        title: 'Back-End Developer',
        type: 'Hybrid',
        salary: '£28,000 - £34,000 per annum',
        location: 'Milton Keynes (3 days office, 2 days remote)',
        summary: 'Develop and maintain secure, scalable server-side applications and APIs.',
        requirements: [
            '1–2 years backend experience in Node.js, Python, or PHP.',
            'Understanding of database design and optimisation.',
            'Experience building RESTful APIs and handling authentication.',
            'Familiarity with logging, monitoring, and debugging tools.'
        ],
        responsibilities: [
            'Implement and maintain APIs and services with clean, tested code.',
            'Collaborate with front-end teams to define contracts and performance targets.',
            'Apply security best practices and improve database performance.'
        ],
        benefits: ['High-performance workstation', 'Certifications in Linux/cloud', 'Private healthcare after 1 year', 'Flexible hours', '35 days annual leave']
    },
    'senior-back-end': {
        title: 'Senior Back-End Developer',
        type: 'Physical',
        salary: '£45,000 - £55,000 per annum',
        location: 'Milton Keynes (5 days office)',
        summary: 'Design backend architecture, mentor developers, and guide technical decisions.',
        requirements: [
            '5+ years backend experience with system architecture exposure.',
            'Deep knowledge of cloud platforms (AWS/Azure) and CI/CD pipelines.',
            'Comfortable leading code reviews and technical decisions.',
            'Strong understanding of security and performance tuning.'
        ],
        responsibilities: [
            'Shape backend architecture and guide platform choices.',
            'Mentor junior developers and lead technical discovery sessions.',
            'Ensure reliability, observability, and performance across services.'
        ],
        benefits: ['Free parking', 'Leadership development program', 'Annual salary review based on technical growth', '35 days leave', 'Flexible schedule']
    },
    'full-stack': {
        title: 'Full-Stack Developer',
        type: 'Hybrid',
        salary: '£30,000 - £38,000 per annum',
        location: 'Milton Keynes (flexible hybrid)',
        summary: 'Deliver end-to-end features across front-end and back-end stacks.',
        requirements: [
            '2+ years full-stack experience across modern front-end and backend tech.',
            'Database design knowledge and deployment familiarity.',
            'Ability to debug across the stack and ship tested code.',
            'Comfort collaborating closely with designers and product owners.'
        ],
        responsibilities: [
            'Build features across UI, APIs, and data stores.',
            'Maintain deployment pipelines and monitor live releases.',
            'Improve code quality through reviews and pairing.'
        ],
        benefits: ['Cross-department training', 'Team lunches and company trips', 'Leadership training', 'Bonus scheme', '35 days annual leave']
    },
    'react': {
        title: 'React Developer',
        type: 'Remote',
        salary: '£35,000 - £42,000 per annum',
        location: 'Milton Keynes (100% remote)',
        summary: 'Develop interactive React applications with strong state management and testing.',
        requirements: [
            '2+ years focused React experience.',
            'Familiarity with component libraries and accessibility standards.',
            'State management with Redux or Context API.',
            'Testing frameworks experience (Jest/RTL/Cypress).'
        ],
        responsibilities: [
            'Deliver component-driven UIs and shared patterns.',
            'Optimise performance and bundle size.',
            'Maintain test coverage for critical flows.'
        ],
        benefits: ['Home office setup stipend', 'Conference allowance', 'Professional development budget', 'Performance bonuses', '35 days leave']
    },
    'node': {
        title: 'Node.js Developer',
        type: 'Hybrid',
        salary: '£32,000 - £39,000 per annum',
        location: 'Milton Keynes (2 days office, 3 days remote)',
        summary: 'Build and optimise Node.js services and APIs for client applications.',
        requirements: [
            '2+ years Node.js/Express experience.',
            'Async programming expertise and API design skills.',
            'MongoDB or SQL knowledge with schema design.',
            'Comfort with deployments and environment management.'
        ],
        responsibilities: [
            'Design scalable APIs and handle integrations.',
            'Implement logging, monitoring, and alerting for services.',
            'Collaborate with front-end teams on API contracts.'
        ],
        benefits: ['Free on-site parking', 'Lunch stipend', 'Certifications funding', 'Private healthcare', 'Flexible working', '35 days leave']
    },
    'ui-ux': {
        title: 'UI/UX Focused Developer',
        type: 'Hybrid',
        salary: '£29,000 - £35,000 per annum',
        location: 'Milton Keynes (3 days office, 2 days remote)',
        summary: 'Bridge design and engineering with pixel-perfect, accessible builds.',
        requirements: [
            'Front-end development skills with modern tooling.',
            'Figma or Adobe XD proficiency.',
            'Working knowledge of WCAG and accessibility testing.',
            'Ability to collaborate closely with designers.'
        ],
        responsibilities: [
            'Translate design systems into reusable components.',
            'Conduct accessibility checks and remediate issues.',
            'Prototype interactions and refine UI polish.'
        ],
        benefits: ['Design tool licenses paid', 'UX workshops', 'Creative work environment', 'Quarterly innovation days', '35 days leave']
    },
    'dba': {
        title: 'Database Administrator',
        type: 'Physical',
        salary: '£35,000 - £42,000 per annum',
        location: 'Milton Keynes (5 days office)',
        summary: 'Own database performance, security, and disaster recovery.',
        requirements: [
            '3+ years DBA experience.',
            'Strong SQL optimisation and indexing knowledge.',
            'Backup/recovery procedures and security protocols.',
            'Experience with monitoring and capacity planning.'
        ],
        responsibilities: [
            'Maintain backups, restores, and disaster recovery drills.',
            'Tune queries and schemas for performance.',
            'Enforce security standards and auditing.'
        ],
        benefits: ['Free parking', 'Cybersecurity certifications funded', 'Private healthcare', 'Flexible hours', '35 days annual leave']
    },
    'devops': {
        title: 'DevOps Engineer',
        type: 'Remote',
        salary: '£40,000 - £48,000 per annum',
        location: 'Milton Keynes (fully remote)',
        summary: 'Design and maintain CI/CD pipelines and cloud infrastructure.',
        requirements: [
            '3+ years DevOps experience with Docker/Kubernetes.',
            'CI/CD tooling expertise and pipeline automation.',
            'Cloud platform experience (AWS/Azure/GCP).',
            'Infrastructure as code familiarity (Terraform/ARM/CloudFormation).'
        ],
        responsibilities: [
            'Build and improve pipelines for web and API deployments.',
            'Manage infrastructure as code and monitor reliability.',
            'Lead incident response drills and post-mortems.'
        ],
        benefits: ['Cloud certifications fully funded', 'Conference attendance', 'Home office setup budget', 'Annual salary review', '35 days leave']
    },
    'qa': {
        title: 'QA Testing Developer',
        type: 'Hybrid',
        salary: '£26,000 - £31,000 per annum',
        location: 'Milton Keynes (3 days office, 2 days remote)',
        summary: 'Build and run automated tests to keep releases reliable.',
        requirements: [
            '1–2 years QA or automation experience.',
            'Knowledge of Selenium, Jest, or similar frameworks.',
            'Test case design and defect reporting skills.',
            'Basic understanding of CI pipelines.'
        ],
        responsibilities: [
            'Write automated tests for UI and API layers.',
            'Track defects and collaborate with developers on fixes.',
            'Maintain regression suites and test data.'
        ],
        benefits: ['Testing tool licenses', 'Training on new frameworks', 'Free lunch on Thursdays', 'Mentorship program', '35 days leave']
    },
    'php': {
        title: 'PHP Developer',
        type: 'Hybrid',
        salary: '£28,000 - £34,000 per annum',
        location: 'Milton Keynes (2 days office, 3 days remote)',
        summary: 'Build and maintain PHP services and APIs for client projects.',
        requirements: [
            '2+ years PHP experience (Laravel/Symfony preferred).',
            'Database design and API development familiarity.',
            'Understanding of queues, caching, and testing.',
            'Version control and deployment experience.'
        ],
        responsibilities: [
            'Implement new features and services in PHP.',
            'Integrate third-party APIs and manage deployments.',
            'Refactor legacy code toward modern standards.'
        ],
        benefits: ['Free lunch on Thursdays', 'Certifications funding', 'Mentorship', 'Flexible working after probation', '35 days annual leave']
    },
    'python': {
        title: 'Python Developer',
        type: 'Remote',
        salary: '£31,000 - £37,000 per annum',
        location: 'Milton Keynes (fully remote)',
        summary: 'Develop robust Python services for web and data workflows.',
        requirements: [
            '2+ years Python experience with Django or Flask.',
            'Data handling and API development expertise.',
            'Testing frameworks familiarity (PyTest/UnitTest).',
            'Comfort working with relational databases.'
        ],
        responsibilities: [
            'Build and maintain APIs and data processing jobs.',
            'Ensure performance and reliability through profiling and tests.',
            'Collaborate with front-end and data teams on integrations.'
        ],
        benefits: ['Home office setup stipend', 'Professional development budget', 'Conference allowance', 'Annual salary review', '35 days leave']
    },
    'junior-full-stack': {
        title: 'Junior Full-Stack Developer',
        type: 'Physical',
        salary: '£23,000 - £27,000 per annum',
        location: 'Milton Keynes (5 days office)',
        summary: 'Learn and contribute across the stack with strong mentorship.',
        requirements: [
            'Bootcamp/course completion or portfolio projects.',
            'HTML, CSS, JavaScript plus basic backend knowledge.',
            'Git proficiency and willingness to learn testing.',
            'Collaborative mindset and curiosity.'
        ],
        responsibilities: [
            'Pair with seniors on client features across UI and APIs.',
            'Ship small features end-to-end with support.',
            'Participate in reviews and documentation.'
        ],
        benefits: ['Free on-site parking and lunch', 'Comprehensive mentorship', 'Paid training', 'Clear promotion pathway', '35 days leave']
    },
    'javascript-specialist': {
        title: 'JavaScript Specialist',
        type: 'Remote',
        salary: '£33,000 - £40,000 per annum',
        location: 'Milton Keynes (100% remote)',
        summary: 'Build high-performance JavaScript applications across client and server.',
        requirements: [
            '2+ years modern JavaScript with TypeScript experience.',
            'Framework expertise (React/Vue) and performance optimisation.',
            'Comfort contributing to Node.js services.',
            'Testing discipline and code quality focus.'
        ],
        responsibilities: [
            'Deliver complex JS features across front-end and Node.js.',
            'Improve performance budgets and bundle health.',
            'Share best practices through documentation and pairing.'
        ],
        benefits: ['Tech tool budgets', 'Conference funding', 'Professional development', 'Performance bonuses', '35 days annual leave']
    },
    'security-developer': {
        title: 'Web Application Security Developer',
        type: 'Hybrid',
        salary: '£38,000 - £45,000 per annum',
        location: 'Milton Keynes (2 days office, 3 days remote)',
        summary: 'Lead security initiatives, code reviews, and penetration testing support.',
        requirements: [
            '3+ years web development with security expertise.',
            'Penetration testing knowledge and secure coding practices.',
            'Understanding of compliance and data protection.',
            'Ability to mentor teams on security standards.'
        ],
        responsibilities: [
            'Embed security controls in codebases and pipelines.',
            'Conduct threat modelling and code reviews.',
            'Coordinate remediation plans with delivery teams.'
        ],
        benefits: ['Cybersecurity certifications funded', 'Private healthcare', 'Flexible schedule', 'Annual salary review', '35 days leave']
    },
    'tech-lead': {
        title: 'Tech Lead / Senior Developer',
        type: 'Hybrid',
        salary: '£50,000 - £60,000 per annum',
        location: 'Milton Keynes (flexible hybrid)',
        summary: 'Lead development teams, set technical direction, and mentor engineers.',
        requirements: [
            '7+ years development experience with full-stack exposure.',
            'Proven architectural design and leadership skills.',
            'Experience running planning sessions and code reviews.',
            'Comfort balancing delivery speed with quality.'
        ],
        responsibilities: [
            'Define technical standards and architecture for projects.',
            'Mentor developers and manage technical risk.',
            'Partner with product leads on roadmap and scope.'
        ],
        benefits: ['Leadership development program', 'Annual salary review', 'Flexible working', 'Team budgets for learning', '35 days annual leave']
    }
};

// ============================================
// COURSE DATA (specific to job roles)
// ============================================

const COURSE_DATA = {
    // FRONT-END SPECIFIC COURSES
    'responsive-web-design': {
        title: 'Responsive Web Design',
        summary: 'Master HTML, CSS, and responsive design principles through hands-on projects. Build pixel-perfect layouts that work across all devices.',
        qualification: 'FreeCodeCamp Verified Certificate',
        url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
        curriculum: [
            'HTML5 semantic structure and best practices',
            'CSS Flexbox and Grid layouts',
            'Media queries and mobile-first design',
            'Responsive typography and images',
            'Project-based learning with portfolio pieces'
        ],
        jobLinks: ['junior-front-end', 'front-end', 'full-stack', 'junior-full-stack']
    },
    'javascript-algorithms': {
        title: 'JavaScript Algorithms and Data Structures',
        summary: 'Learn modern JavaScript from basics to advanced concepts. Master ES6+, async programming, and problem-solving algorithms.',
        qualification: 'FreeCodeCamp Verified Certificate',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        curriculum: [
            'JavaScript fundamentals and ES6+ syntax',
            'DOM manipulation and event handling',
            'Asynchronous programming (Promises, async/await)',
            'Algorithm and data structure problems',
            'Functional and object-oriented patterns'
        ],
        jobLinks: ['junior-front-end', 'front-end', 'javascript-specialist', 'full-stack', 'junior-full-stack']
    },
    'front-end-dev-libs': {
        title: 'Front-End Development Libraries',
        summary: 'Master React and modern front-end frameworks. Build interactive single-page applications with components and state management.',
        qualification: 'FreeCodeCamp Verified Certificate',
        url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/',
        curriculum: [
            'React fundamentals and JSX',
            'Component lifecycle and hooks',
            'State management with Redux',
            'Bootstrap and utility libraries',
            'Building dynamic user interfaces'
        ],
        jobLinks: ['front-end', 'javascript-specialist', 'full-stack']
    },
    'advanced-css': {
        title: 'Advanced CSS for Modern Web',
        summary: 'Master advanced CSS techniques including Flexbox, Grid, animations, and responsive design for professional websites.',
        qualification: 'Coursera Certificate (HTML, CSS, and Javascript for Web Developers)',
        url: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
        curriculum: [
            'CSS Flexbox and Grid layouts',
            'CSS animations and transitions',
            'Responsive design patterns',
            'JavaScript integration with CSS',
            'Cross-browser compatibility and performance'
        ],
        jobLinks: ['front-end', 'full-stack']
    },
    'web-accessibility': {
        title: 'Web Accessibility Essentials',
        summary: 'Learn to build inclusive web applications following WCAG standards with semantic HTML and ARIA implementation.',
        qualification: 'edX Professional Certificate (W3C Front-End Web Developer)',
        url: 'https://www.edx.org/learn/web-accessibility',
        curriculum: [
            'WCAG 2.1 compliance standards and guidelines',
            'Semantic HTML and ARIA attributes',
            'Keyboard navigation and screen reader testing',
            'Color contrast and accessible visual design',
            'Accessibility auditing and evaluation tools'
        ],
        jobLinks: ['front-end', 'full-stack', 'junior-front-end']
    },

    // BACK-END SPECIFIC COURSES
    'backend-dev-apis': {
        title: 'Back-End Development & APIs',
        summary: 'Build robust server-side applications with Node.js and Express. Master REST API design, authentication, and database integration.',
        qualification: 'FreeCodeCamp Verified Certificate (Back End Development and APIs)',
        url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
        curriculum: [
            'Node.js fundamentals and Express.js',
            'RESTful API design and implementation',
            'Authentication and authorization patterns',
            'Database integration and queries',
            'MongoDB and real-world project examples'
        ],
        jobLinks: ['back-end', 'javascript-specialist', 'full-stack', 'junior-full-stack', 'senior-back-end', 'python', 'php']
    },
    'relational-db': {
        title: 'Relational Databases (SQL & PostgreSQL)',
        summary: 'Master SQL and database design with PostgreSQL. Learn schema design, query optimization, and effective data management.',
        qualification: 'FreeCodeCamp Verified Certificate (Relational Databases)',
        url: 'https://www.freecodecamp.org/learn/relational-database/',
        curriculum: [
            'SQL fundamentals (SELECT, INSERT, UPDATE, DELETE)',
            'Database design and normalization principles',
            'Complex queries, joins, and optimization',
            'Transactions and data integrity management',
            'PostgreSQL and practical projects'
        ],
        jobLinks: ['back-end', 'full-stack', 'senior-back-end', 'python', 'php', 'javascript-specialist']
    },
    'python-for-beginners': {
        title: 'Python for Beginners',
        summary: 'Learn Python programming fundamentals with hands-on projects. Master syntax, data structures, and problem-solving for backend development.',
        qualification: 'Coursera Verified Certificate (Programming for Everybody - Python)',
        url: 'https://www.coursera.org/learn/python',
        curriculum: [
            'Python syntax and fundamental data types',
            'Functions, loops, and control flow',
            'Object-oriented programming basics',
            'Working with files and data',
            'Practical problem-solving with Python'
        ],
        jobLinks: ['python', 'back-end', 'full-stack']
    },
    'django-for-beginners': {
        title: 'Django for Beginners',
        summary: 'Build full-stack web applications with Django. Learn the MTV architecture, ORM, and deployment essentials.',
        qualification: 'Coursera Verified Certificate (Django for Everybody)',
        url: 'https://www.coursera.org/courses?query=django',
        curriculum: [
            'Django project structure and routing setup',
            'Models, Views, and Templates (MTV) architecture',
            'Django ORM and database migrations',
            'User authentication and permission management',
            'Building complete web applications end-to-end'
        ],
        jobLinks: ['python', 'back-end', 'full-stack', 'senior-back-end']
    },
    'php-for-beginners': {
        title: 'PHP for Beginners',
        summary: 'Master PHP server-side programming fundamentals. Build dynamic web applications with form handling, sessions, and databases.',
        qualification: 'LinkedIn Learning Certificate (PHP Fundamentals)',
        url: 'https://www.linkedin.com/learning/php-essential-training-2',
        curriculum: [
            'PHP syntax and fundamental concepts',
            'Server-side form processing and handling',
            'Session and cookie management strategies',
            'Database connectivity (MySQLi/PDO)',
            'Building dynamic web pages with PHP'
        ],
        jobLinks: ['php', 'back-end', 'full-stack']
    },
    'laravel-framework': {
        title: 'Laravel Framework Mastery',
        summary: 'Master Laravel PHP framework for modern web development. Learn MVC architecture, Eloquent ORM, and API development.',
        qualification: 'LinkedIn Learning Certificate (Laravel Essential Training)',
        url: 'https://www.linkedin.com/learning/laravel-essential-training',
        curriculum: [
            'Laravel routing and controller architecture',
            'Eloquent ORM and database migrations',
            'Blade templating and view management',
            'REST API development with Laravel',
            'Authentication and middleware patterns'
        ],
        jobLinks: ['php', 'back-end', 'full-stack', 'senior-back-end']
    },
    'web-security': {
        title: 'Web Security Fundamentals',
        summary: 'Learn critical web security concepts and best practices. Master OWASP vulnerabilities, authentication, and encryption.',
        qualification: 'Coursera Specialization Certificate (Web Technologies and Security)',
        url: 'https://www.coursera.org/specializations/codio-web-tech-security',
        curriculum: [
            'OWASP Top 10 vulnerabilities and mitigation',
            'Authentication, authorization, and password security',
            'Encryption, hashing, and data protection',
            'SQL injection, XSS, and CSRF prevention',
            'Web application security best practices'
        ],
        jobLinks: ['back-end', 'full-stack', 'senior-back-end', 'security-developer']
    },

    // FULL-STACK & GENERAL COURSES
    'typescript': {
        title: 'TypeScript for JavaScript Developers',
        summary: 'Master TypeScript for type-safe development. Build robust applications using static typing and advanced language features.',
        qualification: 'LinkedIn Learning Certificate (TypeScript Essential Training)',
        url: 'https://www.linkedin.com/learning/typescript-essential-training',
        curriculum: [
            'TypeScript types, interfaces, and type system',
            'Advanced types, generics, and decorators',
            'Classes and object-oriented programming patterns',
            'Module systems and namespace organization',
            'Integration with popular frameworks and libraries'
        ],
        jobLinks: ['front-end', 'javascript-specialist', 'full-stack', 'back-end']
    },
    'git-github': {
        title: 'Git & GitHub Mastery',
        summary: 'Learn version control with Git and GitHub. Master branching, merging, and collaborative workflows for teams.',
        qualification: 'LinkedIn Learning Certificate (Git Essential Training)',
        url: 'https://www.linkedin.com/learning/git-essential-training',
        curriculum: [
            'Git fundamentals (init, add, commit, push, pull)',
            'Branching strategies and merge workflows',
            'Remote repositories and GitHub collaboration',
            'Pull requests and code review practices',
            'Advanced Git commands and conflict resolution'
        ],
        jobLinks: ['junior-front-end', 'front-end', 'back-end', 'javascript-specialist', 'full-stack', 'junior-full-stack', 'python', 'php']
    },
    'testing-frameworks': {
        title: 'JavaScript Testing (Jest & Cypress)',
        summary: 'Master modern testing frameworks for quality assurance. Learn unit testing, integration testing, and end-to-end test automation.',
        qualification: 'FreeCodeCamp Verified Certificate (Quality Assurance)',
        url: 'https://www.freecodecamp.org/learn/quality-assurance/',
        curriculum: [
            'Unit testing fundamentals and practices',
            'Testing frameworks (Jest, Mocha, Chai)',
            'End-to-end testing and test automation',
            'Test coverage analysis and metrics',
            'Integration testing and CI/CD practices'
        ],
        jobLinks: ['front-end', 'javascript-specialist', 'full-stack', 'qa-engineer']
    },
    'data-visualization': {
        title: 'Data Visualization with Tableau',
        summary: 'Create interactive data visualizations and dashboards. Learn to transform complex datasets into compelling visual stories.',
        qualification: 'Coursera Specialization Certificate (Data Visualization with Tableau)',
        url: 'https://www.coursera.org/specializations/data-visualization',
        curriculum: [
            'Tableau fundamentals and interface mastery',
            'Connecting to data sources and preparation',
            'Creating charts, dashboards, and stories',
            'Interactive visualization design principles',
            'Real-world projects and business use cases'
        ],
        jobLinks: ['front-end', 'full-stack', 'javascript-specialist']
    }
};

// ============================================
// PAGE FADE-IN
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');

    // Tab functionality for home page
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => {
                btn.classList.remove('tab-btn--active');
                btn.setAttribute('aria-selected', 'false');
            });
            contentPanels.forEach(panel => {
                panel.classList.remove('content-panel--active');
            });

            // Add active class to clicked button and corresponding panel
            this.classList.add('tab-btn--active');
            this.setAttribute('aria-selected', 'true');
            const targetPanel = document.getElementById(sectionId);
            if (targetPanel) {
                targetPanel.classList.add('content-panel--active');
            }
        });
    });

    attachCourseCardNavigation();
    attachJobCardNavigation();
    renderJobDetailPage();
    attachTraineeJourneyHandlers();
    
    // Initialize filter and search functionality
    initJobFilter();
    initCourseSearch();
});


// ============================================
// COURSE CARD NAVIGATION + OVERLAY PANEL
// ============================================

let activeCourseOverlay = null;

function attachCourseCardNavigation() {
    const courseCards = document.querySelectorAll('.course-card[data-course-id]');
    if (!courseCards.length) return;

    courseCards.forEach(card => {
        const courseId = card.getAttribute('data-course-id');
        if (!courseId) return;

        const viewBtn = card.querySelector('.course-view-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                openCourseOverlay(card, courseId);
            });
        }
    });
}

function openCourseOverlay(card, courseId) {
    if (activeCourseOverlay) closeCourseOverlay();
    
    const courseData = COURSE_DATA[courseId];
    if (!courseData) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'course-overlay-backdrop';
    
    const jobLinksHTML = courseData.jobLinks && courseData.jobLinks.length > 0 
        ? `<div class="course-overlay-jobs">
             <div class="course-overlay-section-title">Relevant for These Roles</div>
             <div class="course-job-roles">
               ${courseData.jobLinks.map(jobId => {
                   const jobData = JOB_DATA[jobId];
                   return jobData ? `<span class="role-badge">${jobData.title}</span>` : '';
               }).join('')}
             </div>
           </div>`
        : '';

    overlay.innerHTML = `
        <div class="course-overlay-panel">
            <button class="course-overlay-close" aria-label="Close course details">&times;</button>
            <div class="course-overlay-header">
                <h2>${courseData.title}</h2>
            </div>
            <p class="course-overlay-summary">${courseData.summary}</p>
            <p class="course-qualification"><strong>Qualification Earned:</strong> ${courseData.qualification}</p>
            <div class="course-overlay-content">
                <div class="course-overlay-section">
                    <div class="course-overlay-section-title">What You'll Learn</div>
                    <ul class="course-curriculum">
                        ${courseData.curriculum.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                ${jobLinksHTML}
            </div>
            <a class="btn-primary course-overlay-enroll" href="${courseData.url}" target="_blank">Enroll Now</a>
        </div>
    `;

    document.body.appendChild(overlay);
    activeCourseOverlay = overlay;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => {
        overlay.classList.add('course-overlay-active');
    });

    const closeBtn = overlay.querySelector('.course-overlay-close');
    if (closeBtn) closeBtn.addEventListener('click', closeCourseOverlay);
}

function closeCourseOverlay() {
    if (!activeCourseOverlay) return;

    document.body.classList.remove('modal-open');
    activeCourseOverlay.classList.remove('course-overlay-active');
    
    setTimeout(() => {
        if (activeCourseOverlay && activeCourseOverlay.parentElement) {
            activeCourseOverlay.remove();
        }
        activeCourseOverlay = null;
    }, 200);
}

// ============================================
// JOB CARD NAVIGATION + OVERLAY PANEL
// ============================================

let activeJobOverlay = null;

function attachJobCardNavigation() {
    const jobCards = document.querySelectorAll('.job-card[data-job-id]');
    if (!jobCards.length) return;

    jobCards.forEach(card => {
        const jobId = card.getAttribute('data-job-id');
        if (!jobId) return;

        const viewBtn = card.querySelector('.job-view-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                openJobOverlay(card, jobId);
            });
        }
    });
}

function openJobOverlay(card, jobId) {
    // Close any existing overlay
    if (activeJobOverlay) {
        closeJobOverlay();
    }

    // Extract job details from the card
    const title = card.querySelector('.job-header h3')?.textContent || 'Job Details';
    const salary = card.querySelector('.job-salary')?.textContent || '';
    const location = card.querySelector('.job-location')?.textContent || '';
    const type = card.querySelector('.job-type')?.textContent || '';
    const details = card.querySelector('.job-details')?.innerHTML || '';
    const applyLink = card.querySelector('.btn-secondary')?.href || `apply.html?job=${jobId}`;

    // Create overlay container
    const overlay = document.createElement('div');
    overlay.className = 'job-overlay-backdrop';
    overlay.innerHTML = `
        <div class="job-overlay-panel">
            <button class="job-overlay-close" aria-label="Close job details">&times;</button>
            <div class="job-overlay-header">
                <h2>${title}</h2>
                <div class="job-overlay-meta">
                    <span>${location}</span>
                    <span>${type}</span>
                    <span>${salary}</span>
                </div>
            </div>
            <a class="btn-secondary job-overlay-apply" href="${applyLink}">Apply Now</a>
            <div class="job-overlay-content">
                ${details}
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    activeJobOverlay = overlay;

    // Disable body scroll when overlay opens
    document.body.classList.add('modal-open');

    // Fade in animation
    requestAnimationFrame(() => {
        overlay.classList.add('job-overlay-active');
    });

    // Attach close handler only to the X button
    const closeBtn = overlay.querySelector('.job-overlay-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeJobOverlay);
    }
}

function openJobOverlayFromCourse(jobId) {
    const jobData = JOB_DATA[jobId];
    if (!jobData) return;

    // Close any existing overlay
    if (activeJobOverlay) {
        closeJobOverlay();
    }

    // Create overlay container
    const overlay = document.createElement('div');
    overlay.className = 'job-overlay-backdrop';
    
    const requirementsHTML = jobData.requirements.map(item => `<li>${item}</li>`).join('');
    const responsibilitiesHTML = jobData.responsibilities.map(item => `<li>${item}</li>`).join('');
    const benefitsHTML = jobData.benefits.map(item => `<li>${item}</li>`).join('');
    
    overlay.innerHTML = `
        <div class="job-overlay-panel">
            <button class="job-overlay-close" aria-label="Close job details">&times;</button>
            <div class="job-overlay-header">
                <h2>${jobData.title}</h2>
                <div class="job-overlay-meta">
                    <span>📍 ${jobData.location}</span>
                    <span>💼 ${jobData.type}</span>
                    <span>💰 ${jobData.salary}</span>
                </div>
            </div>
            <p>${jobData.summary}</p>
            <h3>Requirements</h3>
            <ul>${requirementsHTML}</ul>
            <h3>Responsibilities</h3>
            <ul>${responsibilitiesHTML}</ul>
            <h3>Benefits</h3>
            <ul>${benefitsHTML}</ul>
            <a class="btn-secondary job-overlay-apply" href="apply.html?job=${jobId}">Apply Now</a>
        </div>
    `;

    document.body.appendChild(overlay);
    activeJobOverlay = overlay;

    // Disable body scroll when overlay opens
    document.body.classList.add('modal-open');

    // Fade in animation
    requestAnimationFrame(() => {
        overlay.classList.add('job-overlay-active');
    });

    // Attach close handler only to the X button
    const closeBtn = overlay.querySelector('.job-overlay-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeJobOverlay);
    }
}

function closeJobOverlay() {
    if (!activeJobOverlay) return;

    // Remove body scroll restriction
    document.body.classList.remove('modal-open');
    
    activeJobOverlay.classList.remove('job-overlay-active');
    
    setTimeout(() => {
        if (activeJobOverlay && activeJobOverlay.parentElement) {
            activeJobOverlay.remove();
        }
        activeJobOverlay = null;
    }, 200);
}

function renderJobDetailPage() {
    const detailContainer = document.getElementById('job-detail-content');
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const jobId = params.get('job');
    const job = JOB_DATA[jobId];

    if (!job) {
        detailContainer.innerHTML = '<p class="job-detail-copy">Job not found. Please return to the <a href="jobs.html">Jobs page</a>.</p>';
        return;
    }

    const jobHtml = `
        <div class="job-detail-header">
            <h1>${job.title}</h1>
            <div class="job-meta">
                <span class="job-meta-item">${job.location}</span>
                <span class="job-meta-item">${job.type}</span>
                <span class="job-meta-item">${job.salary}</span>
            </div>
        </div>
        <div class="job-detail-body">
            <div class="job-detail-section">
                <h2>Job Summary</h2>
                <p>${job.summary}</p>
            </div>
            <div class="job-detail-section">
                <h2>Key Responsibilities</h2>
                <ul id="job-responsibilities"></ul>
            </div>
            <div class="job-detail-section">
                <h2>Required Qualifications</h2>
                <ul id="job-requirements"></ul>
            </div>
            <div class="job-detail-section">
                <h2>Key Benefits</h2>
                <ul id="job-benefits"></ul>
            </div>
        </div>
        <div class="job-detail-footer">
            <a href="apply.html?job=${encodeURIComponent(job.title)}" class="btn-primary">Apply for this role</a>
        </div>
    `;

    detailContainer.innerHTML = jobHtml;

    populateList('job-requirements', job.requirements);
    populateList('job-responsibilities', job.responsibilities);
    populateList('job-benefits', job.benefits);

    document.title = `${job.title} | HotBeans Web`;
}

function setTextContent(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') {
        el.textContent = value;
    }
}

function populateList(id, items) {
    const list = document.getElementById(id);
    if (!list || !Array.isArray(items)) return;

    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}


// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS (sub-nav)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// APPLICATION FORM HANDLING
// ============================================

var applicationForm = document.getElementById('application-form');

if (applicationForm) {
    applicationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var formData = {
            fullname: document.getElementById('fullname').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            portfolio: document.getElementById('portfolio').value.trim(),
            cv: document.getElementById('cv').files[0],
            coverLetter: document.getElementById('cover-letter').value.trim(),
            terms: document.getElementById('terms').checked
        };

        var validationErrors = validateForm(formData);
        var formMessage = document.getElementById('form-message');

        if (validationErrors.length > 0) {
            formMessage.textContent = validationErrors.join(' ');
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
            formMessage.classList.add('show');
            return;
        }

        formMessage.textContent = 'Application submitted successfully. We will review and contact you within 3–5 business days.';
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.classList.add('show');

        applicationForm.reset();

        setTimeout(function () {
            formMessage.classList.remove('show');
        }, 5000);
    });
}

function validateForm(data) {
    var errors = [];

    if (!data.fullname || data.fullname.length < 2) {
        errors.push('Please enter a valid name.');
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address.');
    }

    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push('Please enter a valid phone number.');
    }

    if (!data.portfolio || !isValidUrl(data.portfolio)) {
        errors.push('Please enter a valid portfolio URL.');
    }

    if (!data.cv) {
        errors.push('Please upload your CV.');
    } else {
        var allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (allowed.indexOf(data.cv.type) === -1) {
            errors.push('CV must be a PDF or Word document.');
        }
    }

    if (!data.terms) {
        errors.push('You must accept the terms to submit your application.');
    }

    return errors;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[+]?[-\s().\d]{7,}$/.test(phone);
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}


// ============================================
// TRAINEE JOURNEY HANDLERS
// ============================================

function attachTraineeJourneyHandlers() {
    const viewBtns = document.querySelectorAll('.trainee-view-btn');
    const closeBtns = document.querySelectorAll('.journey-close');
    const traineePhotos = document.querySelectorAll('.trainee-photo');
    const imageModal = document.getElementById('trainee-image-modal');
    const modalClose = document.querySelector('.trainee-modal-close');

    // Handle "View Journey" button clicks
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const traineeId = this.getAttribute('data-trainee');
            const journeySection = document.getElementById('trainee-journey-' + traineeId);
            
            // Hide all journey sections
            document.querySelectorAll('.trainee-journey').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected journey
            if (journeySection) {
                journeySection.style.display = 'block';
                journeySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Handle journey close buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.trainee-journey').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle trainee photo clicks to open modal
    traineePhotos.forEach(photo => {
        photo.addEventListener('click', function() {
            const card = this.closest('.trainee-card');
            const name = card.querySelector('.trainee-card-intro h2').textContent;
            const role = card.querySelector('.trainee-role').textContent;
            const imageSrc = this.src;

            document.getElementById('modal-trainee-image').src = imageSrc;
            document.getElementById('modal-trainee-image').alt = name;
            document.getElementById('modal-trainee-name').textContent = name;
            document.getElementById('modal-trainee-role').textContent = role;
            
            imageModal.classList.add('active');
        });
    });

    // Handle modal close button
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
        });
    }

    // Handle clicking outside modal to close
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
            }
        });
    }

    // Handle Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
        }
    });
}

// ============================================
// JOB FILTER FUNCTIONALITY
// ============================================

function initJobFilter() {
    const filterSelect = document.getElementById('job-type-filter');
    const jobCards = document.querySelectorAll('.job-card');
    const jobCountEl = document.getElementById('job-count');
    const totalJobsEl = document.getElementById('total-jobs');
    
    if (!filterSelect || jobCards.length === 0) return;
    
    // Set initial counts
    const totalJobs = jobCards.length;
    totalJobsEl.textContent = totalJobs;
    jobCountEl.textContent = totalJobs;
    
    filterSelect.addEventListener('change', function() {
        const filterValue = this.value.toLowerCase();
        let visibleCount = 0;
        
        jobCards.forEach(card => {
            const jobType = card.querySelector('.job-type');
            if (!jobType) return;
            
            const typeText = jobType.textContent.toLowerCase();
            let shouldShow = false;
            
            if (filterValue === 'all') {
                shouldShow = true;
            } else if (filterValue === 'physical') {
                shouldShow = typeText === 'physical' || typeText === 'on-site';
            } else {
                shouldShow = typeText === filterValue;
            }
            
            if (shouldShow) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        jobCountEl.textContent = visibleCount;
    });
}

// ============================================
// COURSE SEARCH FUNCTIONALITY
// ============================================

function initCourseSearch() {
    const searchInput = document.getElementById('course-search');
    const courseCards = document.querySelectorAll('.course-card');
    const courseCountEl = document.getElementById('course-count');
    const totalCoursesEl = document.getElementById('total-courses');
    
    if (!searchInput || courseCards.length === 0) return;
    
    // Set initial counts
    const totalCourses = courseCards.length;
    totalCoursesEl.textContent = totalCourses;
    courseCountEl.textContent = totalCourses;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        let visibleCount = 0;
        
        courseCards.forEach(card => {
            const title = card.querySelector('h3');
            const description = card.querySelector('.course-desc');
            
            if (!title) return;
            
            const titleText = title.textContent.toLowerCase();
            const descText = description ? description.textContent.toLowerCase() : '';
            
            const matches = titleText.includes(searchTerm) || descText.includes(searchTerm);
            
            if (matches || searchTerm === '') {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        courseCountEl.textContent = visibleCount;
    });
}
