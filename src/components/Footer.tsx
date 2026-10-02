import React from 'react';
import { Phone, MapPin, ShieldCheck, Mail } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & Regional Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-sky-700 flex items-center justify-center text-white font-bold text-sm">
                +
              </div>
              <span className="text-lg font-bold text-white font-display">
                {HOSPITAL_INFO.name}
              </span>
            </div>
            <p className="text-sm font-urdu text-slate-300 mb-3">
              کوٹ ادو جنرل ہسپتال و میڈیکل کمپلیکس، پنجاب، پاکستان
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              A modern multi-specialty healthcare institution dedicated to the population of Kot Addu, Taunsa, and Southern Punjab. Delivering 24/7 trauma emergency, specialized maternal and pediatric care, high-acuity intensive care, and advanced hemodialysis.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                {HOSPITAL_INFO.phcRegistration}
              </span>
              <span aria-hidden="true">·</span>
              <span>PMDC Certified Specialists</span>
            </div>
          </div>

          {/* Col 2: Hospital Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Hospital Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#emergency" className="hover:text-white transition-colors">
                  24/7 Emergency & Trauma Bay
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Nephrology & Hemodialysis
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Maternal & Neonatal Wing (MCH)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  128-Slice CT Scan & 24/7 Lab
                </a>
              </li>
              <li>
                <a href="#consultants" className="hover:text-white transition-colors">
                  Outpatient OPD Schedule
                </a>
              </li>
              <li>
                <a href="#visual-case" className="hover:text-white transition-colors text-sky-400">
                  Visual Design Case Study
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Emergency */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Emergency & Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>24/7 ER: <span className="font-mono text-white font-bold">{HOSPITAL_INFO.emergencyPhone}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>OPD Helpline: <span className="font-mono text-white">{HOSPITAL_INFO.opdHelpline}</span></span>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                Rescue 1122 Interconnected · Ambulance Portico Access
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Kot Addu General Hospital & Medical Complex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Punjab Healthcare Commission Standards</span>
            <span aria-hidden="true">·</span>
            <span>Universal Sehat Sahulat Program</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
