/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ATELIER_INFO } from '../data/barberData';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (view: 'inicio' | 'servicios', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-outline-variant/20">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ATELIER_INFO.logoUrl}
                alt="Juan Domingo Logo"
                className="h-8 w-auto object-contain opacity-90"
              />
              <div>
                <span className="font-newsreader text-base font-semibold text-on-surface block leading-none">
                  Juan Domingo
                </span>
                <span className="font-manrope text-[9px] text-primary tracking-[0.16em] uppercase font-bold block mt-0.5">
                  Atelier & Barbería
                </span>
              </div>
            </div>
            <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">
              Atelier de autor dedicado al cuidado masculino, navaja clásica, corte personalizado y calma sensorial en Villa Carlos Paz.
            </p>
          </div>

          {/* Horario de Atención */}
          <div className="space-y-3">
            <h4 className="font-manrope text-sm font-semibold text-on-surface tracking-normal">
              Horario de Atención
            </h4>
            <div className="font-manrope text-xs space-y-2">
              <p className="text-on-surface flex justify-between border-b border-outline-variant/10 pb-1">
                <span>Martes a Viernes</span>
                <span className="text-primary font-medium">10:00 — 20:00</span>
              </p>
              <p className="text-on-surface flex justify-between border-b border-outline-variant/10 pb-1">
                <span>Sábados</span>
                <span className="text-primary font-medium">09:30 — 18:00</span>
              </p>
              <p className="text-on-surface-variant/70 flex justify-between pb-1">
                <span>Domingos y Lunes</span>
                <span className="italic">Cerrado</span>
              </p>
            </div>
          </div>

          {/* Ubicación y Contacto */}
          <div className="space-y-3">
            <h4 className="font-manrope text-sm font-semibold text-on-surface tracking-normal">
              Ubicación y Contacto
            </h4>
            <div className="font-manrope text-xs space-y-2.5">
              <p className="text-on-surface flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base select-none shrink-0">
                  location_on
                </span>
                <span className="leading-snug">{ATELIER_INFO.address}</span>
              </p>
              <p className="text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base select-none shrink-0">
                  call
                </span>
                <span>{ATELIER_INFO.phone}</span>
              </p>
              <p className="text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base select-none shrink-0">
                  chat
                </span>
                <span>WhatsApp: {ATELIER_INFO.whatsapp}</span>
              </p>
            </div>
          </div>

          {/* Reservas y Redes */}
          <div className="space-y-3">
            <h4 className="font-manrope text-sm font-semibold text-on-surface tracking-normal">
              Reservas y Redes
            </h4>
            <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">
              Atención bajo cita previa para garantizar la exclusividad del espacio y tiempo.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider py-2.5 rounded transition-all shadow-sm"
              >
                Reservar Cita Online
              </button>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Juan Domingo"
                className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-base">photo_camera</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ATELIER_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ubicación en Google Maps"
                className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-base">map</span>
              </a>
              <a
                href={`mailto:contacto@juandomingo.com`}
                aria-label="Contacto por correo electrónico"
                className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant/70 font-manrope text-xs">
          <p>© 2026 Juan Domingo Atelier de Peluquería y Barbería. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 font-manrope text-xs">
            <button onClick={() => onNavigate('inicio')} className="hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => onNavigate('servicios')} className="hover:text-primary transition-colors">
              Tarifas
            </button>
            <a href="#contacto" className="hover:text-primary transition-colors">
              Condiciones de Reserva
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
