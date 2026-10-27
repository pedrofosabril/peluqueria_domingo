/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ATELIER_INFO, SERVICES, TESTIMONIALS } from '../data/barberData';

interface HomeViewProps {
  onNavigateToServices: () => void;
  onOpenBooking: (serviceName?: string, price?: string, duration?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToServices,
  onOpenBooking
}) => {
  const featuredServices = SERVICES.filter(s => s.isFeatured).slice(0, 3);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center py-20 md:py-28 overflow-hidden bg-surface-container-lowest">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-25 mix-blend-luminosity transform scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('${ATELIER_INFO.heroBgUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-lowest/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 w-full">
          {/* Google Badge Review */}
          <div className="inline-flex items-center gap-2 bg-surface-container-high/90 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-sm border border-outline-variant/30">
            <div className="flex items-center text-primary text-xs">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[15px] fill-current">star</span>
              ))}
            </div>
            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.14em] text-on-surface">
              Calificación 4.9/5 en Google (más de 350 reseñas)
            </span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-newsreader text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-on-surface tracking-tight">
              El arte del corte clásico y el cuidado contemporáneo.
            </h1>
            <p className="font-manrope text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Más de 15 años perfeccionando el oficio de la barbería y estilismo masculino en el corazón de Villa Carlos Paz. Un espacio pensado para desconectar, charlar y salir impecable.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking('Corte Clásico de Autor', '$18.000', '45 min')}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined mr-2 text-lg">calendar_today</span>
                <span>Reservar Cita Online</span>
              </button>

              <button
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center bg-surface-container-high hover:bg-surface-bright text-on-surface font-manrope text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded transition-colors border border-outline-variant/40"
              >
                <span>Ver Servicios y Precios</span>
                <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA SECTION (3 PILARES) */}
      <section id="experiencia" className="w-full py-20 bg-background border-t border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
                Filosofía de Atelier
              </span>
              <h2 className="font-newsreader text-3xl md:text-4xl font-normal text-on-surface">
                La Experiencia Juan Domingo
              </h2>
            </div>
            <p className="font-manrope text-sm text-on-surface-variant max-w-md leading-relaxed">
              Un retorno al cuidado pausado donde cada detalle está orquestado para su serenidad, precisión estética y desconexión absoluta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="group bg-surface-container-low p-8 rounded-xl shadow-md border border-outline-variant/20 transition-all duration-300 hover:bg-surface-container hover:border-primary/40">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-2xl">person_pin</span>
              </div>
              <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
                01 / Dedicación
              </span>
              <h3 className="font-newsreader text-xl font-semibold text-on-surface mb-3">
                Atención Personalizada 1 a 1
              </h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                Cada cita reserva el espacio en exclusiva con tiempo holgado. Sin solapamientos ni turnos apresurados: usted es la única prioridad durante su sesión.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group bg-surface-container-low p-8 rounded-xl shadow-md border border-outline-variant/20 transition-all duration-300 hover:bg-surface-container hover:border-primary/40">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-2xl">content_cut</span>
              </div>
              <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
                02 / Artesanía
              </span>
              <h3 className="font-newsreader text-xl font-semibold text-on-surface mb-3">
                Técnica y Navaja Tradicional
              </h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                Aplicación de toallas al vapor con aromas a cedro, ozonoterapia dérmica, afeitado a navaja japonesa y ungüentos botánicos sin alcohol agresivo.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group bg-surface-container-low p-8 rounded-xl shadow-md border border-outline-variant/20 transition-all duration-300 hover:bg-surface-container hover:border-primary/40">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-2xl">local_cafe</span>
              </div>
              <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
                03 / Hospitalidad
              </span>
              <h3 className="font-newsreader text-xl font-semibold text-on-surface mb-3">
                Bebida de Cortesía y Buen Café
              </h3>
              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                Al cruzar la puerta disfrute de un espresso de especialidad recién molido, infusión botánica relajante o una cerveza artesana fría antes del primer corte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="w-full py-20 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
              Carta de Cuidado
            </span>
            <h2 className="font-newsreader text-3xl md:text-4xl font-normal text-on-surface mb-3">
              Servicios Destacados
            </h2>
            <p className="font-manrope text-sm text-on-surface-variant">
              Protocolos diseñados con meticulosidad quirúrgica para garantizar una presencia intachable y bienestar duradero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-surface-container p-7 rounded-xl shadow-md border border-outline-variant/20 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="inline-flex items-center gap-1 font-manrope text-[11px] font-semibold text-secondary bg-secondary-container/40 px-2.5 py-1 rounded">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {service.duration}
                    </span>
                    <span className="font-newsreader text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="font-newsreader text-xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="font-manrope text-xs text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="pb-4 mb-4 border-b border-outline-variant/20 flex items-center gap-1.5 text-xs text-on-surface-variant/80 italic font-newsreader">
                    <span className="material-symbols-outlined text-primary text-sm">{service.tagIcon}</span>
                    <span>{service.tag}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.name, service.price, service.duration)}
                    className="w-full inline-flex items-center justify-center bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-manrope text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors"
                  >
                    <span>Reservar este servicio</span>
                    <span className="material-symbols-outlined ml-1.5 text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onNavigateToServices}
              className="inline-flex items-center gap-2 font-manrope text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-fixed border-b border-primary/50 pb-1 transition-colors"
            >
              <span>Ver Carta Completa de Servicios (8 tratamientos)</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* EL MAESTRO BARBERO */}
      <section id="maestro" className="w-full py-20 bg-background border-t border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Barber Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 aspect-[4/5] max-w-md mx-auto">
                <img
                  src={ATELIER_INFO.barberPhotoUrl}
                  alt="Juan Domingo Maestro Barbero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container/90 backdrop-blur-md border border-outline-variant/30">
                  <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">
                    Maestro Fundador
                  </span>
                  <h4 className="font-newsreader text-lg font-semibold text-on-surface">
                    Juan Domingo
                  </h4>
                  <p className="font-manrope text-xs text-on-surface-variant">
                    Villa Carlos Paz • 15+ Años de Oficio
                  </p>
                </div>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
                  15+ Años de Oficio • Villa Carlos Paz
                </span>
                <h2 className="font-newsreader text-3xl md:text-4xl font-normal text-on-surface leading-tight">
                  Juan Domingo: La vocación del trazo exacto y la palabra pausada.
                </h2>
              </div>

              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2">
                <span className="material-symbols-outlined text-primary text-3xl opacity-60">format_quote</span>
                <p className="font-newsreader text-lg md:text-xl italic text-on-surface leading-snug">
                  "El cabello y la barba no se cortan por rutina, se esculpen respetando el rostro de cada persona."
                </p>
              </div>

              <p className="font-manrope text-sm text-on-surface-variant leading-relaxed">
                Hijo de artesanos, Juan concibe la peluquería masculina como una disciplina de arquitectura facial y empatía humana. Tras formarse en academias tradicionales y dirigir sillas en emblemáticos salones europeos, fundó su propio atelier de autor para recuperar la dignidad de la conversación serena y el rigor del acabado a mano.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/20">
                  <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                    Herramientas
                  </span>
                  <p className="font-manrope text-xs text-on-surface leading-relaxed">
                    Navajas forjadas en acero al carbono y tijeras ergonómicas japonesas de precisión micrométrica.
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/20">
                  <span className="font-manrope text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                    Cosmética
                  </span>
                  <p className="font-manrope text-xs text-on-surface leading-relaxed">
                    Fórmulas orgánicas certificadas, aceites de jojoba y cedro, libres de siliconas y sulfatos agresivos.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <span className="font-newsreader text-3xl font-bold text-primary block">15+</span>
                  <span className="font-manrope text-[11px] text-on-surface-variant uppercase tracking-wider">Años de oficio</span>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/30"></div>
                <div>
                  <span className="font-newsreader text-3xl font-bold text-primary block">12.000+</span>
                  <span className="font-manrope text-[11px] text-on-surface-variant uppercase tracking-wider">Servicios realizados</span>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/30"></div>
                <div>
                  <span className="font-newsreader text-3xl font-bold text-primary block">4.9★</span>
                  <span className="font-manrope text-[11px] text-on-surface-variant uppercase tracking-wider">Reseñas en Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="w-full py-20 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
                Comunidad del Barrio
              </span>
              <h2 className="font-newsreader text-3xl md:text-4xl font-normal text-on-surface">
                Palabras de quienes vuelven cada mes
              </h2>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-newsreader text-2xl font-bold text-on-surface">4.9</span>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                ))}
              </div>
              <span className="font-manrope text-xs text-on-surface-variant">
                (350+ valoraciones contrastadas)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-surface-container-low p-6 rounded-xl shadow-md border border-outline-variant/20 flex flex-col justify-between"
              >
                <div className="space-y-3 mb-6">
                  <div className="flex text-primary">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                    ))}
                  </div>
                  <p className="font-manrope text-xs text-on-surface leading-relaxed italic">
                    {test.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 bg-surface-container/30 px-3 py-2 rounded-lg border border-outline-variant/10">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-manrope text-xs font-bold text-primary border border-primary/30">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="font-manrope text-xs font-bold text-on-surface">
                      {test.name}
                    </h4>
                    <span className="font-manrope text-[10px] text-on-surface-variant">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN & CONTACTO HERO BANNER */}
      <section id="contacto" className="w-full py-16 bg-surface-container border-t border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
                Visítenos en el Atelier
              </span>
              <h3 className="font-newsreader text-2xl md:text-3xl font-semibold text-on-surface">
                Avenida Juan Perez 67, Villa Carlos Paz
              </h3>
              <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">
                Ambiente climatizado, hilo musical en vinilo, estacionamiento cercano y un café siempre listo para usted.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-manrope text-on-surface">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-base">call</span>
                  {ATELIER_INFO.phone}
                </span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-base">chat</span>
                  {ATELIER_INFO.whatsapp}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider rounded shadow-md transition-all text-center"
              >
                Pedir Cita Online
              </button>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ATELIER_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-surface-container hover:bg-surface-bright text-on-surface font-manrope text-xs font-bold uppercase tracking-wider rounded border border-outline-variant/40 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">map</span>
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
