import { MenuItemType } from '@/lib/types/common';

export const items: MenuItemType[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Our Services',
    url: '/our-services',
  },
  {
    label: 'About Us',
    url: '/about-us',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
];

export const isActiveItem = (url: string, pathname: string) => { 
  if (url === pathname || pathname.includes(url)) return 'underline';
};
