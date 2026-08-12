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
    id: 'productos-mercaderia',
    slug: 'productos-mercaderia-y-materiales-industriales',
    category: 'destruccion',
    title: 'Productos, Mercadería y Materiales Industriales',
    shortDesc: 'Inhabilitación de inventarios obsoletos y mermas.',
    fullDesc: 'Inhabilitación irreversible de inventarios obsoletos, mermas industriales y productos defectuosos para proteger su marca y evitar su reingreso al mercado informal.',
    benefits: [
      'Inhabilitación física e irreversible de productos',
      'Protección total de la reputación de marca',
      'Control y baja de mermas e inventarios obsoletos',
      'Procesos auditables con cadena de custodia'
    ],
    imageKey: 'destruccion-residuos',
  },
  {
    id: 'destruccion-notarial',
    slug: 'destruccion-notarial-fiscal-y-aduanera',
    category: 'destruccion',
    title: 'Destrucción Notarial, Fiscal y Aduanera',
    shortDesc: 'Respaldo legal para deducciones ante SUNAT.',
    fullDesc: 'Proceso de destrucción ejecutado con supervisión e intervención de Notario Público para respaldar legalmente la baja de activos y deducciones tributarias ante SUNAT.',
    benefits: [
      'Respaldo notarial con acta e informe legal',
      'Deducción tributaria garantizada ante SUNAT',
      'Cumplimiento de normativas aduaneras y fiscales',
      'Supervisión y certificación oficial'
    ],
    imageKey: 'destruccion-documentos',
  },
  {
    id: 'destruccion-documentos',
    slug: 'destruccion-segura-de-documentos-y-archivos',
    category: 'destruccion',
    title: 'Destrucción Segura de Documentos y Archivos',
    shortDesc: 'Trituración confidencial de información sensible.',
    fullDesc: 'Trituración y destrucción física confidencial de archivos contables, expedientes y documentos corporativos sensibles bajo estricto control de cadena de custodia.',
    benefits: [
      'Trituración confidencial e irrecuperable',
      'Garantía de protección de datos sensibles',
      'Cadena de custodia desde el recojo en planta',
      'Emisión de Certificado de Destrucción Confidencial'
    ],
    imageKey: 'destruccion-documentos',
  },
  {
    id: 'equipos-tecnologicos',
    slug: 'equipos-tecnologicos-y-borrado-de-datos',
    category: 'destruccion',
    title: 'Equipos Tecnológicos y Borrado de Datos',
    shortDesc: 'Inhabilitación física de hardware y borrado digital.',
    fullDesc: 'Destrucción física de componentes de TI (servidores, discos duros, laptops) y borrado seguro de datos para evitar la filtración de información confidencial.',
    benefits: [
      'Destrucción física de discos duros y memorias',
      'Borrado seguro y permanente de datos',
      'Baja contable y física de activos tecnológicos',
      'Disposición final responsable de componentes'
    ],
    imageKey: 'destruccion-raee',
  },
  {
    id: 'textiles-calzado-uniformes',
    slug: 'textiles-calzado-y-uniformes-corporativos',
    category: 'destruccion',
    title: 'Textiles, Calzado y Uniformes Corporativos',
    shortDesc: 'Protección de marca para ropa corporativa y avíos.',
    fullDesc: 'Inhabilitación y destrucción de uniformes corporativos en desuso, indumentaria de trabajo y calzado con logos para evitar la suplantación de identidad.',
    benefits: [
      'Prevención de suplantación de identidad',
      'Inhabilitación total de logotipos y distintivos',
      'Destrucción de calzado de seguridad e indumentaria',
      'Certificado de destrucción y disposición final'
    ],
    imageKey: 'destruccion-ropa',
  },
  {
    id: 'bienes-fiscalizados-iqbf',
    slug: 'bienes-fiscalizados-iqbf-y-residuos-peligrosos',
    category: 'destruccion',
    title: 'Bienes Fiscalizados (IQBF) y Residuos Peligrosos',
    shortDesc: 'Destrucción certificada de bienes fiscalizados.',
    fullDesc: 'Manejo especializado y destrucción certificada de Insumos Químicos y Bienes Fiscalizados (IQBF) y residuos peligrosos bajo normativas de MINAM, OEFA y SUNAT.',
    benefits: [
      'Cumplimiento de normativas MINAM, OEFA y SUNAT',
      'Manejo seguro de insumos y materiales fiscalizados',
      'Transporte autorizado con permisos vigentes',
      'Emisión de certificados y manifiestos oficiales'
    ],
    imageKey: 'gestion-iqbf',
  },
  {
    id: 'sanitarios-portatiles',
    slug: 'venta-de-sanitarios-duchas-y-lavamanos-portatiles',
    category: 'otros',
    title: 'Venta de Sanitarios, Duchas y Lavamanos Portátiles',
    shortDesc: 'Módulos de higiene de alta durabilidad para obras.',
    fullDesc: 'Suministro e instalación de baños, duchas y lavamanos portátiles de alta resistencia y durabilidad para sectores de construcción, minería e industria.',
    benefits: [
      'Módulos y cabinas de alta resistencia industrial',
      'Lavamanos autónomos y duchas portátiles',
      'Soluciones diseñadas para obras y minería',
      'Asesoría técnica y soporte en campo'
    ],
    imageKey: 'sanitarios',
  },
];

export const servicesByCategory = {
  destruccion: services.filter(s => s.category === 'destruccion'),
  otros: services.filter(s => s.category === 'otros'),
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export const serviceImageMap: Record<string, string> = {};