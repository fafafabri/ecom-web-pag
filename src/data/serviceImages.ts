import destruccionNotarialFiscalAduanera from '@/assets/Destrucción_Notarial,_Fiscal_y_Aduanera_(Baja _de _Inventarios).jpg';
import destruccionSeguraDocumentosArchivos from '@/assets/Destrucción_Segura_de_Documentos_y_Archivos_Confidenciales.jpg';
import destruccionResiduos from '@/assets/service-destruccion-residuos.jpg';
import destruccionRaee from '@/assets/service-destruccion-raee.jpg';
import destruccionRaeeCard from '@/assets/service-destruccion-raee-2.jpg';
import destruccionRopa from '@/assets/service-destruccion-ropa.jpg';
import destruccionRopaCard from '@/assets/service-destruccion-ropa-2.jpg';
import gestionIqbf from '@/assets/service-gestion-iqbf.jpg';
import gestionIqbfCard from '@/assets/service-gestion-iqbf-2.jpg'; // <-- NUEVA IMAGEN IQBF
import transporte from '@/assets/service-transporte.jpg';
import recojoResiduos from '@/assets/service-recojo-residuos.jpg';
import disposicionFinal from '@/assets/service-disposicion-final.jpg';
import sanitarios from '@/assets/service-sanitarios.jpg';
import trampasGrasa from '@/assets/service-trampas-grasa.jpg';
import pozosSepticos from '@/assets/service-pozos-septicos.jpg';
import asesorias from '@/assets/service-asesorias.jpg';
import biodigestores from '@/assets/service-biodigestores.jpg';

export const serviceImages: Record<string, string> = {
  'destruccion-documentos': destruccionSeguraDocumentosArchivos,
  'destruccion-notarial-fiscal-aduanera': destruccionNotarialFiscalAduanera,
  'destruccion-residuos': destruccionResiduos,
  'destruccion-raee': destruccionRaee,
  'destruccion-raee-card': destruccionRaeeCard,
  'destruccion-ropa': destruccionRopa,
  'destruccion-ropa-card': destruccionRopaCard,
  'gestion-iqbf': gestionIqbf,
  'gestion-iqbf-card': gestionIqbfCard, // <-- SE AGREGA AL MAPEO
  'transporte': transporte,
  'recojo-residuos': recojoResiduos,
  'disposicion-final': disposicionFinal,
  'sanitarios': sanitarios,
  'trampas-grasa': trampasGrasa,
  'pozos-septicos': pozosSepticos,
  'asesorias': asesorias,
  'biodigestores': biodigestores,
};