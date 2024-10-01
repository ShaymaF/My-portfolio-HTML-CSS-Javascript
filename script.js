document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animation happens only once
    });
    mobileMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    const switchToEng = document.getElementById('switchToEng');
    const switchToFr = document.getElementById('switchToFr');

    // Sections
    const name = document.getElementById('name');
    const jobTitle = document.getElementById('job-title');
    const downloadCvEng = document.getElementById('downloadCvEng');
    const downloadCvFr = document.getElementById('downloadCvFr');
    const skillsTitle = document.getElementById('skills-title');
    const skillsGrid = document.getElementById('skills-grid'); // Updated to use grid
    const projectsTitle = document.getElementById('projects-title');
    const projectsList = document.getElementById('projects-list');
    const experienceTitle = document.getElementById('experience-title');
    const experienceList = document.getElementById('experience-list');
    const educationTitle = document.getElementById('education-title');
    const contactTitle = document.getElementById('contact-title');
    const educationList = document.getElementById('education-container');
    const languagesTitle = document.getElementById('languages-title');
    const passionsTitle = document.getElementById('passions-title');
    const profileText = document.getElementById('profileText');

    // English Content
    const engContent = {
        name: "Chaima Fradi",
        jobTitle: "Senior Full Stack Engineer",
        cvLinkEng: "Shaima-Fradi-Resume-ENG.pdf",
        cvLinkFr: "Chaima-Fradi-Resume-FR.pdf",
        profile: `
        <p>
          I am a highly skilled Senior Full Stack Developer with over 4 years of experience in building scalable, high-performance web applications. I specialize in MERN and MEAN stacks, with a strong foundation in PHP and Java. I am passionate about solving complex backend and frontend challenges while ensuring seamless user experiences. As a technical leader, I have successfully guided development teams in delivering innovative solutions, optimizing workflows, and ensuring code quality standards. I thrive in fast-paced environments where I can contribute to high-impact projects.
        </p>
        <h3>Professional Strengths</h3>
        <ul class="strengths-list">
          <li><strong>Technical Leadership:</strong> Proven experience in leading development teams, ensuring timely delivery while maintaining high quality.</li>
          <li><strong>Proactive Problem-Solving:</strong> Expert in diagnosing and resolving complex technical issues, optimizing both frontend and backend performance.</li>
          <li><strong>Cross-functional Collaboration:</strong> Adept at working with UI/UX teams, developers, and stakeholders to deliver project success.</li>
          <li><strong>Adaptability:</strong> Skilled in quickly adapting to new technologies and frameworks, with broad expertise across multiple stacks.</li>
          <li><strong>Full Lifecycle Expertise:</strong> Experienced in all aspects of the development lifecycle, from architecture design to deployment and maintenance.</li>
        </ul>
      `,
        skillsTitle: "Core Technical Expertise",
        technicalSkills: [
            {
                category: "Web Development (Frontend)",
                skills: ["React.js & Redux", "Next.js", "Angular 8+", "HTML5, CSS3, SASS", "Tailwind CSS, Bootstrap, Material UI"],
                icon: "fas fa-laptop-code"
            },
            {
                category: "Databases",
                skills: ["MongoDB (NoSQL)", "MySQL", "PostgreSQL", "MariaDB", "SQL Server", "Firebase"],
                icon: "fas fa-database"
            },
            {
                category: "Web Development (Backend)",
                skills: ["Node.js", "Express.js", "Nest.js", "Strapi", "Symfony", "Socket.io"],
                icon: "fas fa-server"
            },
            {
                category: "Authentication & Authorization",
                skills: ["OAuth", "JWT (JSON Web Tokens)"],
                icon: "fas fa-user-shield"
            },
            {
                category: "Data Formats",
                skills: ["JSON", "XML"],
                icon: "fas fa-file-code"
            },
            {
                category: "DevOps & CI/CD",
                skills: ["Docker", "Docker Compose", "GitLab CI/CD", "Jenkins", "GitHub Actions"],
                icon: "fas fa-tools"
            },
            {
                category: "Web Servers & Caching",
                skills: ["Nginx", "Apache", "Redis", "Varnish"],
                icon: "fas fa-network-wired"
            },
            {
                category: "Version Control",
                skills: ["Git", "GitHub", "GitLab"],
                icon: "fas fa-code-branch"
            },
            {
                category: "Languages",
                skills: ["Java", "JavaScript", "TypeScript", "PHP"],
                icon: "fas fa-code"
            },
            {
                category: "Cloud",
                skills: ["OVHcloud", "AWS S3", "Firebase"],
                icon: "fas fa-cloud"
            },
            {
                category: "Testing & Documentation",
                skills: ["Swagger", "Postman", "Unit Testing (Jest, Mocha, Jasmine)"],
                icon: "fas fa-vial"
            },
            {
                category: "Project Management",
                skills: ["Scrum", "Trello", "Taiga", "Redmine"],
                icon: "fas fa-tasks"
            }
        ],
        projectsTitle: "Key Projects",
        projects: [
            {
                "name": "SoldX – E-commerce Platform",
                "description": "Developed a comprehensive e-commerce platform enabling merchants to digitize and manage their online stores.",
                "techStack": ["Next.js", "React", "Node.js", "Strapi", "PostgreSQL"],
                "devOps": ["Docker", "GitLab CI", "Nginx", "Varnish"],
                "tasks": [
                    "Led frontend development using React and Next.js to create dynamic, responsive user interfaces.",
                    "Developed a scalable RESTful API using Node.js and PostgreSQL for managing user and product data.",
                    "Optimized performance with server-side rendering (SSR) and caching integration using Varnish."
                ],
                "images": [
                    "images/soldx/0.png",
                    "images/soldx/1.png",
                    "images/soldx/2.png",
                    "images/soldx/3.png",
                    "images/soldx/4.png",
                    "images/soldx/5.png",
                    "images/soldx/6.png",
                    "images/soldx/7.png",
                    "images/soldx/8.png",
                    "images/soldx/9.png",
                    "images/soldx/10.png",
                    "images/soldx/11.png",
                    "images/soldx/12.png",
                    "images/soldx/13.png",
                    "images/soldx/14.png",
                    "images/soldx/15.png",


                ]
            },
            {
                "name": "Heivent – Event Ticketing Platform",
                "description": "Led the development of an auto-ticketing platform for event management, improving ticket sales and user experience.",
                "techStack": ["Next.js", "React", "Node.js", "NestJs", "MongoDB"],
                "devOps": ["Docker", "Nginx"],
                "tasks": [
                    "Built a secure payment gateway integration using Stripe.",
                    "Developed responsive frontends using React.",
                    "Implemented robust backends with NestJS and MongoDB for managing events and tickets."
                ],
                "images": [
                    "images/heivent/0.png",
                    "images/heivent/1.png",
                    "images/heivent/2.png",
                    "images/heivent/3.png",

                ]
            },
            {
                "name": "AppliBTP – Construction Project Management",
                "description": "Built a project management solution for infrastructure and network activities, ensuring simplicity and speed.",
                "techStack": ["React.js", "Node.js", "Express.js", "MongoDB"],
                "devOps": ["Docker", "Nginx"],
                "tasks": [
                    "Developed the web interface to simplify construction project management.",
                    "Implemented backend features using Node.js and Express.js to manage project activities.",
                    "Used MongoDB for efficient data storage and retrieval."
                ],
                "images": [
                    "images/applibtp/0.png",
                    "images/applibtp/1.png",
                    "images/applibtp/2.png",
                    "images/applibtp/3.png",
                    "images/applibtp/4.png",
                    "images/applibtp/5.png",
                    "images/applibtp/6.png",
                    "images/applibtp/7.png",
                    "images/applibtp/8.png",
                    "images/applibtp/9.png",
                    "images/applibtp/10.png",
                    "images/applibtp/11.png",
                    "images/applibtp/12.png",
                    "images/applibtp/13.png",
                    "images/applibtp/14.png",
                    "images/applibtp/15.png",


                ]
            },
            {
                "name": "Odesco – SaaS School Management Solution",
                "description": "Developed a SaaS platform for managing educational institutions, enhancing administrative and educational workflows.",
                "techStack": ["React.js", "Node.js", "Express.js", "MongoDB"],
                "tasks": [
                    "Designed and developed the platform's frontend with React.js.",
                    "Created a robust backend with Express.js to handle student and staff data.",
                    "Implemented various modules for scheduling, attendance tracking, and reporting."
                ],
                "images": [
                    "images/odesco/0.png",
                    "images/odesco/1.png",
                    "images/odesco/2.png",
                    "images/odesco/3.png",
                    "images/odesco/4.png",
                    "images/odesco/5.png",
                    "images/odesco/6.png",

                ]
            },
            {
                "name": "Talabbox – Online Restaurant Management",
                "description": "Built a platform to help restaurants manage reservations and online orders, streamlining the entire customer service process.",
                "techStack": ["Angular", "Node.js", "Express.js", "MongoDB"],
                "tasks": [
                    "Developed the frontend using Angular for responsive and user-friendly interfaces.",
                    "Created the backend API to manage menu items, orders, and table reservations.",
                    "Integrated the MongoDB database for storing restaurant and customer data."
                ],
                "images": [
                    "images/talabbox/0.png",
                    "images/talabbox/1.png",
                    "images/talabbox/2.png",
                    "images/talabbox/3.png",
                    "images/talabbox/4.png",
                    "images/talabbox/5.png",
                    "images/talabbox/6.png",
                    "images/talabbox/7.png",

                ]
            }
        ],

        experienceTitle: "Professional Experience",
        experiences: [
            {
                role: "Senior Full Stack Developer | Technical Lead",
                company: "Genext Factory",
                period: "November 2020 – Present",
                tasks: [
                    "Led SCRUM ceremonies, including Daily, Poker Planning, and Retrospectives.",
                    "Prepared backlogs in collaboration with the business team.",
                    "Developed and maintained web applications (Angular, React.js, Next.js).",
                    "Supervised developers to implement server-side rendering with Next.js, improving SEO and load times.",
                    "Conducted code reviews and managed bug fixes.",
                    "Architected RESTful APIs using Express.js and Nest.js to optimize backend operations.",
                    "Managed DevOps processes including version control, CI/CD with Docker and GitLab.",
                    "Mentored junior developers, conducted code reviews, and enforced best coding practices."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                company: "Genext IT",
                period: "October 2020 – November 2022",
                tasks: [
                    "Developed REST APIs with Node.js and maintained APIs using Symfony.",
                    "Developed SPAs using the MEAN stack and ensured dynamic, responsive web experiences.",
                    "Collaborated with UI/UX teams to design and implement interactive user interfaces.",
                    "Integrated Stripe for seamless payment processing and utilized AWS S3 for file storage."
                ]
            },
            {
                role: "Final Year Internship | Full Stack Developer",
                company: "PROXYM",
                period: "2020",
                tasks: [
                    "Developed a web application for automatic CV generation using Angular 8, Node.js, and MongoDB, improving internal recruitment processes.",
                    "Gained experience with LDAP for user authentication and Firebase for real-time data synchronization.",
                ]
            },
            {
                role: "Summer Internship | Full Stack Developer",
                company: "PROXYM",
                period: "2019",
                tasks: [
                    "Designed and developed an internal CV management platform using Symfony 4, PHP, Angular, and Docker, enhancing internal workflows.",
                ]
            }
            
        ],
        contactTitle: "Contact Me",
        educationTitle: "Education",
        education: [
            { what: "National Engineering Degree in Software Engineering", where: "EPI-Polytechnic, Sousse", when: "2018 – 2020" },
            { what: "Master 1 (M1) in Software Engineering", where: "ISIMM, Monastir", when: "2017 – 2018" },
            { what: "Bachelor's Degree in Computer Science", where: "ISIMM, Monastir", when: "2013 – 2017" }
        ],

        languagesTitle: "Languages: English, French, Arabic",
        passionsTitle: "Passions: Painting, Cooking, Travel, Cinema"
    };



    // French Content
    const frContent = {
        name: "Chaima Fradi",
        jobTitle: "Ingénieure Full Stack Senior",
        cvLinkEng: "Chaima-Fradi-Resume-ENG.pdf",
        cvLinkFr: "Chaima-Fradi-Resume-FR.pdf",
        profile: `
        <p>
          Je suis une développeuse Full Stack expérimentée avec plus de 4 ans d'expérience dans la création d'applications web évolutives et performantes. Mon expertise englobe les stacks MERN et MEAN, avec une solide maîtrise de PHP et Java. Je suis passionnée par la résolution de défis complexes, que ce soit côté backend ou frontend, tout en garantissant des expériences utilisateur fluides. En tant que leader technique, j'ai dirigé des équipes de développement en délivrant des solutions innovantes, en optimisant les workflows et en assurant des normes de qualité de code élevées.
        </p>
        <h3>Forces Professionnelles</h3>
        <ul class="strengths-list">
          <li><strong>Leadership Technique:</strong> Expérience avérée dans la gestion d'équipes de développement, assurant des livraisons dans les délais tout en maintenant une haute qualité.</li>
          <li><strong>Résolution Proactive de Problèmes:</strong> Expertise dans le diagnostic et la résolution de problèmes techniques complexes, en optimisant les performances frontend et backend.</li>
          <li><strong>Collaboration Transversale:</strong> Compétence à travailler avec les équipes UI/UX, les développeurs et les parties prenantes pour assurer le succès des projets.</li>
          <li><strong>Adaptabilité:</strong> Capacité à s'adapter rapidement aux nouvelles technologies et cadres, avec une expertise étendue à travers plusieurs stacks.</li>
          <li><strong>Expertise en Cycle de Vie Complet:</strong> Expérience dans tous les aspects du cycle de vie du développement, de la conception d'architecture au déploiement et à la maintenance.</li>
        </ul>
      `,
        skillsTitle: "Compétences Techniques Clés",
        technicalSkills: [
            {
                category: "Développement Web (Frontend)",
                skills: ["React.js & Redux", "Next.js", "Angular 8+", "HTML5, CSS3, SASS", "Tailwind CSS, Bootstrap, Material UI"],
                icon: "fas fa-laptop-code"
            },
            {
                category: "Bases de données",
                skills: ["MongoDB (NoSQL)", "MySQL", "PostgreSQL", "MariaDB", "SQL Server", "Firebase"],
                icon: "fas fa-database"
            },
            {
                category: "Développement Web (Backend)",
                skills: ["Node.js", "Express.js", "Nest.js", "Strapi", "Symfony", "Socket.io"],
                icon: "fas fa-server"
            },
            {
                category: "Authentification & Autorisation",
                skills: ["OAuth", "JWT (JSON Web Tokens)"],
                icon: "fas fa-user-shield"
            },
            {
                category: "Formats de Données",
                skills: ["JSON", "XML"],
                icon: "fas fa-file-code"
            },
            {
                category: "DevOps & CI/CD",
                skills: ["Docker", "Docker Compose", "GitLab CI/CD", "Jenkins", "GitHub Actions"],
                icon: "fas fa-tools"
            },
            {
                category: "Serveurs Web & Cache",
                skills: ["Nginx", "Apache", "Redis", "Varnish"],
                icon: "fas fa-network-wired"
            },
            {
                category: "Contrôle de Version",
                skills: ["Git", "GitHub", "GitLab"],
                icon: "fas fa-code-branch"
            },
            {
                category: "Langages",
                skills: ["Java", "JavaScript", "TypeScript", "PHP"],
                icon: "fas fa-code"
            },
            {
                category: "Cloud",
                skills: ["OVHcloud", "AWS S3", "Firebase"],
                icon: "fas fa-cloud"
            },
            {
                category: "Tests & Documentation",
                skills: ["Swagger", "Postman", "Tests Unitaires (Jest, Mocha, Jasmine)"],
                icon: "fas fa-vial"
            },
            {
                category: "Gestion de Projet",
                skills: ["Scrum", "Trello", "Taiga", "Redmine"],
                icon: "fas fa-tasks"
            }
        ],

        projectsTitle: "Projets Clés",
        projects: [
            {
                "name": "SoldX – Plateforme E-commerce",
                "description": "Développement d'une plateforme e-commerce complète permettant aux marchands de gérer leurs boutiques en ligne.",
                "techStack": ["Next.js", "React", "Node.js", "Strapi", "PostgreSQL"],
                "devOps": ["Docker", "GitLab CI", "Nginx", "Varnish"],
                "tasks": [
                    "Développement frontend avec React et Next.js pour créer des interfaces dynamiques et réactives.",
                    "Création d'une API RESTful évolutive utilisant Node.js et PostgreSQL.",
                    "Optimisation des performances grâce au rendu côté serveur SSR et à l'intégration du cache Varnish."
                ],
                "images": [
                    "images/soldx/0.png",
                    "images/soldx/1.png",
                    "images/soldx/2.png",
                    "images/soldx/3.png",
                    "images/soldx/4.png",
                    "images/soldx/5.png",
                    "images/soldx/6.png",
                    "images/soldx/7.png",
                    "images/soldx/8.png",
                    "images/soldx/9.png",
                    "images/soldx/10.png",
                    "images/soldx/11.png",
                    "images/soldx/12.png",
                    "images/soldx/13.png",
                    "images/soldx/14.png",
                    "images/soldx/15.png",
                ]
            },
            {
                "name": "Heivent – Plateforme de Billetterie",
                "description": "Développement d'une plateforme de billetterie automatique pour la gestion des événements.",
                "techStack": ["Next.js", "React", "Node.js", "NestJs", "MongoDB"],
                "devOps": ["Docker", "Nginx"],
                "tasks": [
                    "Intégration d'une passerelle de paiement sécurisée via Stripe.",
                    "Développement frontend avec React pour assurer la réactivité sur tous les appareils.",
                    "Mise en place du backend avec NestJS et MongoDB pour la gestion des événements et des billets."
                ],
                "images": [
                    "images/heivent/0.png",
                    "images/heivent/1.png",
                    "images/heivent/2.png",
                    "images/heivent/3.png",
                ]
            },
            {
                "name": "AppliBTP – Gestion de Projet de Construction",
                "description": "Création d'une solution de gestion de projet pour les activités d'infrastructure et de réseau.",
                "techStack": ["React.js", "Node.js", "Express.js", "MongoDB"],
                "devOps": ["Docker", "Nginx"],
                "tasks": [
                    "Développement d'interfaces web simplifiant la gestion des projets de construction.",
                    "Mise en place de fonctionnalités backend avec Node.js et Express.js.",
                    "Utilisation de MongoDB pour un stockage efficace des données."
                ],
                "images": [
                    "images/applibtp/0.png",
                    "images/applibtp/1.png",
                    "images/applibtp/2.png",
                    "images/applibtp/3.png",
                    "images/applibtp/4.png",
                    "images/applibtp/5.png",
                    "images/applibtp/6.png",
                    "images/applibtp/7.png",
                    "images/applibtp/8.png",
                    "images/applibtp/9.png",
                    "images/applibtp/10.png",
                    "images/applibtp/11.png",
                    "images/applibtp/12.png",
                    "images/applibtp/13.png",
                    "images/applibtp/14.png",
                    "images/applibtp/15.png",
                ]
            },
            {
                "name": "Odesco – Solution SaaS de Gestion Scolaire",
                "description": "Développement d'une plateforme SaaS pour la gestion des établissements éducatifs.",
                "techStack": ["React.js", "Node.js", "Express.js", "MongoDB"],
                "tasks": [
                    "Conception et développement du frontend avec React.js.",
                    "Création d'une API backend robuste pour gérer les données des élèves et du personnel.",
                    "Mise en place de modules pour la gestion des emplois du temps, la présence et les rapports."
                ],
                "images": [
                    "images/odesco/0.png",
                    "images/odesco/1.png",
                    "images/odesco/2.png",
                    "images/odesco/3.png",
                    "images/odesco/4.png",
                    "images/odesco/5.png",
                    "images/odesco/6.png",
                ]
            },
            {
                "name": "Clicknmeal – Gestion de Restaurant en Ligne",
                "description": "Développement d'une plateforme permettant aux restaurants de gérer les réservations et les commandes en ligne.",
                "techStack": ["Angular", "Node.js", "Express.js", "MongoDB"],
                "tasks": [
                    "Développement du frontend avec Angular pour une interface utilisateur réactive.",
                    "Création d'une API backend pour gérer les menus, les commandes et les réservations.",
                    "Utilisation de MongoDB pour le stockage des données des restaurants et des clients."
                ],
                "images": [
                    "images/talabbox/0.png",
                    "images/talabbox/1.png",
                    "images/talabbox/2.png",
                    "images/talabbox/3.png",
                    "images/talabbox/4.png",
                    "images/talabbox/5.png",
                    "images/talabbox/6.png",
                    "images/talabbox/7.png",
                ]
            }
        ],

        experienceTitle: "Expérience Professionnelle",
        experiences: [
            {
                role: "Développeuse Full Stack Senior | Lead Technique",
                company: "Genext Factory",
                period: "Novembre 2020 – Présent",
                tasks: [
                    "Animation des cérémonies SCRUM : Daily, Poker Planning, Rétrospectives.",
                    "Préparation des backlogs en collaboration avec l'équipe business.",
                    "Développement et maintenance des applications web (Angular, React.js, Next.js).",
                    "Supervision de l'équipe pour la mise en place du rendu côté serveur SSR avec Next.js.",
                    "Révision de code et gestion des corrections de bugs.",
                    "Conception d'API RESTful avec Express.js et Nest.js pour optimiser les processus backend.",
                    "Gestion des processus DevOps incluant le contrôle de version, l'intégration continue et le déploiement avec Docker et GitLab.",
                    "Encadrement des développeurs juniors, révision du code et maintien des meilleures pratiques."
                ]
            },
            {
                role: "Développeuse Full Stack Junior",
                company: "Genext IT",
                period: "Octobre 2020 – Novembre 2022",
                tasks: [
                    "Développement d'APIs REST avec Node.js et maintenance des APIs sous Symfony.",
                    "Développement d'applications SPAs en utilisant le stack MEAN.",
                    "Collaboration avec les équipes UI/UX pour concevoir des interfaces utilisateurs interactives.",
                    "Intégration de Stripe pour la gestion des paiements en ligne.",
                    "Utilisation d'AWS S3 pour le stockage et la migration des fichiers."
                ]
            },
            {
                role: "Stage de Fin d'Études | Développeuse Full Stack",
                company: "PROXYM",
                period: "2020",
                tasks: [
                    "Développement d'une application web pour la génération automatique de CV en utilisant Angular 8, Node.js et MongoDB, améliorant ainsi les processus de recrutement internes.",
                    "Acquisition d'expérience avec LDAP pour l'authentification des utilisateurs et Firebase pour la synchronisation des données en temps réel.",
                ]
                
            },
            {
                role: "Stage d'Été | Développeuse Full Stack",
                company: "Tunisie",
                period: "2019",
                tasks: [
                    "Conception et développement d'une plateforme de gestion de CV interne en utilisant Symfony 4, PHP, Angular et Docker, améliorant ainsi les flux de travail internes.",
                ]
            }
            

        ],
        contactTitle: "Contactez-moi",
        educationTitle: "Éducation",
        education: [
            { what: "Diplôme National en Génie Logiciel", where: "EPI-Polytechnique, Sousse", when: "2018 – 2020" },
            { what: "Master 1 (M1) en Génie Logiciel", where: "ISIMM, Monastir", when: "2017 – 2018" },
            { what: "Licence en Informatique", where: "ISIMM, Monastir", when: "2013 – 2017" }
        ],

        languagesTitle: "Langues: Anglais, Français, Arabe",
        passionsTitle: "Passions: Peinture, Cuisine, Voyage, Cinéma"
    };



    // Helper function to populate skills into grid
    function populateSkills(skills) {
        skillsGrid.innerHTML = '';
        skills.forEach(skillCategory => {
            const card = document.createElement('div');
            card.classList.add('skill-card');
            card.innerHTML = `
                <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
                <ul>${skillCategory.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            `;
            skillsGrid.appendChild(card);
        });
    }

    // Initialize Slick Sliders
    function initializeSlickSliders() {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            nextArrow: '<button class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
            prevArrow: '<button class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>'
        });
    }

    // Initialize Magnific Popup for image zoom
    function initializeImagePopup() {
        // Ensure that jQuery and Magnific Popup are loaded and initialized after images are loaded
        if ($.fn.magnificPopup) {
            $('.image-popup').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                mainClass: 'mfp-fade',
                removalDelay: 300
            });
        } else {
            console.error('Magnific Popup is not loaded');
        }
    }



    // Populate content dynamically and initialize sliders/popups
    function populateContent(content) {
        name.textContent = content.name;
        jobTitle.textContent = content.jobTitle;
        downloadCvEng.href = content.cvLinkEng;
        downloadCvFr.href = content.cvLinkFr;
        profileText.innerHTML = content.profile;

        // Populate Skills Section
        populateSkills(content.technicalSkills);

        // Populate Projects Section and Initialize Slider
        projectsList.innerHTML = content.projects.map((project, index) => `
        <div class="project" id="project-${index}">
            <div class="info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <ul>
                    ${project.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
                <p><strong>Technologies:</strong> ${project.techStack.join(', ')}</p>
            </div>
            <div class="image-gallery grid-gallery gallery-${index}">
                ${project.images.map((img, imgIndex) => `
                    <div class="image-item">
                        <a href="${img}" class="image-popup" data-gallery="gallery-${index}">
                            <img src="${img}" alt="${project.name} Image" class="project-image">
                        </a>
                    </div>`).join('')}
            </div>
        </div>
    `).join('');

        experienceTitle.textContent = content.experienceTitle;
        experienceList.innerHTML = content.experiences.map(exp =>
            ` <div class="experience">
                <h3>${exp.role}</h3>
                <p style="display:grid;"> <b>${exp.company}</b> 
                <span class="date">| ${exp.period} </span></p>
                 <ul>
                ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
            </div>`
        ).join('');

        educationTitle.textContent = content.educationTitle;
        contactTitle.textContent = content.contactTitle;

        // Loop through the education data and create HTML for each card
        educationList.innerHTML = content.education.map((education) =>
            `
            <div class="education-card">
                <i class="fas fa-university education-icon"></i> <!-- Optional: Update icon for different cards -->
                <h3>${education.what}</h3>
                <p>${education.where}</p>
                <p class="edu-period">${education.when}</p>
            </div>
        `

        );

        languagesTitle.textContent = content.languagesTitle;
        passionsTitle.textContent = content.passionsTitle;

        // Initialize the Slick Sliders and Magnific Popup
        initializeSlickSliders();
        initializeImagePopup();
    }

    // Switch between English and French content
    switchToEng.addEventListener('click', function () {
        switchToEng.classList.add('active-lang');
        switchToFr.classList.remove('active-lang');
        populateContent(engContent);

    });

    switchToFr.addEventListener('click', function () {
        switchToFr.classList.add('active-lang');
        switchToEng.classList.remove('active-lang');
        populateContent(frContent);
    });

    // Initially populate with English content
    populateContent(engContent);
});
