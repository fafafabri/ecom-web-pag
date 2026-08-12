export interface MenuItem {
  title: string;
  slug: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  services: MenuItem[];
}

export const mainNav: NavLink[] = [
  { label: 'INICIO', path: '/' },
  { label: 'CONÓCENOS', path: '/empresa' },
  { label: 'HABLEMOS', path: '/contacto' },
];

export const destruccionMenu: MenuItem[] = [
  {
    title: 'Destrucción de Productos, Mercadería y Materiales Industriales',
    slug: 'destruccion-productos-mercaderia-materiales-industriales',
  },
  {
    title: 'Destrucción Notarial, Fiscal y Aduanera',
    slug: 'destruccion-notarial-fiscal-aduanera',
  },
  {
    title: 'Destrucción Segura de Documentos y Archivos',
    slug: 'destruccion-segura-documentos-archivos',
  },
  {
    title: 'Destrucción de Equipos Tecnológicos y Borrado de Datos',
    slug: 'destruccion-equipos-tecnologicos-borrado-datos',
  },
  {
    title: 'Destrucción de Textiles, Calzado y Uniformes Corporativos',
    slug: 'destruccion-textiles-calzado-uniformes-corporativos',
  },
  {
    title: 'Destrucción de Bienes Fiscalizados (IQBF) y Residuos Peligrosos',
    slug: 'destruccion-bienes-fiscalizados-residuos-peligrosos',
  },
];

export const sanitariasMenu: MenuItem[] = [
  {
    title: 'Venta de Baños, Duchas y Lavamanos Portátiles',
    slug: 'venta-banos-duchas-lavamanos-portatiles',
  },
];

// Compatibilidad en caso de que Navbar importe la variable antigua
export const otrosMenu: MenuItem[] = sanitariasMenu;

export const menuCategories: MenuCategory[] = [
  {
    id: 'destruccion',
    name: 'Destrucción y Disposición',
    services: destruccionMenu,
  },
  {
    id: 'sanitarias',
    name: 'Soluciones Sanitarias',
    services: sanitariasMenu,
  },
];