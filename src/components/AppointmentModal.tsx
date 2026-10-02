import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, CreditCard, ShieldCheck } from 'lucide-react';
import { CONSULTANTS, DEPARTMENTS, HOSPITAL_INFO } from '../data/hospitalData';
import { Doctor } from '../types/hospital';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: Doctor | null;
  preselectedDepartmentId?: string | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor,
  preselectedDepartmentId,
}) => {
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [cnicNumber, setCnicNumber] = useState('');
  const [departmentId, setDepartmentId] = useState(
    preselectedDoctor?.department || preselectedDepartmentId || 'emergency'
  );
  const [doctorId, setDoctorId] = useState(preselectedDoctor?.id || CONSULTANTS[0].id);
  const [appointmentDate, setAppointmentDate] = useState('2026-10-05');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 10:30 AM');
  const [coverageType, setCoverageType] = useState<'private' | 'sehat_card' | 'welfare'>('sehat_card');
  const [symptoms, setSymptoms] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    token: string;
    doctorName: string;
    specialty: string;
    patientName: string;
    date: string;
    slot: string;
    coverage: string;
  } | null>(null);

  if (!isOpen) return null;

  const currentDeptDoctors = CONSULTANTS.filter(
    (doc) => departmentId === 'all' || doc.department === departmentId
  );

  const selectedDoctor = CONSULTANTS.find((doc) => doc.id === doctorId) || CONSULTANTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !contactNumber.trim()) return;

    const token = `KAGH-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedBooking({
      token,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      patientName,
      date: appointmentDate,
      slot: timeSlot,
      coverage:
        coverageType === 'sehat_card'
          ? 'Sehat Sahulat Card (Universal Health Coverage)'
          : coverageType === 'welfare'
          ? 'Patient Welfare & Zakat Desk'
          : 'Private Self-Pay',
    });
  };

  const handleResetAndClose = () => {
    setSubmittedBooking(null);
    setPatientName('');
    setContactNumber('');
    setCnicNumber('');
    setSymptoms('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs text-sky-300 font-mono">OPD Appointment Desk</span>
            <h3 className="text-lg font-bold font-display">Book Outpatient Consultation</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedBooking ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-1">
              Appointment Token Confirmed
            </span>
            <h4 className="text-2xl font-bold text-slate-900 font-display mb-1">
              Token #{submittedBooking.token}
            </h4>
            <p className="text-xs font-urdu text-slate-500 mb-6">
              آپ کا ٹوکن نمبر محفوظ کر لیا گیا ہے۔
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2.5 mb-6">
              <div className="flex justify-between pb-2 border-b border-slate-200/80">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.patientName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200/80">
                <span className="text-slate-500">Consultant:</span>
                <span className="font-semibold text-slate-900">{submittedBooking.doctorName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200/80">
                <span className="text-slate-500">Specialty:</span>
                <span className="font-medium text-sky-900">{submittedBooking.specialty}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200/80">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-mono text-slate-900">{submittedBooking.date} · {submittedBooking.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Coverage:</span>
                <span className="font-semibold text-emerald-700">{submittedBooking.coverage}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Please present your CNIC and Sehat Card (if applicable) at the OPD Counter 15 minutes before your slot. For emergency arrivals, visit the 24/7 Trauma Bay directly.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-sky-950 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Department Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Select Clinical Department
              </label>
              <select
                value={departmentId}
                onChange={(e) => {
                  setDepartmentId(e.target.value);
                  const firstDoc = CONSULTANTS.find((d) => d.department === e.target.value);
                  if (firstDoc) setDoctorId(firstDoc.id);
                }}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.nameUrdu})
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Select Consultant Doctor
              </label>
              <select
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {currentDeptDoctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} - {doc.specialty} ({doc.opdTimings})
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Aslam"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* CNIC (Optional for Sehat Card) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CNIC Number (National ID for Sehat Card Verification)
              </label>
              <input
                type="text"
                placeholder="32303-XXXXXXX-X (Optional)"
                value={cnicNumber}
                onChange={(e) => setCnicNumber(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
              />
            </div>

            {/* Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  min="2026-10-02"
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  OPD Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="09:00 AM - 09:30 AM">Morning: 09:00 AM – 09:30 AM</option>
                  <option value="10:00 AM - 10:30 AM">Morning: 10:00 AM – 10:30 AM</option>
                  <option value="11:30 AM - 12:00 PM">Morning: 11:30 AM – 12:00 PM</option>
                  <option value="05:00 PM - 05:30 PM">Evening: 05:00 PM – 05:30 PM</option>
                  <option value="06:30 PM - 07:00 PM">Evening: 06:30 PM – 07:00 PM</option>
                </select>
              </div>
            </div>

            {/* Coverage Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Payment & Health Card Coverage
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCoverageType('sehat_card')}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                    coverageType === 'sehat_card'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="font-semibold text-emerald-800">Sehat Card</div>
                  <div className="text-[10px] text-slate-500">Free treatment</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCoverageType('private')}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                    coverageType === 'private'
                      ? 'border-sky-600 bg-sky-50 text-sky-950 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="font-semibold text-sky-900">Private / Cash</div>
                  <div className="text-[10px] text-slate-500">OPD counter</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCoverageType('welfare')}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${
                    coverageType === 'welfare'
                      ? 'border-amber-600 bg-amber-50 text-amber-950 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="font-semibold text-amber-900">Zakat Desk</div>
                  <div className="text-[10px] text-slate-500">Welfare support</div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-sky-950 text-white font-semibold rounded-lg text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Confirm OPD Appointment Slot</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Emergency cases do not require appointment bookings. Please visit the 24/7 Trauma Bay directly.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
