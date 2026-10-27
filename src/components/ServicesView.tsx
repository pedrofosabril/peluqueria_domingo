/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, AVAILABLE_DAYS, TIME_SLOTS, ServiceItem, ATELIER_INFO } from '../data/barberData';

interface ServicesViewProps {
  onOpenBookingModal: (serviceName?: string, price?: string, duration?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenBookingModal
}) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'cortes' | 'barba' | 'color'>('todos');
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string>('16:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const filteredServices = SERVICES.filter(
    s => activeCategory === 'todos' || s.category === activeCategory
  );

  const cortesServices = SERVICES.filter(s => s.category === 'cortes');
  const barbaServices = SERVICES.filter(s => s.category === 'barba');
  const colorServices = SERVICES.filter(s => s.category === 'color');

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    // Smooth scroll to dynamic booking sidebar on small screens
    const bookingWidget = document.getElementById('reserva-dinamica');
    if (bookingWidget && window.innerWidth < 1024) {
      bookingWidget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInlineBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 800);
  };

  return (
    <div className="w-full bg-background pb-24">
      {/* SERVICES HERO BANNER */}
      <section className="relative w-full py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20 mix-blend-luminosity"
            style={{ backgroundImage: `url('${ATELIER_INFO.serviciosBgUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.2em] block mb-2">
              Atelier Juan Domingo • Tarifas Oficiales 2026
            </span>
            <h1 className="font-newsreader text-4xl sm:text-5xl font-normal text-on-surface leading-tight">
              Carta de Servicios y Tarifas
            </h1>
            <p className="font-manrope text-sm text-on-surface-variant mt-3 leading-relaxed">
              Precios transparentes con IVA incluido, ingredientes botánicos seleccionados y dedicación sin prisas en cada tratamiento.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-4 py-2 rounded font-manrope text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === 'todos'
                  ? 'bg-primary text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Todos los Servicios ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('cortes')}
              className={`px-4 py-2 rounded font-manrope text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === 'cortes'
                  ? 'bg-primary text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Cortes y Peinado ({cortesServices.length})
            </button>
            <button
              onClick={() => setActiveCategory('barba')}
              className={`px-4 py-2 rounded font-manrope text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === 'barba'
                  ? 'bg-primary text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Barba y Afeitado ({barbaServices.length})
            </button>
            <button
              onClick={() => setActiveCategory('color')}
              className={`px-4 py-2 rounded font-manrope text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === 'color'
                  ? 'bg-primary text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              Color y Canas ({colorServices.length})
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: 2-COLUMN LAYOUT (CATALOGUE + DYNAMIC BOOKING) */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: SERVICE CATALOGUE */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            {/* 01 CORTES Y PEINADO */}
            {(activeCategory === 'todos' || activeCategory === 'cortes') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="font-newsreader text-2xl font-bold text-primary">01</span>
                    <h2 className="font-newsreader text-2xl font-semibold text-on-surface">
                      Cortes y Peinado
                    </h2>
                  </div>
                  <span className="font-manrope text-xs text-on-surface-variant">
                    {cortesServices.length} Tratamientos
                  </span>
                </div>

                <div className="space-y-4">
                  {cortesServices.map((service) => (
                    <div
                      key={service.id}
                      className={`p-6 rounded-xl border transition-all duration-200 ${
                        selectedService.id === service.id
                          ? 'bg-surface-container-high border-primary shadow-lg shadow-primary/5'
                          : 'bg-surface-container-low border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-newsreader text-xl font-semibold text-on-surface">
                          {service.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="font-newsreader text-2xl font-bold text-primary">
                            {service.price}
                          </span>
                          <span className="font-manrope text-[11px] text-on-surface-variant">
                            IVA incl.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs font-manrope text-secondary font-medium">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span className="text-on-surface-variant">Lavado + Peinado + Estilo</span>
                      </div>

                      <p className="font-manrope text-xs text-on-surface-variant leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-outline-variant/20">
                        <span className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-newsreader italic">
                          <span className="material-symbols-outlined text-primary text-sm">{service.tagIcon}</span>
                          <span>{service.tag}</span>
                        </span>

                        <button
                          onClick={() => handleSelectService(service)}
                          className={`font-manrope text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all ${
                            selectedService.id === service.id
                              ? 'bg-primary text-on-primary shadow-sm'
                              : 'bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface'
                          }`}
                        >
                          {selectedService.id === service.id ? 'Seleccionado para Reservar' : 'Reservar este servicio'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 02 BARBA Y AFEITADO CLÁSICO */}
            {(activeCategory === 'todos' || activeCategory === 'barba') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="font-newsreader text-2xl font-bold text-primary">02</span>
                    <h2 className="font-newsreader text-2xl font-semibold text-on-surface">
                      Barba y Afeitado Clásico
                    </h2>
                  </div>
                  <span className="font-manrope text-xs text-on-surface-variant">
                    {barbaServices.length} Tratamientos
                  </span>
                </div>

                <div className="space-y-4">
                  {barbaServices.map((service) => (
                    <div
                      key={service.id}
                      className={`p-6 rounded-xl border transition-all duration-200 ${
                        selectedService.id === service.id
                          ? 'bg-surface-container-high border-primary shadow-lg shadow-primary/5'
                          : 'bg-surface-container-low border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-newsreader text-xl font-semibold text-on-surface">
                          {service.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="font-newsreader text-2xl font-bold text-primary">
                            {service.price}
                          </span>
                          <span className="font-manrope text-[11px] text-on-surface-variant">
                            IVA incl.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs font-manrope text-secondary font-medium">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span className="text-on-surface-variant">Toalla caliente + Perfilado</span>
                      </div>

                      <p className="font-manrope text-xs text-on-surface-variant leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-outline-variant/20">
                        <span className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-newsreader italic">
                          <span className="material-symbols-outlined text-primary text-sm">{service.tagIcon}</span>
                          <span>{service.tag}</span>
                        </span>

                        <button
                          onClick={() => handleSelectService(service)}
                          className={`font-manrope text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all ${
                            selectedService.id === service.id
                              ? 'bg-primary text-on-primary shadow-sm'
                              : 'bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface'
                          }`}
                        >
                          {selectedService.id === service.id ? 'Seleccionado para Reservar' : 'Reservar este servicio'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03 CUIDADO DEL COLOR Y CANAS */}
            {(activeCategory === 'todos' || activeCategory === 'color') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="font-newsreader text-2xl font-bold text-primary">03</span>
                    <h2 className="font-newsreader text-2xl font-semibold text-on-surface">
                      Cuidado del Color y Canas
                    </h2>
                  </div>
                  <span className="font-manrope text-xs text-on-surface-variant">
                    {colorServices.length} Tratamiento
                  </span>
                </div>

                <div className="space-y-4">
                  {colorServices.map((service) => (
                    <div
                      key={service.id}
                      className={`p-6 rounded-xl border transition-all duration-200 ${
                        selectedService.id === service.id
                          ? 'bg-surface-container-high border-primary shadow-lg shadow-primary/5'
                          : 'bg-surface-container-low border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-newsreader text-xl font-semibold text-on-surface">
                          {service.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="font-newsreader text-2xl font-bold text-primary">
                            {service.price}
                          </span>
                          <span className="font-manrope text-[11px] text-on-surface-variant">
                            IVA incl.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs font-manrope text-secondary font-medium">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span className="text-on-surface-variant">Matizado natural sin efecto raíz</span>
                      </div>

                      <p className="font-manrope text-xs text-on-surface-variant leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-outline-variant/20">
                        <span className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-newsreader italic">
                          <span className="material-symbols-outlined text-primary text-sm">{service.tagIcon}</span>
                          <span>{service.tag}</span>
                        </span>

                        <button
                          onClick={() => handleSelectService(service)}
                          className={`font-manrope text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all ${
                            selectedService.id === service.id
                              ? 'bg-primary text-on-primary shadow-sm'
                              : 'bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface'
                          }`}
                        >
                          {selectedService.id === service.id ? 'Seleccionado para Reservar' : 'Reservar este servicio'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: DYNAMIC BOOKING SIDEBAR */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-6">
            <div
              id="reserva-dinamica"
              className="bg-surface-container border border-outline-variant/40 rounded-xl p-6 shadow-xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                <span className="font-manrope text-[11px] font-bold text-primary uppercase tracking-[0.14em]">
                  Reserva Dinámica
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-secondary font-manrope">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Horarios en Vivo
                </span>
              </div>

              {!bookingSuccess ? (
                <form onSubmit={handleInlineBookingSubmit} className="space-y-4">
                  {/* Selected Service Card */}
                  <div>
                    <label className="block font-manrope text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Servicio Activo
                    </label>
                    <div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 flex items-center justify-between text-xs font-manrope">
                      <div>
                        <span className="font-bold text-primary block">{selectedService.name}</span>
                        <span className="text-[11px] text-on-surface-variant">{selectedService.duration}</span>
                      </div>
                      <span className="font-newsreader text-lg font-bold text-primary">
                        {selectedService.price}
                      </span>
                    </div>
                  </div>

                  {/* Day Selection */}
                  <div>
                    <label className="block font-manrope text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Día de Preferencia
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {AVAILABLE_DAYS.slice(0, 4).map((d, i) => {
                        const isSelected = selectedDayIndex === i;
                        return (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => setSelectedDayIndex(i)}
                            className={`p-2 rounded text-center font-manrope text-xs transition-colors ${
                              isSelected
                                ? 'bg-primary text-on-primary font-bold shadow-sm'
                                : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span className={`block text-[9px] uppercase ${isSelected ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
                              {d.label}
                            </span>
                            <span className="font-semibold block">{d.date.split(' ').slice(1).join(' ')}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slot Selection */}
                  <div>
                    <label className="block font-manrope text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Franja Horaria
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {TIME_SLOTS.map((t) => {
                        const isSelected = selectedTime === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-1.5 px-2 rounded font-manrope text-xs transition-colors ${
                              isSelected
                                ? 'bg-secondary-container text-on-secondary-container border border-primary font-bold'
                                : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant'
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      required
                      placeholder="Su Nombre Completo"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3 py-2 font-manrope text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono / WhatsApp"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3 py-2 font-manrope text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider py-3 rounded shadow-md transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                        <span>Procesando...</span>
                      </span>
                    ) : (
                      <span>Confirmar Cita con Juan Domingo</span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="p-4 bg-surface-container-lowest rounded-lg border border-primary/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-xl">done</span>
                  </div>
                  <h4 className="font-newsreader text-lg font-semibold text-on-surface">
                    ¡Cita Solicitada con Éxito!
                  </h4>
                  <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">
                    Hemos reservado el espacio de <span className="text-on-surface font-semibold">{selectedService.name}</span> para el <span className="text-on-surface font-semibold">{AVAILABLE_DAYS[selectedDayIndex]?.fullDate}</span> a las <span className="text-on-surface font-semibold">{selectedTime} hs</span>.
                  </p>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="text-xs text-primary font-manrope uppercase font-bold hover:underline pt-2 block mx-auto"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              )}

              {/* Extra Perks Info */}
              <div className="pt-3 border-t border-outline-variant/20 space-y-2 text-xs font-manrope text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  <span>Sin penalización por cancelación con 4h de antelación.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base">local_cafe</span>
                  <span>Bebida de cortesía (café o cerveza) incluida.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base">payments</span>
                  <span>Pago en el atelier (Efectivo, Débito, Transferencia).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
