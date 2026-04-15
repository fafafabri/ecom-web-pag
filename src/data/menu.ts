import { servicesByCategory } from '@/data/services';

export interface MenuItem {
  title: string;
  slug: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export const mainNav: NavLink[] = [
  { label: 'INICIO', path: '/' },
  { label: 'CONÓCENOS', path: '/empresa' },
  { label: 'HABLEMOS', path: '/contacto' },
];

export const destruccionMenu: MenuItem[] = servicesByCategory.destruccion.map(service => ({
  title: service.title,
  slug: service.slug,
}));

export const otrosMenu: MenuItem[] = servicesByCategory.otros.map(service => ({
  title: service.title,
  slug: service.slug,
}));
