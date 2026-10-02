import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { EmergencySection } from './components/EmergencySection';
import { VisualShowcaseSection } from './components/VisualShowcaseSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { Doctor } from './types/hospital';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);

  const handleOpenAppointmentModal = () => {
    setSelectedDoctor(null);
    setSelectedDepartmentId(null);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectDoctorForBooking = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDepartmentId(doctor.department);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectDepartmentForBooking = (deptId: string) => {
    setSelectedDoctor(null);
    setSelectedDepartmentId(deptId);
    setIsAppointmentModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        onOpenAppointmentModal={handleOpenAppointmentModal}
        activeSection="hero"
      />

      <main className="flex-1">
        {/* Hero Section with 16:9 Desktop & 9:16 Mobile Viewports and Negative Space Demonstration */}
        <HeroSection
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onExploreServices={handleExploreServices}
        />

        {/* Hospital Overview & Regional Trust Markers */}
        <OverviewSection />

        {/* Specialized Clinical Services & Infrastructure */}
        <ServicesSection
          onSelectDepartmentForBooking={handleSelectDepartmentForBooking}
        />

        {/* Medical Consultants & OPD Timings Directory */}
        <DoctorsSection
          onSelectDoctorForBooking={handleSelectDoctorForBooking}
        />

        {/* 24/7 Rapid Emergency & Trauma Response */}
        <EmergencySection />

        {/* Visual Identity & Architectural Case Study for Kot Addu Hospital */}
        <VisualShowcaseSection />
      </main>

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        preselectedDoctor={selectedDoctor}
        preselectedDepartmentId={selectedDepartmentId}
      />

      {/* Quiet Corporate Footer */}
      <Footer />
    </div>
  );
}
