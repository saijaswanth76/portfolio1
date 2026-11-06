/**
 * ---------------------------------------------------------------------------
 *  PORTFOLIO CONTENT
 *  Every value here comes from the supplied resume, certificates or profile
 *  photo. Links that were not provided stay `null` so the UI never invents
 *  a repository, demo, verification URL or date.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: 'Sadu Venkata Subramanya Siva Sai Jaswanth',
  displayName: 'Sadu Venkata Subramanya Siva Sai Jaswanth',
  shortName: 'Sai Jaswanth',
  role: 'Full Stack Developer',
  subtitle: 'Computer Science Engineering Student',
  titleLine: 'Full Stack Developer | Computer Science Engineering Student',
  summary:
    'Full Stack Developer with experience in designing and developing end-to-end web applications using modern frontend and backend technologies. Skilled in building responsive user interfaces, developing robust server-side applications, integrating databases and APIs, and delivering scalable, secure, and reliable software through clean code, efficient problem-solving, and continuous learning.',

  email: 'saijaswanth2581@gmail.com',
  phone: '+91-6302107516',
  phoneHref: '+916302107516',
  location: 'India',

  github: 'https://github.com/saijaswanth76',
  linkedin:
    'https://www.linkedin.com/in/sadu-venkata-subramanya-siva-sai-jaswanth-46144834a',

  photo: '/profile.jpeg',
  photoAlt: 'Portrait of Sai Jaswanth Sadu',

  resumeUrl: '/Sai_Jaswanth_Sadu_Resume.pdf',
  resumeFileName: 'Sai_Jaswanth_Sadu_Resume.pdf',

  availability: 'Open to software engineering opportunities',
  availabilityBadge: 'OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: profile.github, handle: 'saijaswanth76' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: profile.linkedin,
    handle: 'Sai Jaswanth Sadu',
  },
  {
    id: 'email',
    label: 'Email',
    url: `mailto:${profile.email}`,
    handle: profile.email,
  },
];

export const heroHighlights = [
  {
    id: 'fullstack',
    icon: 'layers',
    title: 'Full Stack Development',
    text: 'Frontend & Backend',
  },
  {
    id: 'problem-solving',
    icon: 'brain',
    title: 'Problem Solving',
    text: 'Programming & Core Computer Science',
  },
];

export const skillGroups = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: 'layers',
    skills: ['Spring Boot'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub'],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: 'cpu',
    skills: [
      'REST APIs',
      'JDBC',
      'OOP',
      'Collections',
      'Multithreading',
    ],
  },
];

export const projects = [
  {
    id: 'spam-detection',
    visual: 'spam',
    title: 'AI-Powered Spam Detection System',
    year: '2026',
    description:
      'An AI-powered Spam Detection System that uses Python, Machine Learning and Scikit-learn to classify SMS messages as spam or legitimate (ham).',
    features: [
      'Text classification pipeline with data preprocessing',
      'Machine learning models trained for automated spam detection',
      'Interactive Streamlit web app with real-time predictions and confidence estimates',
      'Sample messages and message analysis',
      'Performance evaluated with Accuracy, Precision, Recall, F1-Score, ROC-AUC and Confusion Matrix',
    ],
    technologies: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    repoUrl: null, // Add the real repository URL when it is available.
    demoUrl: null, // Add the real deployed URL when it is available.
  },
  {
    id: 'shopkart',
    visual: 'shopkart',
    title: 'ShopKart – Full-Stack E-Commerce Web Application',
    year: '2026',
    description:
      'A responsive e-commerce platform inspired by Flipkart, built with React.js, Node.js, Express.js and MongoDB for seamless product browsing, searching, filtering and purchasing.',
    features: [
      'Secure user authentication and role-based authorization',
      'Product browsing, searching, filtering and purchasing',
      'Shopping cart, wishlist, product management and order tracking',
      'Razorpay payment gateway with server-side verification and secure order processing',
      'MongoDB schemas and backend APIs for inventory, reviews, coupon validation and orders',
      'Data consistency and secure transactions',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT',
      'Razorpay',
    ],
    repoUrl: null, // Add the real repository URL when it is available.
    demoUrl: null, // Add the real deployed URL when it is available.
  },
];

export const education = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Vasireddy Venkatadri Institute of Technology',
    period: 'Class of 2028',
    score: 'CGPA: 8.7 / 10',
    icon: 'university',
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    field: 'Higher Secondary',
    institution: 'Viswa Sai Junior College, Vinukonda',
    period: '2022 – 2024',
    score: 'Percentage: 96 / 100',
    icon: 'school',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    field: 'Secondary Education',
    institution: 'Sri Sai Chaitanya High School, Tripuranthakam',
    period: '2012 – 2022',
    score: 'Percentage: 84 / 100',
    icon: 'book',
  },
];

/**
 * Only facts printed on the uploaded certificates are included.
 * `file` is the real document, `preview` is a rendered first page.
 */
export const certifications = [
  {
    id: 'html',
    title: 'Introduction to HTML',
    issuer: 'Simplilearn SkillUp',
    issueDate: '16 August 2025',
    topics: ['HTML5', 'Semantic HTML', 'Forms', 'Web Page Structure'],
    file: '/certificates/simplilearn-html.jpg',
    preview: '/certificates/previews/html.jpg',
    credentialNote: 'Certificate code: 8794908',
    verifyUrl: null,
  },
  {
    id: 'css',
    title: 'CSS Fundamentals',
    issuer: null,
    issueDate: null,
    topics: ['CSS3', 'Responsive Web Design', 'Flexbox', 'Grid'],
    file: null,
    preview: null,
    credentialNote: 'Certificate file not uploaded yet',
    verifyUrl: null,
  },
  {
    id: 'javascript',
    title: 'Learn JavaScript',
    issuer: 'CodeChef',
    issueDate: '16 August 2026',
    topics: [
      'JavaScript',
      'DOM Manipulation',
      'Event Handling',
      'Programming Concepts',
    ],
    file: '/certificates/javascript.pdf',
    preview: '/certificates/previews/javascript.jpg',
    credentialNote: 'Certificate ID: 252e746',
    verifyUrl: 'https://www.codechef.com/certificates/verify',
  },
  {
    id: 'infosys-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    issueDate: '13 August 2026',
    topics: ['Artificial Intelligence'],
    file: '/certificates/infosys.pdf',
    preview: '/certificates/previews/infosys.jpg',
    credentialNote: 'Issued by Infosys Limited',
    verifyUrl: 'https://verify.onwingspan.com',
  },
];

export const contactContent = {
  heading: 'Let’s build something great together',
  description:
    'I’m open to software engineering internships, full-time roles and interesting projects. Send a message and I’ll get back to you.',
  subjectPlaceholder: 'Internship opportunity',
  messagePlaceholder:
    'Tell me a little about the role, team or project you have in mind…',
};

/**
 * EmailJS is a real email delivery service. Fill these in (or set the
 * VITE_EMAILJS_* variables in .env) to send messages directly from the form.
 * Until then the form honestly falls back to opening the visitor's mail app —
 * it never shows a fake "sent" confirmation.
 */
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const emailjsConfigured = Boolean(
  emailjs.serviceId && emailjs.templateId && emailjs.publicKey
);
