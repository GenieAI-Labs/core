import { UserCircleIcon } from '@heroicons/react/24/outline';

export const navigation = () => {
  const config = [
    {
      name: 'Your profile',
      href: '/dapp/profile/edit',
      icon: UserCircleIcon,
      current: false,
      completitonKey: 'userDetails',
    },
  ];

  if (process.env.NEXT_PUBLIC_ACTIVE_WEB3MAIL == 'false') {
    config.splice(2, 1);
  }

  return config;
};
