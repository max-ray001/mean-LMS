import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Books',
    url: '/book/books',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];

export const adminNavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Books',
    url: '/book/books',
    iconComponent: { name: 'cil-spreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'IssueBooks',
    url: '/issues/issuebooks',
    iconComponent: { name: 'cil-people' },

    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Admins',
    url: '/admin/admins',
    iconComponent: { name: 'cil-user' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];
