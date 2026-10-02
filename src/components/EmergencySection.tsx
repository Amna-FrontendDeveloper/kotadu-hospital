import React from 'react';
import { Phone, AlertCircle, Clock, ShieldAlert, Navigation } from 'lucide-react';
import { HOSPITAL_INFO, VISUAL_ASSETS } from '../data/hospitalData';

export const EmergencySection: React.FC = () => {
  return (
    <section id="emergency" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-rose-950/20 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Emergency Protocols (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-900/60 border border-rose-700/60 text-xs font-semibold text-rose-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>24/7 Rapid Emergency & Trauma Response</span>
              <span aria-hidden="true">·</span>
              <span className="font-urdu">ایمرجنسی و حادثات</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display text-balance mb-4">
              Immediate life-saving clinical intervention in Kot Addu
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Strategically situated on the main Multan-Mianwali highway corridor, our emergency department is directly linked with Punjab Rescue 1122 dispatch. We maintain continuous readiness for road traffic accidents, acute cardiac events, surgical emergencies, and maternal crises.
            </p>

            {/* Emergency Hotline Banner */}
            <div className="p-6 rounded-2xl bg-rose-950/70 border border-rose-800/80 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-rose-300 block font-medium">Direct Emergency Trauma Hotline (Kot Addu)</span>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-wide">
                  {HOSPITAL_INFO.emergencyPhone}
                </span>
                <div className="text-xs text-rose-300/80 mt-1">
                  Rescue 1122 Interconnected · 24 Hours Active
                </div>
              </div>

              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-900/40 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Now</span>
              </a>
            </div>

            {/* Triage Protocol Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
                <div className="text-rose-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Red: Immediate
                </div>
                <p className="text-slate-300">
                  Cardiac arrest, severe trauma, shock, active hemorrhage. Instant resuscitation bay transfer.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
                <div className="text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Yellow: Urgent
                </div>
                <p className="text-slate-300">
                  Compound fractures, severe pain, respiratory distress. Evaluated within 15 minutes.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
                <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Green: Standard
                </div>
                <p className="text-slate-300">
                  Minor lacerations, sprains, moderate fevers. OPD and urgent clinic routing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual of Ambulance Bay & Drop-off (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative">
              <div className="aspect-[4/3] relative">
                <img
                  src={VISUAL_ASSETS.emergencyBay.path}
                  alt="Modern Pakistani Hospital Emergency and Ambulance Drop-off"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-slate-950/90 text-white text-[11px] font-mono px-2.5 py-1 rounded border border-slate-700">
                  Covered Trauma Portico
                </div>
              </div>

              <div className="p-5 text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Ambulance Drop-off Lane</span>
                  <span className="font-semibold text-white">Direct Barrier-Free Entry</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Emergency On-Duty Doctors</span>
                  <span className="font-semibold text-emerald-400">2 Resident Physicians + 4 Nurses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">On-Site Blood Cross-Match</span>
                  <span className="font-semibold text-sky-400">24/7 Screening Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
