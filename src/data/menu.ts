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

export const destruccionMenu: MenuItem[] = [
  { title: 'Destrucción Total Brand', slug: 'destruccion-total-brand' },
  { title: 'Destrucción Vencimientos', slug: 'destruccion-vencimientos' },
  { title: 'Mercancía en Tránsito', slug: 'mercancia-en-transito' },
  { title: 'Archivos y Documentos', slug: 'archivos-y-documentos' },
  { title: 'Destrucción de Activos Fijos y Chatarra', slug: 'destruccion-activos-fijos-chatarra' },
  { title: 'Devoluciones de Compra', slug: 'devoluciones-de-compra' },
  { title: 'Textiles, Uniformes y EPPs', slug: 'textiles-uniformes-epps' },
  { title: 'Falsificación y Contrabando', slug: 'falsificacion-contrabando' },
  { title: 'Devoluciones de Almacén', slug: 'devoluciones-de-almacen' },
  { title: 'Reproceso de Mercancía', slug: 'reproceso-de-mercancia' },
  { title: 'Merma por Fabricación', slug: 'merma-por-fabricacion' },
  { title: 'Merma por Importación', slug: 'merma-por-importacion' },
];

export const otrosMenu: MenuItem[] = [
  { title: 'Limpieza de Trampas de Grasa', slug: 'limpieza-de-trampas-de-grasa' },
  { title: 'Limpieza de Pozo Séptico', slug: 'limpieza-de-pozo-septico' },
  { title: 'Limpieza y Desinfección de Cisternas y Tanques de Agua', slug: 'limpieza-cisternas-tanques' },
  { title: 'Limpieza Industrial', slug: 'limpieza-industrial' },
  { title: 'Comercialización de Residuos Aprovechables', slug: 'comercializacion-residuos-aprovechables' },
  { title: 'Comercialización de Activos Fijos y Chatarra', slug: 'comercializacion-activos-fijos-chatarra' },
  { title: 'Mantenimiento de PTARD', slug: 'mantenimiento-de-ptard' },
];
