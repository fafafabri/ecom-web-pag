export interface Service {
  id: string;
  slug: string;
  category: 'destruccion' | 'otros';
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  imageKey: string;
}

export const services: Service[] = [
  {
    id: 'destruccion-documentos',
    slug: 'destruccion-de-documentos',
    category: 'destruccion',
    title: 'Destrucción Notarial de Documentos',
    shortDesc: 'Eliminación segura y certificada de archivos corporativos.',
    fullDesc: 'Somos especialistas en la destrucción de documentos. Realizamos todo el proceso desde el recojo, transporte y la destrucción bajo estricta supervisión notarial. Garantizamos la confidencialidad absoluta de su información.',
    benefits: ['Archivos públicos y privados innecesarios, obsoletos o confidenciales', 'Entrega de certificado de destrucción', 'Personal altamente capacitado', 'Eficiencia y experiencia comprobada', 'Garantía y confidencialidad absoluta', 'Contamos con permisos y autorizaciones'],
    imageKey: 'destruccion-documentos',
  },
  {
    id: 'destruccion-residuos',
    slug: 'destruccion-de-residuos',
    category: 'destruccion',
    title: 'Destrucción de Residuos',
    shortDesc: 'Gestión y destrucción de residuos sólidos no peligrosos y peligrosos.',
    fullDesc: 'Brindamos el servicio integral de destrucción de residuos sólidos, incluyendo mermas, mercadería vencida, inventarios obsoletos y materiales dados de baja. Todo bajo estricto cumplimiento normativo.',
    benefits: ['Destrucción de mermas y mercadería', 'Inventarios obsoletos y materiales dados de baja', 'Certificado de destrucción', 'Cumplimiento normativo ambiental', 'Supervisión permanente del proceso'],
    imageKey: 'destruccion-residuos',
  },
  {
    id: 'destruccion-raee',
    slug: 'destruccion-de-raee',
    category: 'destruccion',
    title: 'Destrucción de RAEE',
    shortDesc: 'Manejo adecuado de residuos de aparatos eléctricos y electrónicos.',
    fullDesc: 'Realizamos el recojo, transporte y destrucción de Residuos de Aparatos Eléctricos y Electrónicos (RAEE) cumpliendo con la normativa vigente y garantizando la disposición final adecuada.',
    benefits: ['Recojo y transporte especializado', 'Destrucción certificada de equipos electrónicos', 'Cumplimiento de normativa RAEE', 'Disposición final responsable', 'Trazabilidad completa del proceso'],
    imageKey: 'destruccion-raee',
  },
  {
    id: 'destruccion-ropa',
    slug: 'destruccion-de-ropa',
    category: 'destruccion',
    title: 'Destrucción de Ropa',
    shortDesc: 'Destrucción segura de prendas y textiles corporativos.',
    fullDesc: 'Servicio especializado en la destrucción de prendas de vestir, uniformes corporativos, textiles de marca y materiales textiles que requieren destrucción certificada para protección de marca.',
    benefits: ['Protección de marca garantizada', 'Destrucción certificada de textiles', 'Proceso supervisado y documentado', 'Disposición final ecológica', 'Confidencialidad absoluta'],
    imageKey: 'destruccion-ropa',
  },
  {
    id: 'gestion-iqbf',
    slug: 'gestion-iqbf',
    category: 'destruccion',
    title: 'Gestión IQBF',
    shortDesc: 'Manejo de insumos químicos y bienes fiscalizados.',
    fullDesc: 'Gestión integral de Insumos Químicos y Bienes Fiscalizados (IQBF) con todos los permisos y autorizaciones requeridas por ley. Recojo, transporte y disposición final segura.',
    benefits: ['Permisos y autorizaciones vigentes', 'Transporte especializado', 'Disposición final certificada', 'Cumplimiento de normativa SUNAT', 'Personal capacitado en manejo IQBF'],
    imageKey: 'gestion-iqbf',
  },
  {
    id: 'transporte-maptel',
    slug: 'transporte-maptel',
    category: 'destruccion',
    title: 'Transporte Maptel',
    shortDesc: 'Transporte especializado de materiales peligrosos y no peligrosos.',
    fullDesc: 'Contamos con una flota de camiones con todos los permisos para el transporte nacional de materiales peligrosos y no peligrosos, cumpliendo con toda la normativa vigente.',
    benefits: ['Flota propia certificada', 'Permisos de transporte nacional', 'GPS y monitoreo en tiempo real', 'Conductores capacitados', 'Seguros de carga y responsabilidad civil'],
    imageKey: 'transporte',
  },
  {
    id: 'recojo-residuos',
    slug: 'recojo-y-transporte-de-residuos',
    category: 'destruccion',
    title: 'Recojo y Transporte de Residuos',
    shortDesc: 'Recojo y transporte de residuos peligrosos y no peligrosos.',
    fullDesc: 'Servicio integral de recojo y transporte de residuos peligrosos y no peligrosos. Contamos con vehículos especializados y personal altamente capacitado para garantizar un manejo seguro.',
    benefits: ['Residuos peligrosos y no peligrosos', 'Vehículos especializados', 'Personal con equipos de protección', 'Manifiestos de manejo de residuos', 'Cobertura en Lima y provincias'],
    imageKey: 'recojo-residuos',
  },
  {
    id: 'disposicion-final',
    slug: 'disposicion-final',
    category: 'destruccion',
    title: 'Disposición Final',
    shortDesc: 'Disposición final de residuos en rellenos autorizados.',
    fullDesc: 'Garantizamos la disposición final adecuada de residuos en rellenos sanitarios y de seguridad autorizados, cumpliendo con toda la normativa ambiental vigente.',
    benefits: ['Rellenos sanitarios autorizados', 'Certificados de disposición final', 'Trazabilidad completa', 'Cumplimiento normativo', 'Reportes mensuales de gestión'],
    imageKey: 'disposicion-final',
  },
  {
    id: 'manejo-raee',
    slug: 'manejo-adecuado-de-raee',
    category: 'destruccion',
    title: 'Manejo Adecuado de RAEE',
    shortDesc: 'Gestión responsable de residuos electrónicos.',
    fullDesc: 'Programa integral de manejo de RAEE que incluye recolección, segregación, desmantelamiento y reciclaje de componentes, maximizando la recuperación de materiales valiosos.',
    benefits: ['Recuperación de materiales valiosos', 'Desmantelamiento controlado', 'Reciclaje certificado', 'Reducción de impacto ambiental', 'Informes de gestión detallados'],
    imageKey: 'destruccion-raee',
  },
  // Categoría 2 - Otros Servicios
  {
    id: 'sanitarios-portatiles',
    slug: 'venta-sanitarios-portatiles',
    category: 'otros',
    title: 'Venta de Sanitarios Portátiles',
    shortDesc: 'Sanitarios portátiles para eventos y obras de construcción.',
    fullDesc: 'Venta y alquiler de sanitarios portátiles de alta calidad para eventos, obras de construcción y proyectos temporales. Incluimos servicio de mantenimiento y limpieza periódica.',
    benefits: ['Sanitarios nuevos y de calidad', 'Servicio de mantenimiento incluido', 'Entrega e instalación', 'Modelos estándar y premium', 'Atención a nivel nacional'],
    imageKey: 'sanitarios',
  },
  {
    id: 'trampas-grasa',
    slug: 'limpieza-trampas-de-grasa',
    category: 'otros',
    title: 'Limpieza de Trampas de Grasa',
    shortDesc: 'Limpieza profesional de trampas de grasa industriales.',
    fullDesc: 'Servicio especializado de limpieza y mantenimiento de trampas de grasa para restaurantes, hoteles, centros comerciales e industrias alimentarias.',
    benefits: ['Equipos de succión especializados', 'Cumplimiento de normativa sanitaria', 'Servicio programado y de emergencia', 'Certificado de limpieza', 'Disposición adecuada de residuos'],
    imageKey: 'trampas-grasa',
  },
  {
    id: 'pozos-septicos',
    slug: 'limpieza-pozos-septicos',
    category: 'otros',
    title: 'Limpieza de Pozos Sépticos',
    shortDesc: 'Mantenimiento y limpieza de pozos sépticos.',
    fullDesc: 'Servicio profesional de limpieza, mantenimiento y desinfección de pozos sépticos con equipos de succión de alta capacidad y personal especializado.',
    benefits: ['Equipos de alta capacidad', 'Personal especializado', 'Servicio 24/7 para emergencias', 'Desinfección incluida', 'Cobertura Lima y provincias'],
    imageKey: 'pozos-septicos',
  },
  {
    id: 'limpieza-industrial',
    slug: 'limpieza-industrial',
    category: 'otros',
    title: 'Limpieza Industrial',
    shortDesc: 'Limpieza integral de plantas y facilidades industriales.',
    fullDesc: 'Servicio completo de limpieza industrial para plantas de producción, almacenes, oficinas corporativas y áreas comunes. Utilizamos equipos y productos especializados.',
    benefits: ['Limpieza de plantas de producción', 'Desinfección de áreas industriales', 'Equipos especializados', 'Personal capacitado con EPP', 'Planes de limpieza personalizados'],
    imageKey: 'limpieza-industrial',
  },
  {
    id: 'asesorias-ambientales',
    slug: 'asesorias-ambientales',
    category: 'otros',
    title: 'Asesorías Ambientales',
    shortDesc: 'Consultoría ambiental para empresas e industrias.',
    fullDesc: 'Brindamos asesoría ambiental integral para el cumplimiento de la normativa vigente, elaboración de planes de manejo ambiental y gestión de residuos sólidos.',
    benefits: ['Elaboración de planes ambientales', 'Auditorías ambientales', 'Gestión de permisos y licencias', 'Capacitación al personal', 'Seguimiento y monitoreo continuo'],
    imageKey: 'asesorias',
  },
  {
    id: 'acondicionamiento-materiales',
    slug: 'acondicionamiento-de-materiales',
    category: 'otros',
    title: 'Acondicionamiento de Materiales',
    shortDesc: 'Acondicionamiento y segregación de materiales reciclables.',
    fullDesc: 'Servicio de acondicionamiento, segregación y preparación de materiales reciclables para su posterior comercialización o disposición final adecuada.',
    benefits: ['Segregación especializada', 'Maximización de reciclaje', 'Reducción de costos de disposición', 'Informes de valorización', 'Personal capacitado'],
    imageKey: 'destruccion-residuos',
  },
  {
    id: 'carga-transporte',
    slug: 'carga-y-transporte',
    category: 'otros',
    title: 'Carga y Transporte',
    shortDesc: 'Servicios de carga y transporte de materiales.',
    fullDesc: 'Servicio integral de carga, descarga y transporte de materiales con equipos especializados y personal capacitado para todo tipo de materiales.',
    benefits: ['Equipos de carga especializados', 'Montacargas y grúas disponibles', 'Personal capacitado', 'Seguros de carga', 'Cobertura nacional'],
    imageKey: 'transporte',
  },
  {
    id: 'biodigestores',
    slug: 'limpieza-de-biodigestores',
    category: 'otros',
    title: 'Limpieza de Biodigestores',
    shortDesc: 'Mantenimiento especializado de biodigestores.',
    fullDesc: 'Servicio profesional de limpieza y mantenimiento de biodigestores para garantizar su óptimo funcionamiento y prolongar su vida útil.',
    benefits: ['Equipos especializados', 'Técnicos certificados', 'Mantenimiento preventivo y correctivo', 'Disposición adecuada de lodos', 'Informes técnicos detallados'],
    imageKey: 'biodigestores',
  },
  {
    id: 'comercializacion-materiales',
    slug: 'comercializacion-de-materiales',
    category: 'otros',
    title: 'Comercialización de Materiales',
    shortDesc: 'Compra y venta de materiales reciclables.',
    fullDesc: 'Comercialización de materiales reciclables recuperados de los procesos de gestión de residuos. Ofrecemos los mejores precios del mercado y gestión transparente.',
    benefits: ['Mejores precios del mercado', 'Gestión transparente', 'Certificados de reciclaje', 'Variedad de materiales', 'Reportes de comercialización'],
    imageKey: 'destruccion-residuos',
  },
];

export const servicesByCategory = {
  destruccion: services.filter(s => s.category === 'destruccion'),
  otros: services.filter(s => s.category === 'otros'),
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

// Image map - maps imageKey to imported images
export const serviceImageMap: Record<string, string> = {};
