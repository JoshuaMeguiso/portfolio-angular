import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'enterprise-management-system',
    title: 'Enterprise Management System (ERP-like Platform)',
    description:
      'A modular enterprise system consisting of inventory, payroll, and accounting subsystems with integrated operational and financial data flow.',

    overview:
      'Built a modular enterprise management system designed to unify core business operations including inventory tracking, payroll processing, and financial reporting. The system follows a shared data architecture where operational modules feed into accounting for consolidated reporting and business insights.',

    role:
      'Software Engineer responsible for designing and implementing core business modules including inventory, payroll, and accounting subsystems, as well as ensuring cross-module data consistency and API integration.',

    features: [
      'Modular architecture separating inventory, payroll, and accounting domains',
      'Centralized data flow between operational and financial subsystems',
      'Role-based access control across modules',
      'Unified reporting layer for business insights',
      'REST API integration across all subsystems',
      'Audit-friendly transaction and payroll tracking',
    ],

    challenges: [
      'Ensuring data consistency between inventory, payroll, and accounting modules',
      'Designing a scalable architecture that supports multiple business domains',
      'Managing relational dependencies between operational and financial data',
      'Synchronizing computed payroll and inventory data with accounting summaries',
    ],

    impact: [
      'Improved accuracy of business reporting through centralized data processing',
      'Reduced inconsistencies between operational and financial records',
      'Enabled scalable extension of new business modules',
      'Streamlined enterprise workflows across departments',
    ],

    tech: [
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    ],

    screenshots: [
    ],
  },
  // Business Website
  {
    slug: 'business-website',
    title: 'Business Website (Client Project)',
      description:
      'A responsive business website built for company branding and service presentation.',

    overview:
      'Developed a responsive business website using Angular for company branding and service presentation. The project focused on building a clean UI structure, reusable components, and responsive layouts for marketing content. Post-delivery, the project was transitioned to the client/team for deployment and long-term maintenance.',

    role:
      'Frontend developer responsible for building the Angular application, implementing responsive UI components, and structuring the website layout.',

      features: [
      'Responsive landing page design',
      'Company services and information sections',
      'Contact form UI implementation',
      'Mobile-first responsive layout',
    ],

    challenges: [
      'Building a consistent responsive UI across multiple screen sizes',
      'Translating design requirements into Angular components',
      'Maintaining clean and reusable component structure',
    ],

    impact: [
      'Delivered a production-ready frontend application',
      'Improved company online presentation through modern UI design',
      'Provided maintainable Angular codebase for future updates',
    ],

    tech: [
      { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
      { name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain colored' },
    ],

    links: 
      {
        live: "https://auditfixers.com/",
      }
    
  },
];
