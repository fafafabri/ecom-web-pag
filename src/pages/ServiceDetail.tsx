import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, MessageCircle, ArrowRight, ShieldCheck, Truck, Recycle, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { getServiceBySlug, servicesByCategory, Service } from '@/data/services';
import { serviceImages } from '@/data/serviceImages';
import NotFound from './NotFound';

const WHATSAPP_NUMBER = '51902667683';

// 1. DICCIONARIO DE CONTENIDOS EXTENDIDOS
const extendedServiceContent: Record<string, any> = {
  
  // SERVICIO 1
  'destruccion-productos-mercaderia-materiales-industriales': {
    heroTitle: 'Destrucción de Productos, Mercadería Vencida y Materiales Industriales',
    heroSubtitle: 'Soluciones seguras para la eliminación de inventarios obsoletos, mermas y lotes defectuosos. Inhabilitamos su mercadería para proteger el prestigio de su marca, garantizando una disposición final responsable y certificada.',
    ctaButton: 'Cotizar Destrucción de Mercadería',
    whatsappMessage: 'Hola, estoy en la web de ECO M y deseo cotizar la destrucción de productos y mercadería.',
    section2Intro: 'Gestionamos la inhabilitación física de bienes que han perdido su valor comercial, evitando su ingreso al mercado informal y protegiendo tanto a los consumidores como a su empresa.',
    products: [
      { title: 'Productos de Consumo y Cuidado Personal', desc: 'Cosméticos, champús, cremas, perfumes, artículos de belleza y cuidado personal con fallas de calidad, empaques dañados o fechas expiradas.' },
      { title: 'Industria Alimentaria y Farmacéutica', desc: 'Lotes de alimentos y bebidas vencidas, suplementos, insumos médicos y productos rechazados por control de calidad.' },
      { title: 'Materiales Industriales y Mermas', desc: 'Repuestos, autopartes, componentes plásticos, empaques devueltos, envases con logo impreso y saldos de producción.' },
      { title: 'Mercadería General y Retail', desc: 'Lentes de sol, juguetes, artículos de hogar, productos falsificados (incautaciones) o mercancía en estado de abandono legal.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: Truck, title: '1. Recolección y Logística Inversa', desc: 'Retiramos la mercadería directamente desde sus almacenes, centros de distribución o aduanas, utilizando vehículos adecuados y personal homologado para cargas de cualquier volumen.' },
      { icon: ShieldCheck, title: '2. Transporte Seguro y Custodia', desc: 'Realizamos el traslado directo y monitoreado hacia nuestra planta de operaciones, garantizando que ningún producto se extravíe o desvíe durante el trayecto.' },
      { icon: Recycle, title: '3. Proceso de Destrucción y Desnaturalización', desc: 'Aplicamos procesos mecánicos (trituración, compactación o corte) que inutilizan por completo el producto y su empaque original, haciéndolo irreconocible e inservible.' },
      { icon: FileCheck, title: '4. Disposición Final y Certificación', desc: 'Los residuos generados se valorizan (reciclan) o se disponen en rellenos autorizados de forma ecológica. Emitimos el Certificado de Destrucción y Disposición, documento clave para sus auditorías.' }
    ],
    whyTitle: '¿Por qué confiar en ECO M para sus inventarios?',
    whyPoints: [
      { title: 'Protección de Marca y Reputación', desc: 'Eliminamos el riesgo de que productos defectuosos o vencidos lleguen al mercado negro y dañen la imagen de su empresa.' },
      { title: 'Liberación de Espacio y Ahorro', desc: 'Le ayudamos a despejar rápidamente sus almacenes de inventarios inmovilizados, reduciendo sus altos costos logísticos.' },
      { title: 'Sustento Legal y Transparencia', desc: 'Nuestros procesos respaldan documentariamente la baja de sus activos frente a inspecciones y controles de calidad.' }
    ],
    footerText: '¿Necesita dar de baja un lote de productos, destruir mermas o liberar espacio en su almacén de forma inmediata? Un especialista de ECO M está listo para asesorarle.'
  },

  // SERVICIO 2
  'destruccion-notarial-fiscal-aduanera': {
    heroTitle: 'Destrucción Notarial, Fiscal y Aduanera (Baja de Inventarios)',
    heroSubtitle: 'Respaldo legal absoluto para la deducción de impuestos y el sustento de gastos ante SUNAT. Realizamos la inhabilitación de mermas y desmedros con presencia de Notario Público, garantizando el cumplimiento tributario y ambiental de su empresa.',
    ctaButton: 'Solicitar Asesoría Fiscal',
    whatsappMessage: 'Hola, estoy en la web de ECO M y necesito asesoría para destrucción notarial y baja de inventarios ante SUNAT.',
    section2Intro: 'Ejecutamos procesos de destrucción bajo los estrictos lineamientos de la Ley del Impuesto a la Renta y la Ley General de Aduanas, brindándole a su área contable la documentación probatoria requerida.',
    products: [
      { title: 'Baja de Desmedros (SUNAT)', desc: 'Destrucción de mercadería que ha perdido su calidad o valor comercial (obsoleta, vencida o deteriorada) con presencia notarial, requisito indispensable para que su empresa deduzca el gasto en el Impuesto a la Renta.' },
      { title: 'Destrucción Notarial de Mermas', desc: 'Validación legal para las pérdidas cuantitativas de insumos generadas durante su proceso productivo o industrial.' },
      { title: 'Destrucción Fiscal y Aduanera', desc: 'Disposición de mercancías en situación de abandono legal, comiso administrativo o restringidas, bajo la supervisión directa de autoridades aduaneras.' },
      { title: 'Baja de Activos Fijos', desc: 'Inhabilitación y destrucción de maquinaria, mobiliario o equipos depreciados que deben ser retirados de sus libros contables con el debido sustento notarial.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: Truck, title: '1. Coordinación Logística y Legal', desc: 'Asesoramos a su equipo contable, agendamos el recojo de la mercadería y coordinamos la presencia de nuestro Notario Público aliado (o del funcionario de SUNAT asignado) para el día exacto de la operación.' },
      { icon: ShieldCheck, title: '2. Transporte Custodiado', desc: 'Trasladamos los inventarios obsoletos desde su centro de distribución hasta nuestra planta autorizada, bajo estrictos protocolos de seguridad y trazabilidad.' },
      { icon: Recycle, title: '3. Destrucción Presencial (Acto Notarial)', desc: 'Sometemos los bienes a trituración o compactación presencial. El Notario, auditor o representante de su empresa verifica in situ que la mercadería quede totalmente inhabilitada y sin valor comercial.' },
      { icon: FileCheck, title: '4. Emisión de Acta y Certificado', desc: 'Le entregamos el Acta Notarial de Destrucción (documento probatorio para SUNAT) junto con el Certificado de Disposición Final (respaldo ambiental para el MINAM/OEFA), cerrando su ciclo legal de manera impecable.' }
    ],
    whyTitle: '¿Por qué confiar en ECO M para sus procesos tributarios?',
    whyPoints: [
      { title: 'Beneficio Tributario Garantizado', desc: 'Entregamos el sustento exacto que su área financiera necesita para deducir gastos y evitar contingencias o multas en auditorías de SUNAT.' },
      { title: 'Proceso 100% Auditable y Transparente', desc: 'Ofrecemos registro fotográfico y en video de toda la operación para el respaldo y archivo de sus inspectores de calidad.' },
      { title: 'Alianzas Notariales Estratégicas', desc: 'Trabajamos con Notarios Públicos especialistas en procesos de destrucción industrial, agilizando los trámites y garantizando que el acta cumpla con todos los requisitos de ley.' }
    ],
    footerText: '¿Tiene un cierre contable próximo y necesita dar de baja un lote de mercadería ante SUNAT sin contratiempos? Nuestro equipo legal y operativo está listo para asistirle hoy mismo.'
  },

  // SERVICIO 3
  'destruccion-segura-documentos-archivos': {
    heroTitle: 'Destrucción Segura de Documentos y Archivos Confidenciales',
    heroSubtitle: 'Protegemos el activo más valioso de su empresa: la información. Garantizamos la trituración confidencial e irrecuperable de sus archivos físicos y contables, en estricto cumplimiento con la Ley de Protección de Datos Personales.',
    ctaButton: 'Cotizar Destrucción de Archivos',
    whatsappMessage: 'Hola, estoy en la web de ECO M y solicito cotización para la trituración confidencial de archivos.',
    section2Intro: 'Evite el espionaje corporativo y las multas legales. Nos encargamos de la eliminación definitiva de cualquier soporte físico que contenga información sensible de su empresa, empleados o clientes.',
    products: [
      { title: 'Archivos Contables y Financieros', desc: 'Facturas, balances, cheques anulados, estados de cuenta, declaraciones de impuestos y reportes de auditoría.' },
      { title: 'Documentación Legal y de RR.HH.', desc: 'Contratos caducados, planillas de sueldos, legajos de personal, currículums, acuerdos de confidencialidad e historias clínicas (ideal para el sector salud).' },
      { title: 'Información Estratégica y Comercial', desc: 'Bases de datos impresas, estrategias de marketing, planos, licitaciones, listados de clientes y presupuestos.' },
      { title: 'Soportes Magnéticos y Ópticos Menores', desc: 'Destrucción de CD-ROMs, DVDs, cintas de respaldo (tapes), fotochecks, tarjetas de crédito y tarjetas de identificación corporativa.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: Truck, title: '1. Recolección Confidencial', desc: 'Nuestro personal debidamente identificado y homologado retira las cajas de documentos o archivos directamente de sus oficinas, garantizando que nadie externo tenga acceso a la información.' },
      { icon: ShieldCheck, title: '2. Transporte en Cadena de Custodia', desc: 'Trasladamos sus archivos en unidades cerradas y monitoreadas directamente hasta nuestra planta, asegurando una custodia ininterrumpida desde su puerta hasta la zona de trituración.' },
      { icon: Recycle, title: '3. Trituración de Alta Seguridad', desc: 'Sometemos los documentos a molinos trituradores industriales de corte cruzado (cross-cut), reduciendo el papel a partículas diminutas (confeti) que hacen humanamente imposible su reconstrucción o lectura.' },
      { icon: FileCheck, title: '4. Reciclaje y Emisión de Certificado', desc: 'Fomentamos la economía circular enviando el papel triturado a plantas de reciclaje de cartón. Finalmente, le entregamos su Certificado de Destrucción Confidencial, respaldando su cumplimiento normativo.' }
    ],
    whyTitle: '¿Por qué confiar sus archivos a ECO M?',
    whyPoints: [
      { title: 'Cumplimiento Legal Total', desc: 'Operamos bajo los lineamientos de la Ley N° 29733 (Ley de Protección de Datos Personales), evitando multas severas para su organización.' },
      { title: 'Recuperación de Espacio Valioso', desc: 'Libere oficinas o almacenes enteros que hoy están ocupados por cajas de papel acumulado durante años y reduzca sus costos de almacenaje.' },
      { title: 'Seguridad y Discreción Absoluta', desc: 'Procesos blindados y auditables; sus documentos pasan del contenedor a la trituradora sin que nadie lea una sola página.' }
    ],
    footerText: '¿Necesita depurar su archivo central, destruir planillas antiguas o deshacerse de tarjetas bancarias con máxima seguridad? Nuestro equipo de confidencialidad le espera.'
  },

  // SERVICIO 4
  'destruccion-equipos-tecnologicos-borrado-datos': {
    heroTitle: 'Destrucción de Equipos Tecnológicos, AEE y Borrado Seguro de Datos',
    heroSubtitle: 'Garantizamos la inhabilitación física de su hardware y la eliminación irreversible de su información confidencial. Protegemos los datos de su empresa y gestionamos los componentes resultantes bajo la estricta normativa ambiental peruana.',
    ctaButton: 'Cotizar Destrucción y Borrado',
    whatsappMessage: 'Hola, estoy en la web de ECO M y deseo cotizar la destrucción de equipos tecnológicos y borrado de datos.',
    section2Intro: 'Abarcamos la destrucción integral de todo tipo de Aparatos Eléctricos y Electrónicos (AEE) u obsolescencia tecnológica para evitar fugas de información y proteger su marca.',
    products: [
      { title: 'Equipos Informáticos e Infraestructura TI', desc: 'Computadoras de escritorio (CPU), laptops, servidores, discos duros (HDD y SSD), memorias USB, tarjetas madre y routers.' },
      { title: 'Dispositivos Móviles y Telecomunicaciones', desc: 'Celulares corporativos (smartphones), tablets, iPads, radios de comunicación, teléfonos IP y centrales telefónicas.' },
      { title: 'Periféricos y Accesorios', desc: 'Monitores, pantallas, impresoras, fotocopiadoras, teclados, mouses, audífonos (headsets), terminales de pago (POS) y relojes biométricos.' },
      { title: 'Almacenamiento de Energía', desc: 'Baterías externas (power banks), UPS, cargadores, fuentes de poder y cables.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: Truck, title: '1. Recolección y Custodia Segura', desc: 'Retiramos los equipos directamente en sus instalaciones o almacenes utilizando furgones cerrados y personal capacitado, garantizando la trazabilidad desde el primer minuto.' },
      { icon: ShieldCheck, title: '2. Borrado Lógico de Datos (Destrucción Digital)', desc: 'A solicitud del cliente, aplicamos un borrado seguro de la información contenida en los discos y memorias antes de su destrucción física, asegurando que los datos confidenciales sean 100% irrecuperables.' },
      { icon: Recycle, title: '3. Destrucción Física y Trituración', desc: 'Sometemos los equipos tecnológicos a procesos mecánicos de trituración o inhabilitación total. El hardware pierde su forma original, evitando que piezas con su marca o información terminen en el mercado negro.' },
      { icon: FileCheck, title: '4. Manejo de RAEE y Disposición Final', desc: 'Los fragmentos resultantes de la destrucción son gestionados correctamente como Residuos de Aparatos Eléctricos y Electrónicos (RAEE). Emitimos el Certificado de Destrucción y Disposición Final, válido ante las autoridades ambientales (MINAM/OEFA).' }
    ],
    whyTitle: '¿Por qué confiar en ECO M para sus activos tecnológicos?',
    whyPoints: [
      { title: 'Cero Riesgo de Fuga de Información', desc: 'Cumplimiento total para bancos, clínicas, aseguradoras y entidades estatales.' },
      { title: 'Protección de Marca', desc: 'Evitamos el mercado secundario no autorizado de sus equipos dados de baja.' },
      { title: 'Cumplimiento Normativo', desc: 'Procesos alineados a la Ley de Protección de Datos Personales y la Ley de Gestión de Residuos Sólidos.' }
    ],
    footerText: '¿Tiene un inventario tecnológico obsoleto o requiere destruir discos duros con urgencia? Un asesor de ECO M está listo para ayudarle.'
  },

  // SERVICIO 5
  'destruccion-textiles-calzado-uniformes-corporativos': {
    heroTitle: 'Destrucción de Textiles, Calzado y Uniformes Corporativos',
    heroSubtitle: 'Proteja la identidad de su empresa y evite suplantaciones o fraudes. Inhabilitamos de forma segura prendas institucionales, calzado de seguridad, avíos y saldos textiles para blindar el prestigio de su marca.',
    ctaButton: 'Cotizar Destrucción Textil',
    whatsappMessage: 'Hola, estoy en la web de ECO M y quiero cotizar la inhabilitación de textiles y uniformes corporativos.',
    section2Intro: 'Evite que su ropa corporativa o productos defectuosos terminen en el mercado negro. Nos encargamos de la eliminación de cualquier elemento que contenga su logotipo, colores institucionales o propiedad intelectual.',
    products: [
      { title: 'Uniformes e Indumentaria Institucional', desc: 'Ropa de trabajo, camisas bordadas, chalecos reflectivos, casacas, mamelucos y uniformes de seguridad privada o fuerzas del orden.' },
      { title: 'Calzado Industrial y de Retail', desc: 'Botas de seguridad (EPP) dadas de baja, zapatos corporativos, zapatillas, y lotes de calzado con defectos de fábrica o falsificados (incautaciones).' },
      { title: 'Insumos, Avíos y Retazos de Producción', desc: 'Etiquetas tejidas o estampadas, pasadores personalizados, suelas de marca, cierres, botones, parches con logos y rollos de tela con estampados registrados.' },
      { title: 'Saldos de Campaña y Merchandising', desc: 'Ropa de temporadas pasadas no vendida, mochilas corporativas, gorras, maletines y artículos promocionales descontinuados.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: Truck, title: '1. Recolección Segura de Lotes', desc: 'Retiramos los lotes de prendas, calzado o avíos directamente desde sus almacenes, fábricas o tiendas, garantizando un control de inventario estricto desde el punto de origen.' },
      { icon: ShieldCheck, title: '2. Transporte en Cadena de Custodia', desc: 'Realizamos el traslado hacia nuestra planta de operaciones en vehículos cerrados, evitando cualquier riesgo de sustracción, pérdida o desvío de los artículos en la ruta.' },
      { icon: Recycle, title: '3. Destrucción Mecánica (Corte y Trituración)', desc: 'Empleamos guillotinas industriales y trituradoras de alta potencia para cortar, deshilachar los textiles y trozar el calzado. Inhabilitamos de raíz cualquier logo o distintivo, haciendo imposible su uso o comercialización.' },
      { icon: FileCheck, title: '4. Disposición Final y Certificación', desc: 'Los residuos inhabilitados se gestionan ambientalmente (destinándolos a reciclaje textil para trapos industriales o rellenos cuando es viable). Finalizamos entregándole su Certificado de Destrucción respaldado documentariamente.' }
    ],
    whyTitle: '¿Por qué confiar en ECO M para proteger su marca?',
    whyPoints: [
      { title: 'Prevención de Suplantaciones y Delitos', desc: 'Evite que terceros no autorizados utilicen uniformes con el nombre de su empresa para cometer fraudes, robos o dañar su reputación.' },
      { title: 'Protección de Propiedad Intelectual', desc: 'Somos el aliado estratégico de las marcas de retail para asegurar que las falsificaciones (piratería) o productos con fallas no regresen jamás al mercado.' },
      { title: 'Cuidado del Medio Ambiente', desc: 'Promovemos la valorización y correcta disposición de los residuos, ayudando a mitigar el impacto ambiental que genera la industria de la indumentaria.' }
    ],
    footerText: '¿Necesita dar de baja un lote de uniformes antiguos, destruir avíos de marca o inhabilitar calzado de seguridad? Nuestro equipo operativo está preparado para proteger su imagen hoy mismo.'
  },

  // SERVICIO 6
  'destruccion-bienes-fiscalizados-residuos-peligrosos': {
    heroTitle: 'Destrucción de Bienes Fiscalizados (IQBF) y Residuos Peligrosos',
    heroSubtitle: 'Gestión de alto riesgo con cumplimiento normativo absoluto. Neutralizamos, destruimos y disponemos de insumos químicos, mercancías peligrosas y bienes fiscalizados (SUNAT) bajo los más estrictos estándares de seguridad y protección ambiental.',
    ctaButton: 'Cotizar Destrucción de Peligrosos',
    whatsappMessage: 'Hola, estoy en la web de ECO M y requiero gestión para bienes fiscalizados o residuos peligrosos.',
    section2Intro: 'Evite contingencias legales y ambientales. Contamos con la infraestructura, los permisos y el personal calificado para la inhabilitación de materiales tóxicos, inflamables o controlados por el Estado.',
    products: [
      { title: 'Insumos Químicos y Bienes Fiscalizados (IQBF)', desc: 'Destrucción notarial y fiscal de productos químicos controlados por SUNAT (solventes, ácidos, acetona, etc.) garantizando que no sean desviados a actividades ilícitas.' },
      { title: 'Productos Industriales Vencidos', desc: 'Lotes de pinturas, lubricantes, aditivos, resinas, pegamentos y reactivos químicos que han perdido su vida útil.' },
      { title: 'Residuos Peligrosos Contaminados (RESPEL)', desc: 'Envases, cilindros, paños absorbentes o empaques que hayan estado en contacto directo con sustancias tóxicas o hidrocarburos.' },
      { title: 'Materiales de Riesgo Biológico y Sanitario', desc: 'Cosméticos o fármacos altamente contaminados que requieren un tratamiento especial antes de su disposición final.' }
    ],
    cycleTitle: 'Nuestro Ciclo de Servicio Seguro',
    cycleSteps: [
      { icon: ShieldCheck, title: '1. Evaluación y Plan de Contingencia', desc: 'Nuestro equipo de ingenieros ambientales evalúa la hoja de seguridad (MSDS) de sus productos para determinar el EPP adecuado, los protocolos de manipulación y el método de destrucción más seguro.' },
      { icon: Truck, title: '2. Transporte de Materiales Peligrosos (MTC)', desc: 'Recolectamos y trasladamos la carga utilizando nuestra flota especializada y autorizada por el MTC para el transporte de materiales y residuos peligrosos, garantizando total hermeticidad en la ruta.' },
      { icon: Recycle, title: '3. Tratamiento, Neutralización y Destrucción', desc: 'Sometemos los bienes a procesos físico-químicos de neutralización, encapsulamiento o trituración mecánica controlada, eliminando su peligrosidad y desnaturalizando el producto por completo.' },
      { icon: FileCheck, title: '4. Disposición en Relleno de Seguridad y Certificación', desc: 'Los residuos resultantes son confinados en rellenos de seguridad autorizados. Finalizamos emitiendo el Certificado de Destrucción y el Manifiesto de Residuos Peligrosos (MINAM/SIGERSOL).' }
    ],
    whyTitle: '¿Por qué confiar en ECO M para operaciones de alto riesgo?',
    whyPoints: [
      { title: 'Licencias y Autorizaciones Vigentes', desc: 'Operamos estrictamente como Empresa Operadora de Residuos Sólidos (EO-RS) autorizada por MINAM, DIGESA y MTC.' },
      { title: 'Control Legal SUNAT para IQBF', desc: 'Brindamos la trazabilidad y el soporte notarial/fiscal exigido para dar de baja bienes fiscalizados sin riesgo de sanciones penales o tributarias.' },
      { title: 'Cero Riesgo Ambiental y Laboral', desc: 'Personal altamente capacitado en manejo de materiales peligrosos (MATPEL) e infraestructura que previene cualquier tipo de derrame o contaminación.' }
    ],
    footerText: '¿Requiere gestionar insumos químicos vencidos o dar de baja bienes fiscalizados con urgencia y seguridad garantizada? Un ingeniero de ECO M está listo para evaluar su requerimiento.'
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const image = serviceImages[service.imageKey];
  const extendedData = extendedServiceContent[service.slug];

  // Obtener TODOS los demás servicios excluyendo el actual (para el carrusel)
  const allServices = [...servicesByCategory.destruccion, ...servicesByCategory.sanitarios];
  const related = allServices.filter(s => s.id !== service.id);

  // Funciones para desplazar el carrusel
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const getFallbackWhatsAppUrl = (serv: Service) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola ECO M, solicito información sobre ${serv.title}.`)}`;
  };

  const whatsappLink = extendedData 
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(extendedData.whatsappMessage)}`
    : getFallbackWhatsAppUrl(service);

  return (
    <>
      <section className="relative flex items-center min-h-[50vh] w-full overflow-hidden">
        <img src={image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-5xl mx-auto leading-tight">
            {extendedData ? extendedData.heroTitle : service.title}
          </h1>
          <div className="flex gap-1 justify-center mt-8 mb-6">
            <div className="w-8 h-1 rounded-full bg-accent" />
            <div className="w-8 h-1 rounded-full bg-background/40" />
          </div>
          
          <p className="text-background/90 mt-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
            {extendedData ? extendedData.heroSubtitle : service.shortDesc}
          </p>

          <p className="text-background/60 mt-8 text-sm">
            <Link to="/" className="hover:text-background transition-colors">{t('nav.inicio')}</Link> / 
            <span className="mx-2">Soluciones</span> / 
            <span className="text-background ml-2">{extendedData ? extendedData.heroTitle : service.title}</span>
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            {extendedData ? (
              <div className="space-y-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">¿Qué procesos y materiales gestionamos?</h2>
                  <div className="flex gap-1 mb-6">
                    <div className="w-8 h-1 rounded-full bg-accent" />
                    <div className="w-8 h-1 rounded-full bg-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {extendedData.section2Intro}
                  </p>
                  <div className="grid gap-6 mt-8">
                    {extendedData.products.map((prod: any, idx: number) => (
                      <div key={idx} className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm flex gap-4">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-2">{prod.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{prod.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 bg-card border border-border/50 p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{extendedData.cycleTitle}</h2>
                  <div className="grid gap-8">
                    {extendedData.cycleSteps.map((step: any, idx: number) => (
                      <div key={idx} className="flex gap-5 relative">
                        {idx !== extendedData.cycleSteps.length - 1 && (
                          <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-border/60" />
                        )}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 z-10 relative">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{extendedData.whyTitle}</h2>
                  <div className="grid gap-5">
                    {extendedData.whyPoints.map((point: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{point.title}:</strong> {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">ECO M</p>
                <h2 className="text-3xl font-bold tracking-tight mb-2">{service.title}</h2>
                <div className="flex gap-1 my-6">
                  <div className="w-8 h-1 rounded-full bg-accent" />
                  <div className="w-8 h-1 rounded-full bg-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.fullDesc}</p>
                <div className="flex flex-col gap-4">
                  {service.benefits.map((b: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6">
              <img src={image} alt={service.title} className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3] border border-border/50" loading="lazy" />
              
              <Link 
                to="/contacto" 
                state={{ serviceContext: service.title }}
                className="w-full bg-cta text-cta-foreground flex items-center justify-center gap-2 py-5 rounded-xl font-bold shadow-[0_4px_14px_0_hsl(var(--cta)/0.25)] hover:scale-[1.02] hover:shadow-[0_6px_20px_hsl(var(--cta)/0.35)] transition-all duration-200 text-lg"
              >
                {extendedData ? extendedData.ctaButton : 'Solicitar Cotización'} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {extendedData && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center border border-primary/10 bg-primary/5 rounded-3xl py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 max-w-3xl mx-auto leading-tight">
              {extendedData.footerText}
            </h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp/90 text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-whatsapp hover:shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      )}

      {/* Otras Soluciones */}
      {related.length > 0 && (
        <section className="py-16 bg-[#f4f6f8]">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display font-bold text-2xl mb-8 text-[#2c6e6b]">Otras Soluciones</h3>
            
            <div className="relative group">
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  ::-webkit-scrollbar { display: none; }
                `}</style>

                {related.map(s => (
                  <Link 
                    key={s.id} 
                    to={`/servicios/${s.slug}`} 
                    className="min-w-[300px] md:min-w-[340px] snap-start shrink-0 flex flex-col bg-card rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_32px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img src={serviceImages[s.imageKey]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <h4 className="font-display font-bold text-sm text-[#2c6e6b] mb-4">{s.title}</h4>
                      <span className="inline-flex items-center text-[#5c9d3e] text-xs font-semibold transition-colors">
                        Ver detalle <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetail;