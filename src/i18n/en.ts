export default {
  languageName: 'English',

  metadata: {
    title: 'Menem Labs — Software that runs your business',
    description: 'Menem Labs designs, builds and supports custom business systems, web platforms and mobile apps.',
  },

  nav: {
    work: 'Our work',
    contact: 'Contact',
    talkToUs: 'Talk to us',
    switchLanguage: 'العربية',
    switchLanguageLabel: 'اعرض الموقع بالعربية',
  },

  hero: {
    tagline: 'Menem Labs',
    title: 'We build the software that runs your business',
    subtitle: 'Custom business systems, web platforms and mobile apps — designed, built and supported by one team.',
    primaryAction: 'Talk to us',
  },

  work: {
    tagline: 'Our work',
    projects: [
      {
        id: 'vetdiwan',
        title: 'VetDiwan',
        subtitle: 'Veterinary clinic management system',
        description:
          'VetDiwan runs a veterinary clinic from the front desk to the invoice — in Arabic and English, with a workspace for every role in the clinic.',
        action: 'Request a demo',
        imageAlt: 'VetDiwan logo',
        items: [
          {
            title: 'Front desk and appointments',
            description: 'Bookings, check-in and an appointment board for the day.',
          },
          { title: 'Pets and owners', description: 'A record for every pet and its owner.' },
          {
            title: 'Clinical care and diagnostics',
            description: 'Clinical intake, treatment and diagnostics in one place.',
          },
          { title: 'Pharmacy and stock', description: 'Medicines and supplies tracked as they are used.' },
          { title: 'Billing', description: 'Treatment estimates, invoices and payments, backed by full accounting.' },
          {
            title: 'A workspace per role',
            description: 'Reception, veterinarians and management each see what they need.',
          },
        ],
      },
      {
        id: 'cooperative',
        title: 'Accounts and projects for a construction cooperative',
        subtitle: 'Desktop system for the Production Cooperative Society for Construction and Reconstruction, Abnoub',
        description:
          "A Windows desktop application in Arabic that runs the society's accounts and construction projects, with several computers working on one shared database.",
        action: 'Build something similar',
        imageAlt: 'Construction projects',
        items: [
          {
            title: 'Accounts and journal entries',
            description: 'A chart of accounts, debits and credits, and balances.',
          },
          {
            title: 'Construction projects',
            description: "Each project's value, the society's share, taxes and progress billing.",
          },
          { title: 'Loans', description: 'Loans and their repayments.' },
          { title: 'Payments and receipts', description: 'Printed receipts with the amount written out in words.' },
          { title: 'Reports', description: 'Account statements and journal entries exported to Word and PDF.' },
          { title: 'Several workstations', description: 'Every computer in the office works on the same data.' },
        ],
      },
    ],
  },

  contact: {
    title: 'Have a project in mind?',
    subtitle: 'Tell us what you need and we will reply by email.',
    copy: 'Copy',
    copied: 'Copied',
    openMailApp: 'Email app',
    openGmail: 'Gmail',
  },

  footer: {
    contactTitle: 'Contact',
    pagesTitle: 'Menem Labs',
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'Sorry, we could not find this page.',
    back: 'Back to homepage',
  },
};
