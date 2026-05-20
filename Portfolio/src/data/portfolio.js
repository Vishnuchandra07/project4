export const personalInfo = {
  name: 'Vishnu Chandra Galipelli',
  firstName: 'Vishnu',
  roles: [
    'AI & Machine Learning Student',
    'Deep Learning Enthusiast',
    'Computer Vision Developer',
  ],
  tagline:
    'Building intelligent AI solutions using Deep Learning and Computer Vision.',
  email: 'vishnuchandragalipelli@gmail.com',
  resumePath:
    'https://drive.google.com/file/d/1noip-3Ze_CpHXx0STO4b1DyLO6Dz17H1/view',
  resumeFileName: 'Vishnu_Chandra_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vishnu-chandra-galipelli-7b6634340/',
    github: 'https://github.com/Vishnuchandra07',
    leetcode: 'https://leetcode.com/u/Vishnuchandra07/',
    hackerrank: 'https://www.hackerrank.com/profile/24211a6647',
  },
}

export const about = {
  bio: 'I am a Computer Science student passionate about Artificial Intelligence, Deep Learning, and Computer Vision. I enjoy building intelligent systems that solve real-world problems using machine learning technologies.',
  education: {
    institution: 'BV Raju Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    cgpa: '8.75/10.0',
  },
  coursework: [
    'Machine Learning',
    'Data Structures and Algorithms',
    'OOP',
    'Computer Vision',
    'Operating Systems',
    'Python',
    'Java',
    'Database Management System',
  ],
}

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python', 'Java', 'C', 'C++'],
  },
  {
    id: 'aiml',
    title: 'Skills',
    icon: 'Brain',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'CNN',
      'YOLO Object Detection',
      'Model Training',
      'TensorFlow',
      'OpenCV',
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: ['SQL', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'Visual Studio Code'],
  },
]

export const experience = [
  {
    id: 'deloitte',
    title: 'Deloitte Technology Consulting Virtual Internship',
    duration: 'July 2025 – August 2025',
    responsibilities: [
      'Worked on technology consulting simulation tasks',
      'Improved problem-solving and analytical skills',
      'Learned professional development workflows',
      'Gained exposure to software development practices',
    ],
  },
]

export const projects = [
  {
    id: 'road-damage',
    title: 'Multi-Class Urban Road Damage Detection using YOLO-based Architecture',
    description:
      'Developed a deep learning-based road damage detection system using YOLO architecture for real-time identification of potholes, road cracks, open manholes, and closed manholes.',
    technologies: ['Python', 'OpenCV', 'YOLO'],
    features: [
      'Real-time object detection',
      'Precision and Recall evaluation',
      'mAP and F1-score metrics',
      'Computer vision pipeline',
    ],
    category: 'computer-vision',
    featured: true,
    github: 'https://github.com/Vishnuchandra07/project1',
    image:
      'https://drive.google.com/thumbnail?id=1mWRLfp7vMHGfnJ693RdpuSQqpYQjwa3x&sz=w1000',
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer Detection using CNN and ResNet Models',
    description:
      'Developed a medical imaging classification system to classify cancerous and non-cancerous samples using deep learning.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    features: [
      'CNN architecture',
      'ResNet implementation',
      'Model visualization',
      'Accuracy optimization',
    ],
    category: 'deep-learning',
    featured: false,
    github: 'https://github.com/Vishnuchandra07/project2',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    id: 'diabetes',
    title: 'Diabetes Prediction using Machine Learning',
    description:
      'Built a machine learning model to predict diabetes based on medical parameters using classification algorithms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    features: [],
    category: 'machine-learning',
    featured: false,
    github: 'https://github.com/Vishnuchandra07/project3',
    image:
      'https://drive.google.com/file/d/1wc22l9a19VgYA5ZSHjZedfRDdaJb1C2N/view?usp=sharing',
   
  },
]

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'deep-learning', label: 'Deep Learning' },
  { id: 'machine-learning', label: 'Machine Learning' },
]

export const certifications = [
  {
    id: 'nptel-ml',
    title: 'NPTEL Machine Learning',
    issuer: 'NPTEL',
    year: '2026',
    link: 'https://drive.google.com/file/d/12jRFVuP1W3ToWX6oq2HWw9yafji3yhZQ/view',
  },
  {
    id: 'deloitte',
    title: 'Deloitte Technology Consulting Virtual Internship',
    issuer: 'Deloitte',
    year: '2025',
    link: 'https://drive.google.com/file/d/1SWrgZFMOLpaDq91lkq3F-1u-F5xbnfqB/view',
  },
  {
    id: 'iit-kharagpur',
    title: 'IIT Kharagpur Data Science Hackathon',
    issuer: 'IIT Kharagpur',
    year: '2026',
    link: 'https://drive.google.com/file/d/1KtpXFhxZWMOS2LT3P-3wklie2BVmUxE2/view',
  },
  {
    id: 'udemy-python',
    title: 'Python Programming',
    issuer: 'Udemy',
    year: '2025',
    link: 'https://drive.google.com/file/d/1tNbzt4tICW_lqCNSHsxIkucJ4583fz0V/view',
  },
  {
    id: 'infosys',
    title: 'Infosys Springboard',
    issuer: 'Infosys',
    year: '2025',
    link: 'https://drive.google.com/file/d/1Im_ITo3Gl1CC1JxiuLuVeV7mKUEVlSUF/view',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
