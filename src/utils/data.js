import { Activity, DollarSign, FolderKanban, Users } from 'lucide-react';

export const metrics = [
  {
    title: 'Active users',
    value: '24.8K',
    change: 12.4,
    changeType: 'positive',
    icon: Users,
  },
  {
    title: 'Revenue',
    value: '$128K',
    change: 8.2,
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    title: 'Projects',
    value: '42',
    change: 3.1,
    changeType: 'positive',
    icon: FolderKanban,
  },
  {
    title: 'Drop-off',
    value: '6.8%',
    change: 2.6,
    changeType: 'negative',
    icon: Activity,
  },
];

export const projects = [
  {
    id: 1,
    name: 'Checkout redesign',
    category: 'Ecommerce',
    owner: 'Mia Chen',
    budget: 42000,
    progress: 84,
    status: 'healthy',
  },
  {
    id: 2,
    name: 'Mobile onboarding',
    category: 'Acquisition',
    owner: 'Noah Patel',
    budget: 28500,
    progress: 63,
    status: 'at-risk',
  },
  {
    id: 3,
    name: 'Insights portal',
    category: 'Analytics',
    owner: 'Avery Reed',
    budget: 51750,
    progress: 91,
    status: 'healthy',
  },
  {
    id: 4,
    name: 'Billing settings',
    category: 'Platform',
    owner: 'Sofia Rivera',
    budget: 19600,
    progress: 38,
    status: 'paused',
  },
];
