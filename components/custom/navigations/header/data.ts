import { MenuItemType } from '@/lib/types/common';

export const items: MenuItemType[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '#about',
  },
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
];

export const isActiveItem = (url: string, pathname: string) => { 
  if (url === pathname || pathname.includes(url)) return 'underline';
};
