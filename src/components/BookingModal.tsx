/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES, AVAILABLE_DAYS, TIME_SLOTS, ServiceItem, ATELIER_INFO } from '../data/barberData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPrice?: string;
  initialDuration?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialPrice,
  initialDuration
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(1); // Default Friday
  const [selectedTime, setSelectedTime] = useState<string>('16:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [beverageChoice, setBeverageChoice] = useState<string>('Espresso de especialidad');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);

  // Sync initial service if passed
  useEffect(() => {
    if (initialService) {
      const match = SERVICES.find(
        s => s.name.toLowerCase().includes(initialService.toLowerCase()) ||
             initialService.toLowerCase().includes(s.name.toLowerCase())
      );
      if (match) {
        setSelectedServiceId(match.id);
      }
    }
  }, [initialService, isOpen]);

  // Reset confirmed state when reopening
  useEffect(() => {
    if (isOpen) {
      setIsConfirmed(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const selectedDay = AVAILABLE_DAYS[selectedDayIndex] || AVAILABLE_DAYS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      setConfirmedData({
        service: currentService.name,
        price: currentService.price,
        duration: currentService.duration,
        day: selectedDay.fullDate,
        time: selectedTime,
        clientName,
        clientPhone,
        beverageChoice,
        code: `JD-${Math.floor(1000 + Math.random() * 9000)}`
      });
    }, 900);
  };

  const generateWhatsAppUrl = () => {
    if (!confirmedData) return '#';
    const text = encodeURIComponent(
      `Hola Juan Domingo! Solicité la reserva de cita ${confirmedData.code} para ${confirmedData.service} el ${confirmedData.day} a las ${confirmedData.time}. Mi nombre es ${confirmedData.clientName}.`
    );
    return `https://wa.me/54912345678?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-surface-container border border-outline-variant/40 rounded-xl shadow-2xl p-6 md:p-8 my-8 text-on-surface">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {!isConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-manrope text-[11px] font-bold text-primary tracking-[0.2em] uppercase">
                  Atelier Juan Domingo
                </span>
                <span className="text-outline-variant">•</span>
                <span className="inline-flex items-center gap-1 font-manrope text-[11px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Disponibilidad en Tiempo Real
                </span>
              </div>
              <h3 className="font-newsreader text-2xl md:text-3xl font-semibold text-on-surface">
                Reservar Cita Personalizada
              </h3>
              <p className="font-manrope text-xs text-on-surface-variant mt-1">
                Atención exclusiva 1 a 1 sin solapamientos. Seleccione su tratamiento y franja preferida.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  1. Servicio o Tratamiento
                </label>
                <div className="relative">
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded px-3.5 py-2.5 font-manrope text-xs text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id} className="bg-surface-container text-on-surface">
                        {s.name} — {s.price} ({s.duration})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>

                {/* Service Quick Badge */}
                <div className="mt-2 p-2.5 bg-surface-container-low rounded border border-outline-variant/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      {currentService.tagIcon}
                    </span>
                    <span className="font-newsreader italic text-on-surface">
                      {currentService.tag}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-newsreader text-base font-bold text-primary">
                      {currentService.price}
                    </span>
                    <span className="text-[10px] text-on-surface-variant ml-1 font-manrope">
                      • {currentService.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Day Selection */}
              <div>
                <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  2. Día de Preferencia
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {AVAILABLE_DAYS.map((day, idx) => {
                    const isSelected = selectedDayIndex === idx;
                    return (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => setSelectedDayIndex(idx)}
                        className={`p-2 rounded text-center transition-all ${
                          isSelected
                            ? 'bg-primary text-on-primary font-bold shadow-sm scale-[1.02]'
                            : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface border border-outline-variant/30'
                        }`}
                      >
                        <span className={`block text-[10px] tracking-wider uppercase ${isSelected ? 'text-on-primary/80 font-bold' : 'text-on-surface-variant'}`}>
                          {day.label}
                        </span>
                        <span className="font-manrope text-xs font-semibold block mt-0.5">
                          {day.date.split(' ').slice(1).join(' ')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  3. Franja Horaria
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {TIME_SLOTS.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 text-center font-manrope text-xs rounded transition-all ${
                          isSelected
                            ? 'bg-secondary-container text-on-secondary-container border border-primary font-bold shadow-sm'
                            : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-outline-variant/20'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                    Su Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín Rodríguez"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3 py-2 font-manrope text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +54 9 3541 ..."
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3 py-2 font-manrope text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Complimentary Beverage Choice */}
              <div>
                <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                  Bebida de Cortesía al Llegar
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Espresso de especialidad', 'Infusión botánica', 'Cerveza artesana fría'].map((bev) => (
                    <button
                      key={bev}
                      type="button"
                      onClick={() => setBeverageChoice(bev)}
                      className={`p-2 rounded text-left font-manrope text-[11px] transition-colors border ${
                        beverageChoice === bev
                          ? 'border-primary bg-primary/10 text-on-surface font-semibold'
                          : 'border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:border-outline-variant'
                      }`}
                    >
                      {bev}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-manrope text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                  Indicaciones adicionales (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Piel sensible, recorte de barba corta, preferencia de música..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded px-3 py-2 font-manrope text-xs text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider py-3.5 rounded shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                      <span>Confirmando con Juan Domingo...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Confirmar Reserva • {currentService.price}</span>
                    </span>
                  )}
                </button>
                <p className="text-[11px] text-center text-on-surface-variant/70 mt-2">
                  Sin pago por adelantado. Cancelación gratuita con 4 horas de preaviso.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl">done_all</span>
            </div>

            <span className="font-manrope text-[10px] font-bold text-primary tracking-[0.2em] uppercase block">
              Reserva Confirmada
            </span>
            <h3 className="font-newsreader text-3xl font-semibold text-on-surface mt-1">
              ¡Cita reservada, {confirmedData?.clientName.split(' ')[0]}!
            </h3>
            <p className="font-manrope text-xs text-on-surface-variant max-w-sm mx-auto mt-2 leading-relaxed">
              Juan Domingo le esperará puntualmente en el atelier. Hemos agendado su tratamiento en exclusiva.
            </p>

            {/* Ticket Card */}
            <div className="mt-6 p-5 bg-surface-container-low rounded-xl border border-outline-variant/40 text-left max-w-md mx-auto space-y-3 font-manrope">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <span className="text-xs text-on-surface-variant">Código de Reserva</span>
                <span className="font-mono text-sm font-bold text-primary">{confirmedData?.code}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Tratamiento</span>
                <span className="font-semibold text-on-surface">{confirmedData?.service}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Fecha & Hora</span>
                <span className="font-semibold text-on-surface">{confirmedData?.day} a las {confirmedData?.time} hs</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Cortesía de bienvenida</span>
                <span className="text-secondary font-medium">{confirmedData?.beverageChoice}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30 text-xs font-semibold">
                <span className="text-on-surface-variant">Total a abonar en el atelier</span>
                <span className="text-primary text-sm font-bold">{confirmedData?.price}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-manrope text-xs font-bold uppercase tracking-wider px-5 py-3 rounded transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Enviar por WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 bg-surface-container-high hover:bg-surface-bright text-on-surface font-manrope text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Volver al Sitio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
