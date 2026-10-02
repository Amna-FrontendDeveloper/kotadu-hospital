import React from 'react';
import { ShieldCheck, HeartPulse, Building2, SunMedium, Users2, Check } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-900 tracking-wide mb-2">
            <span>Hospital Overview & Regional Identity</span>
            <span aria-hidden="true">·</span>
            <span className="font-urdu text-sm">کوٹ ادو پنجاب</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display text-balance">
            A trusted medical complex designed for Kot Addu and Southern Punjab families
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Established on the Main Multan-Mianwali Highway, Kot Addu General Hospital bridges critical healthcare gaps in the district by providing multi-specialty inpatient care, round-the-clock emergency surgical intervention, advanced dialysis, and specialized mother-and-child facilities.
          </p>
        </div>

        {/* 3-Column Core Capabilities Grid with Asymmetric Presence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-900 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Punjab Healthcare Commission Certified
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Fully compliant with Punjab Healthcare Commission standards (Reg: {HOSPITAL_INFO.phcRegistration}) ensuring sterile operating suites, patient rights, and rigorous infection control.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Universal Sehat Sahulat Card Accepted</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-900 mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              High-Acuity ICU, CCU & Neonatal Care
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Equipped with 18 monitored intensive care beds, central oxygen manifolds, modern ventilators, and dedicated NICU incubators for premature and fragile newborns.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Full-time Critical Care Staff On Duty</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 mb-4">
              <SunMedium className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Uninterrupted 24/7 Power & Clean Infrastructure
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Tailored for Kot Addu's intense summer climate with a dedicated 200kVA commercial solar array and heavy backup generator ensuring zero downtime for life-support systems.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Reverse Osmosis Filtered Drinking Stations</span>
            </div>
          </div>
        </div>

        {/* Regional Healthcare Metrics Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                160 Beds
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Secondary & Tertiary Capacity
              </div>
            </div>

            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-300 tabular-nums">
                14 Stations
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Fresenius Hemodialysis Unit
              </div>
            </div>

            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 tabular-nums">
                &lt; 5 mins
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Emergency Triage Response
              </div>
            </div>

            <div className="sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                320,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Patients Served in Kot Addu District
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
