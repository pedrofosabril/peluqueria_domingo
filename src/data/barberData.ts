/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'cortes' | 'barba' | 'color';
  price: string;
  rawPrice: number;
  duration: string;
  description: string;
  tag: string;
  tagIcon: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
}

export const ATELIER_INFO = {
  name: 'Juan Domingo',
  subtitle: 'Peluquería y Barbería de Autor',
  slogan: 'El arte del corte clásico y el cuidado contemporáneo.',
  experienceYears: '15+',
  servicesDone: '12.000+',
  rating: '4.9',
  reviewsCount: '350+',
  address: 'Avenida Juan Perez 67, Villa Carlos Paz, Córdoba, Argentina',
  phone: '+54 912 34 56 78',
  whatsapp: '+54 600 12 34 56',
  hours: [
    { days: 'Martes a Viernes', time: '10:00 — 20:00', isOpen: true },
    { days: 'Sábados', time: '09:30 — 18:00', isOpen: true },
    { days: 'Domingos y Lunes', time: 'Cerrado', isOpen: false },
  ],
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1W_Dt8qm1VINENT1XYfnw1MKCpisVc1XlCNMkFjy_63-fjWgcA-K2v5RTy208tT8KI3C4c4PTHr3LaEJvwZ1OQMKZecqRz4lbqcaBVJmnAtcRzB8PJwZc70AvehKczyJzO9a9Odm1YPXoH031xOBjDfrVBRPWdJPOqcR1X9_n9tj5_8lczAh9OYy-IksjUvzxJjlO8ClLcwsuV4h_7oq8E-VntYSJdJgKu92eC_VjcG4dMdN5GS2IS_CQ',
  heroBgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATmErUcgH_CFyCXlUfNU-AyjoaNAbjeKRn0WQuisM4ArvPufLIxcoAehWLxQNqcY4sZX6lpBlRkL_uAkYWGeeCn7LP0AH8O3AwBgv_z9_qoSLYmVzYjATMdfKRNsPt8X7qQZQ4et08qeHGmyc6VnUZigRRT5SZY2npi_I6ksev2-qvB95_15zN69ikqo19pt75voabgyWONfIAgUWYOM1cHAHMvVjy27ctqC3NKcyniNXg2AAe0hJY',
  serviciosBgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgOxi3iaBqb9JBgh2-sT4J0VJhhzX02fpW5hzzPFR0-dK1inImumuA1qLhoL3ehtXPIr7p8edDN0ijMchhRy8DFl-vNEGOOReNbIX_JCDXmwpPKzUk7w76a36QR6x1i0CxcWSimSf_knCS7DWrcdmLNjexunPfvFlUbQuAhqe_DL301UyVEMKGaWBilAWpr769bs2vWdavHHYK-dsaNnVfYB1tIgdKRWWgSn1DP7zmDvASbCKAnVyy',
  barberPhotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3yAUtmfziP_auhx0rBqGqY39HdFVWT6WzlWJzViVhXPD6ZEqvJfgbBL-yZukptv1ZxNpWC7x-QOoifcopZw5vUtkh3trUBp8kEB5o9WCXqdXiFt797qXC0he4HNo-bbns0RZkfcK8jnb6W0s464ycs6YCFiXKdCKlVVJxkOCpFE4AXyE3WAj6vuiC5FrBPWUPGRm6ikgK-XED8TnegthIbx3qDgIIjkVTWQ14wOPE3Bjgp3Vwlp_'
};

export const SERVICES: ServiceItem[] = [
  // 01 Cortes y Peinado
  {
    id: 'corte-clasico',
    name: 'Corte Clásico de Autor',
    category: 'cortes',
    price: '$18.000',
    rawPrice: 18000,
    duration: '45 min',
    description: 'Diagnóstico morfológico previo, corte a tijera o máquina esculpido según fisonomía, lavado relajante con champú botánico, peinado con secador y asesoría capilar completa.',
    tag: 'Aceite de jojoba orgánico',
    tagIcon: 'spa',
    isFeatured: true
  },
  {
    id: 'corte-fade',
    name: 'Corte Fade de Precisión',
    category: 'cortes',
    price: '$20.000',
    rawPrice: 20000,
    duration: '50 min',
    description: 'Degradado milimétrico desde la piel hasta la cúspide con navajín y razor shaver. Acabado pulido con pomada mate con extractos de cera de abejas.',
    tag: 'Graduación skin fade a medida',
    tagIcon: 'tune'
  },
  {
    id: 'corte-joven',
    name: 'Corte Joven y Estudiantes',
    category: 'cortes',
    price: '$15.000',
    rawPrice: 15000,
    duration: '40 min',
    description: 'Corte dinámico y actual adaptado a texturas modernas (taper fade, buzz cut estilizado o texturizado layered). Incluye lavado y estilismo final.',
    tag: 'Tarifa especial reducida',
    tagIcon: 'verified'
  },
  {
    id: 'mantenimiento-contornos',
    name: 'Mantenimiento Contornos y Cuello',
    category: 'cortes',
    price: '$9.000',
    rawPrice: 9000,
    duration: '20 min',
    description: 'Repaso rápido de líneas, patillas, nuca y contornos a navaja con toalla templada astringente para mantener el look impecable semana a semana.',
    tag: 'Servicio rápido de impacto',
    tagIcon: 'flash_on'
  },

  // 02 Barba y Afeitado Clásico
  {
    id: 'ritual-barba',
    name: 'Ritual Barba Completa a Navaja',
    category: 'barba',
    price: '$14.000',
    rawPrice: 14000,
    duration: '35 min',
    description: 'Vaporizador con esencia de eucalipto, recorte milimétrico de volumen, perfilado de mejillas y cuello con navaja libre, finalizado con bálsamo hidratante y cepillado de cerdas naturales.',
    tag: 'Aceites esenciales de cedro',
    tagIcon: 'local_florist',
    isFeatured: true
  },
  {
    id: 'afeitado-spa',
    name: 'Afeitado Tradicional Spa',
    category: 'barba',
    price: '$16.000',
    rawPrice: 16000,
    duration: '40 min',
    description: 'Inmersión total: doble toalla caliente infusionada en romero, enjabonado con brocha de tejón y espuma caliente artesanal, doble pasada a navaja y toalla fría de cierre con loción de sándalo.',
    tag: 'Espuma artesanal en tazón caliente',
    tagIcon: 'water_drop',
    isFeatured: true
  },
  {
    id: 'arreglo-expres-barba',
    name: 'Arreglo Exprés de Barba',
    category: 'barba',
    price: '$9.000',
    rawPrice: 9000,
    duration: '20 min',
    description: 'Vaciado de volumen con máquina cortapelo, alineado y definición del labio superior, limpieza de cuello en seco y unas gotas de aceite hidratante ligero.',
    tag: 'Definición esencial diaria',
    tagIcon: 'speed'
  },

  // 03 Cuidado del Color y Canas
  {
    id: 'camuflaje-canas',
    name: 'Camuflaje de Canas Barba o Cabello',
    category: 'color',
    price: '$14.000',
    rawPrice: 14000,
    duration: '30 min',
    description: 'Matizado demi-permanente sin amoníaco que disimula sutilmente las canas devolviendo vigor y tono homogéneo sin que se perciba teñido. Desvanecimiento armónico lavado tras lavado.',
    tag: 'Sin amoníaco ni efecto raíz',
    tagIcon: 'opacity'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcos Gómez',
    role: 'Cliente mensual desde 2021',
    initials: 'MG',
    quote: '"Llevo 4 años confiándole mi pelo y barba. No es solo la calidad técnica insuperable del degradado, es el ritual: el café recién hecho, el silencio y la toalla caliente son mi mejor hora de la semana."',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Álvaro Lozano',
    role: 'Cliente habitual',
    initials: 'AL',
    quote: '"Tenía problemas continuos de irritación por afeitados rápidos. Juan cambió por completo el enfoque: me recomendó cuidados para casa y el afeitado clásico que hace aquí es pura seda."',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Daniel Santamaría',
    role: 'Vecino del Centro, cliente hace 2 años',
    initials: 'DS',
    quote: '"Puntualidad británica, música jazz de fondo a volumen perfecto y una atención con tijera que ya no se encuentra en las cadenas modernas. Un verdadero artesano."',
    rating: 5
  }
];

export const AVAILABLE_DAYS = [
  { label: 'HOY', date: 'Jue 17 Oct', fullDate: 'Jueves 17 de Octubre' },
  { label: 'VIE', date: 'Vie 18 Oct', fullDate: 'Viernes 18 de Octubre' },
  { label: 'SÁB', date: 'Sáb 19 Oct', fullDate: 'Sábado 19 de Octubre' },
  { label: 'MAR', date: 'Mar 22 Oct', fullDate: 'Martes 22 de Octubre' },
  { label: 'MIÉ', date: 'Mié 23 Oct', fullDate: 'Miércoles 23 de Octubre' },
  { label: 'JUE', date: 'Jue 24 Oct', fullDate: 'Jueves 24 de Octubre' },
];

export const TIME_SLOTS = [
  '10:00',
  '11:30',
  '14:00',
  '16:30',
  '18:00',
  '19:30'
];
