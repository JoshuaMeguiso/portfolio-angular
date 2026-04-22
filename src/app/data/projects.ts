import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  // Inventory
  {
    slug: 'inventory-system',
    title: 'Inventory Management System',
    description:
      'A configurable inventory system supporting multi-unit stock tracking, stock movement, and client-specific reporting requirements.',

    overview:
      'Built a full-stack inventory management system designed to handle real-world warehouse operations including stock in/out transactions, unit of measure conversions, and dynamic reporting. The system was designed to be highly customizable per client workflow requirements.',

    role: 'Full-stack developer responsible for implementing stock movement logic, unit conversion handling, reporting modules, and REST API development.',

    features: [
      'Stock in/out transaction tracking with audit history',
      'Multi-Unit of Measure (UoM) conversion and normalization',
      'Beginning inventory and physical count reconciliation',
      'Dynamic client-specific reporting structure',
      'Real-time stock quantity computation',
      'Role-based access for inventory operations',
    ],

    challenges: [
      'Handling multiple Unit of Measure (UoM) conversions within a single stock item while maintaining accuracy across transactions',
      'Reconciling beginning physical count with live stock movements without data inconsistency',
      'Designing flexible reporting logic adaptable to different client requirements without schema changes',
    ],

    impact: [
      'Improved inventory accuracy by reducing manual reconciliation errors',
      'Enabled scalable stock tracking across multiple warehouses',
      'Reduced time required for generating inventory reports through automated aggregation logic',
    ],

    tech: [
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    ],
  },
  // Payroll
  {
    slug: 'payroll-system',
    title: 'Payroll Management System',
    description:
      'A payroll processing system supporting employee attendance integration, deductions, and government contributions.',

    overview:
      'Developed a payroll system that automates salary computation based on attendance, allowances, deductions, and statutory contributions. The system supports dynamic payroll structures per employee type.',

    role: 'Full-stack developer responsible for payroll computation logic, UI dashboards, and backend salary computation services.',

    features: [
      'Automated salary computation based on attendance data',
      'Dynamic allowance and deduction management',
      'Government contribution calculations (SSS, PhilHealth, Pag-IBIG)',
      'Payroll period generation and locking system',
      'Exportable payroll summaries',
    ],

    challenges: [
      'Ensuring correctness of payroll computation across varying attendance rules',
      'Handling dynamic deduction structures per employee category',
      'Maintaining consistency between frontend calculations and backend validation',
    ],

    impact: [
      'Reduced payroll processing time through automation',
      'Improved accuracy of salary computations',
      'Enabled scalable payroll processing for multiple employee groups',
    ],

    tech: [
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    ],
  },
  // Accounting
  {
    slug: 'accounting-system',
    title: 'Accounting System (Internal Module Exposure)',
    description:
      'A supporting module within an enterprise system focused on financial tracking, reporting, and transaction categorization.',

    overview:
      'Worked on an internal accounting-related module involving financial data handling, report generation, and integration with inventory and payroll systems. Focus was on ensuring consistency of financial records across operational modules.',

    role: 'Full-stack developer with exposure to financial data workflows, assisting in UI development and backend data structuring for accounting-related reports.',

    features: [
      'Financial transaction categorization support',
      'Integration with inventory and payroll data sources',
      'Basic financial reporting views',
      'Data consistency validation across modules',
      'Report aggregation for accounting summaries',
    ],

    challenges: [
      'Ensuring consistency of financial data across multiple system modules (inventory and payroll)',
      'Understanding accounting workflow structure and mapping it to system design',
      'Handling relational dependencies between operational and financial records',
    ],

    impact: [
      'Improved visibility of financial data across system modules',
      'Helped align operational data (inventory/payroll) with accounting summaries',
      'Contributed to more structured financial reporting workflows',
    ],

    tech: [
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    ],
  },
  // Business Website
  {
    slug: 'business-website',
    title: 'Business Website (Internal Project)',
    description:
      'A responsive business landing page designed for company presentation and service showcasing.',

    overview:
      'Developed a static business website intended for company branding and service presentation. Focused on responsive UI and clean layout structure.',

    role: 'Frontend developer responsible for layout design, responsive implementation, and UI structuring.',

    features: [
      'Responsive landing page design',
      'Service and company information sections',
      'Contact form UI integration',
      'Mobile-first layout approach',
    ],

    challenges: [
      'Ensuring consistent responsive layout across devices',
      'Maintaining visual hierarchy for marketing content',
      'Aligning UI design with business branding requirements',
    ],

    impact: [
      'Improved company presentation readiness',
      'Provided reusable UI structure for future marketing pages',
    ],

    tech: [
      { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
      { name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain colored' },
    ],
  },
];
