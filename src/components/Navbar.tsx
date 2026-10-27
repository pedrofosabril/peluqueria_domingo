/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ATELIER_INFO } from '../data/barberData';

interface NavbarProps {
  currentView: 'inicio' | 'servicios';
  onNavigate: (view: 'inicio' | 'servicios', sectionId?: string) => void;
  onOpenBooking: (serviceName?: string, price?: string, duration?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'inicio' | 'servicios', sectionId?: string) => {
    onNavigate(view, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-surface-container-lowest/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            src={ATELIER_INFO.logoUrl}
            alt="Juan Domingo Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-newsreader text-base font-semibold text-on-surface tracking-wide block leading-none">
              Juan Domingo
            </span>
            <span className="font-manrope text-[10px] text-primary tracking-[0.18em] uppercase font-bold block mt-1">
              Atelier & Barbería
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`font-manrope text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
              currentView === 'inicio'
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Inicio
            {currentView === 'inicio' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('servicios')}
            className={`font-manrope text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
              currentView === 'servicios'
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Servicios y Tarifas
            {currentView === 'servicios' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('inicio', 'experiencia')}
            className="font-manrope text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1"
          >
            Filosofía
          </button>

          <button
            onClick={() => handleNavClick('inicio', 'maestro')}
            className="font-manrope text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1"
          >
            El Maestro
          </button>

          <button
            onClick={() => handleNavClick('inicio', 'testimonios')}
            className="font-manrope text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1"
          >
            Reseñas
          </button>

          <button
            onClick={() => handleNavClick('inicio', 'contacto')}
            className="font-manrope text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1"
          >
            Ubicación
          </button>
        </nav>

        {/* Right Action: Pedir Cita Online */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-md transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="material-symbols-outlined mr-1.5 text-base">calendar_today</span>
            <span>Pedir Cita</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-b border-outline-variant/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-manrope text-sm font-semibold tracking-wider uppercase">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`text-left py-2 px-3 rounded transition-colors ${
                currentView === 'inicio' ? 'bg-surface-container text-primary' : 'text-on-surface'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className={`text-left py-2 px-3 rounded transition-colors ${
                currentView === 'servicios' ? 'bg-surface-container text-primary' : 'text-on-surface'
              }`}
            >
              Servicios y Tarifas
            </button>
            <button
              onClick={() => handleNavClick('inicio', 'experiencia')}
              className="text-left py-2 px-3 rounded text-on-surface hover:bg-surface-container transition-colors"
            >
              Filosofía Atelier
            </button>
            <button
              onClick={() => handleNavClick('inicio', 'maestro')}
              className="text-left py-2 px-3 rounded text-on-surface hover:bg-surface-container transition-colors"
            >
              El Maestro Barbero
            </button>
            <button
              onClick={() => handleNavClick('inicio', 'testimonios')}
              className="text-left py-2 px-3 rounded text-on-surface hover:bg-surface-container transition-colors"
            >
              Reseñas de Clientes
            </button>
            <button
              onClick={() => handleNavClick('inicio', 'contacto')}
              className="text-left py-2 px-3 rounded text-on-surface hover:bg-surface-container transition-colors"
            >
              Contacto y Horarios
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider py-3 rounded shadow-md transition-all"
            >
              <span className="material-symbols-outlined mr-2 text-base">calendar_today</span>
              <span>Reservar Cita Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
