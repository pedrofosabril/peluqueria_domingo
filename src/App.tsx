/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ATELIER_INFO } from './data/barberData';

export default function App() {
  const [currentView, setCurrentView] = useState<'inicio' | 'servicios'>('inicio');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingContext, setBookingContext] = useState<{
    serviceName?: string;
    price?: string;
    duration?: string;
  }>({});

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenBooking = (serviceName?: string, price?: string, duration?: string) => {
    setBookingContext({ serviceName, price, duration });
    setIsBookingOpen(true);
  };

  const handleNavigate = (view: 'inicio' | 'servicios', sectionId?: string) => {
    if (view !== currentView) {
      setCurrentView(view);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-manrope text-on-surface selection:bg-primary selection:text-on-primary">
      {/* Top Brand Notice Bar */}
      <div className="bg-surface-container-lowest border-b border-outline-variant/20 px-4 py-2 text-center text-[11px] font-manrope text-on-surface-variant flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Atelier Juan Domingo • Villa Carlos Paz
        </span>
        <span className="hidden sm:inline text-outline-variant">•</span>
        <span className="hidden sm:inline">Atención exclusiva con cita previa</span>
        <span className="hidden md:inline text-outline-variant">•</span>
        <a
          href={`tel:${ATELIER_INFO.phone.replace(/\s+/g, '')}`}
          className="hidden md:inline hover:text-primary transition-colors font-medium"
        >
          {ATELIER_INFO.phone}
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentView === 'inicio' ? (
          <HomeView
            onNavigateToServices={() => setCurrentView('servicios')}
            onOpenBooking={handleOpenBooking}
          />
        ) : (
          <ServicesView
            onOpenBookingModal={handleOpenBooking}
          />
        )}
      </main>

      {/* Main Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingContext.serviceName}
        initialPrice={bookingContext.price}
        initialDuration={bookingContext.duration}
      />

      {/* Mobile Floating Booking Bar */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="bg-primary hover:bg-primary-fixed text-on-primary font-manrope text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-primary-fixed"
        >
          <span className="material-symbols-outlined text-lg">calendar_today</span>
          <span>Pedir Cita</span>
        </button>
      </div>
    </div>
  );
}
