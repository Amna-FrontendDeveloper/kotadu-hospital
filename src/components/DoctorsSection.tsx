import React, { useState } from 'react';
import { Calendar, Clock, Award, ShieldCheck, Search, Filter } from 'lucide-react';
import { CONSULTANTS, VISUAL_ASSETS } from '../data/hospitalData';
import { Doctor } from '../types/hospital';

interface DoctorsSectionProps {
  onSelectDoctorForBooking: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctorForBooking,
}) => {
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDoctors = CONSULTANTS.filter((doctor) => {
    const matchesDept = filterDepartment === 'all' || doctor.department === filterDepartment;
    const matchesQuery =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <section id="consultants" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-900 tracking-wide mb-2">
              <span>Medical Faculty & Outpatient Clinics</span>
              <span aria-hidden="true">·</span>
              <span className="font-urdu text-sm">ماہر ڈاکٹرز</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Distinguished consultants and surgical specialists
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Each consultant holds recognized PMDC licenses and FCPS/MRCP postgraduate fellowships, providing compassionate clinical care with morning and evening OPD schedules.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search doctor or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-full sm:w-60"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setFilterDepartment('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filterDepartment === 'all'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Faculty
              </button>
              <button
                onClick={() => setFilterDepartment('emergency')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filterDepartment === 'emergency'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Trauma / ER
              </button>
              <button
                onClick={() => setFilterDepartment('maternal-child')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filterDepartment === 'maternal-child'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gynae & Obs
              </button>
              <button
                onClick={() => setFilterDepartment('cardiology')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filterDepartment === 'cardiology'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cardiology
              </button>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-urdu text-slate-500">{doc.nameUrdu}</p>
                  </div>
                  {doc.availableToday ? (
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200/60">
                      In Clinic Today
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Next Clinic Tomorrow
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-sky-900 mb-3">
                  {doc.specialty}
                </div>

                <p className="text-xs text-slate-600 mb-4 line-clamp-2" title={doc.qualifications}>
                  {doc.qualifications}
                </p>

                {/* Schedule & Timing Info (Unboxed text with subtle lines) */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono tabular-nums">{doc.opdTimings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{doc.opdDays}</span>
                  </div>
                </div>
              </div>

              {/* Action & Fee Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Consultation Fee</div>
                  <div className="text-sm font-bold font-mono text-slate-900 tabular-nums">
                    PKR {doc.fee.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onSelectDoctorForBooking(doc)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-950 rounded-lg transition-colors whitespace-nowrap"
                >
                  Book OPD Slot
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <p className="text-sm text-slate-600">No consultants found matching your filter criteria.</p>
            <button
              onClick={() => {
                setFilterDepartment('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-sky-700 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
