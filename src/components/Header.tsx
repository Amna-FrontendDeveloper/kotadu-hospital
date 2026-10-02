import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded bg-sky-900 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              +
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-display group-hover:text-sky-900 transition-colors">
                Kot Addu General Hospital
              </span>
              <span className="text-[11px] text-slate-500 font-urdu -mt-1 hidden sm:block">
                کوٹ ادو جنرل ہسپتال
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-sky-900 transition-colors">
              Hospital Overview
            </a>
            <a href="#services" className="hover:text-sky-900 transition-colors">
              Specialized Services
            </a>
            <a href="#consultants" className="hover:text-sky-900 transition-colors">
              Doctors & OPD
            </a>
            <a href="#emergency" className="hover:text-sky-900 transition-colors flex items-center gap-1.5 text-rose-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
              Emergency 24/7
            </a>
            <a href="#visual-case" className="hover:text-sky-900 transition-colors">
              Visual Case Study
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-800 bg-rose-50 border border-rose-200/80 rounded-lg hover:bg-rose-100 transition-colors whitespace-nowrap"
              title="Emergency Trauma Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span className="hidden sm:inline">ER:</span>
              <span className="tabular-nums font-mono">{HOSPITAL_INFO.emergencyPhone}</span>
            </a>

            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book OPD Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
