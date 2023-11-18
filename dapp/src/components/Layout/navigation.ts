import {
  ChatBubbleBottomCenterIcon,
  Cog8ToothIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Chats', href: '/dapp', icon: ChatBubbleBottomCenterIcon, current: false },
  {
    name: 'Profile',
    href: '/dapp/profile',
    icon: UserCircleIcon,
    current: false,
  },
  { name: 'Settings', href: '/dapp/profile/edit', icon: Cog8ToothIcon, current: false },
  { name: 'Create a Genie', href: '/dapp/dev/create', icon: Cog8ToothIcon, current: false },
];

export const navigationAdmin = [
  {
    name: 'Presentation',
    href: `/admin/presentation`,
    icon: PresentationChartLineIcon,
    current: false,
  },
  {
    name: 'Fees strategies',
    href: `/admin/fees`,
    icon: ShieldCheckIcon,
    current: false,
  },
  {
    name: 'Dispute',
    href: `/admin/dispute`,
    icon: ExclamationCircleIcon,
    current: false,
  },
  {
    name: 'Web3Mail',
    href: `/admin/web3mail`,
    icon: EnvelopeIcon,
    current: false,
  },
];
