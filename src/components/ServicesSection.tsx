import React, { useState } from 'react';
import { Activity, Heart, Baby, ShieldPlus, Stethoscope, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEPARTMENTS, VISUAL_ASSETS } from '../data/hospitalData';
import { Department } from '../types/hospital';

interface ServicesSectionProps {
  onSelectDepartmentForBooking: (deptId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectDepartmentForBooking,
}) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>('emergency');

  const selectedDept = DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'ShieldPlus':
        return <ShieldPlus className="w-5 h-5" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-900 tracking-wide mb-2">
              <span>Clinical Excellence</span>
              <span aria-hidden="true">·</span>
              <span className="font-urdu text-sm">طبی شعبہ جات</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Specialized departments equipped for advanced medical intervention
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-600 max-w-sm">
            Staffed by FCPS and UK-trained specialists with modern telemetry, digital diagnostics, and 24-hour surgical readiness.
          </p>
        </div>

        {/* Department Interactive Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {DEPARTMENTS.map((dept) => {
            const isActive = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{dept.name.split('(')[0].trim()}</span>
                {dept.emergencyAvailable && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isActive ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-700'}`}>
                    24/7
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Department Spotlight Card (Asymmetric Bento style) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Department Information (Left 7 Cols) */}
          <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-900">
                  <span className="p-2 rounded-lg bg-sky-50 text-sky-900 border border-sky-100">
                    {getIcon(selectedDept.iconName)}
                  </span>
                  <span>{selectedDept.name}</span>
                </div>
                <span className="font-urdu text-base text-slate-500">{selectedDept.nameUrdu}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                {selectedDept.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {selectedDept.description}
              </p>

              {/* Department Head */}
              <div className="mb-6 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                <span className="text-slate-500 block mb-0.5">Clinical Lead / Head of Department</span>
                <span className="font-semibold text-slate-900">{selectedDept.headOfDepartment}</span>
              </div>

              {/* Department Key Features */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Clinical Capabilities & Infrastructure
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDept.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectDepartmentForBooking(selectedDept.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-lg transition-colors shadow-sm"
              >
                <span>Book Consultation in {selectedDept.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500">
                Sehat Sahulat Card & Zakat Fund Desk Supported
              </div>
            </div>
          </div>

          {/* Department Photography & Visual Showcase (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 relative flex flex-col justify-end min-h-[320px] lg:min-h-full">
            <img
              src={
                selectedDept.id === 'emergency'
                  ? VISUAL_ASSETS.emergencyBay.path
                  : VISUAL_ASSETS.consultation.path
              }
              alt={selectedDept.name}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <div className="flex items-center gap-2 text-[11px] text-sky-300 font-mono mb-1">
                <span>Photographed on-site in Punjab</span>
                <span aria-hidden="true">·</span>
                <span>Commercial Hospital Grade</span>
              </div>
              <h4 className="text-lg font-bold text-white leading-snug">
                {selectedDept.id === 'emergency'
                  ? '24/7 Covered Ambulance Portico & Trauma Bay'
                  : 'Outpatient Doctor Consultation Suites'}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Designed for immediate triage, sterile patient reception, and dignified family care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
