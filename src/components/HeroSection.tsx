import React, { useState } from 'react';
import { Calendar, ArrowRight, Phone, Eye, Smartphone, Monitor, Sliders, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { HOSPITAL_INFO, VISUAL_ASSETS } from '../data/hospitalData';

interface HeroSectionProps {
  onOpenAppointmentModal: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAppointmentModal,
  onExploreServices,
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile' | 'raw_inspector'>('desktop');
  const [showCompositionGrid, setShowCompositionGrid] = useState(false);
  const [showTypographyOverlay, setShowTypographyOverlay] = useState(true);

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Viewport & Designer Mode Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-slate-200">Hospital Visual Preview:</span>
            <span className="hidden sm:inline">Kot Addu General Hospital, Punjab, Pakistan</span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
              <button
                onClick={() => setViewMode('desktop')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'desktop'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>16:9 Desktop Hero</span>
              </button>

              <button
                onClick={() => setViewMode('mobile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'mobile'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>9:16 Mobile Hero</span>
              </button>

              <button
                onClick={() => setViewMode('raw_inspector')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'raw_inspector'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Negative Space Inspector</span>
              </button>
            </div>

            {/* Overlay toggle */}
            <button
              onClick={() => setShowTypographyOverlay(!showTypographyOverlay)}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs border transition-colors ${
                showTypographyOverlay
                  ? 'border-sky-500/50 bg-sky-950/40 text-sky-300'
                  : 'border-slate-700 bg-slate-900 text-slate-400'
              }`}
              title="Toggle website typography to inspect raw image composition"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{showTypographyOverlay ? 'Typography: ON' : 'Typography: OFF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODE 1: DESKTOP 16:9 VIEW */}
      {viewMode === 'desktop' && (
        <div className="relative min-h-[580px] lg:min-h-[660px] flex items-center">
          {/* Background 16:9 Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={VISUAL_ASSETS.heroDesktop.path}
              alt="Modern Pakistani hospital building exterior in Kot Addu Punjab during golden morning light"
              className="w-full h-full object-cover object-right lg:object-center"
              referrerPolicy="no-referrer"
            />
            {/* Measured Scrim: Deep gradient on left to leverage the designed negative space while keeping right architectural entrance crisp */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />

            {/* Composition Rule of Thirds Guide (Optional toggle) */}
            {showCompositionGrid && (
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none border border-sky-400/30">
                <div className="border-r border-b border-sky-400/20 bg-sky-950/10 flex items-start p-2 text-[10px] text-sky-400 font-mono">
                  Designated Negative Space
                </div>
                <div className="border-r border-b border-sky-400/20"></div>
                <div className="border-b border-sky-400/20 bg-emerald-950/10 flex items-start p-2 text-[10px] text-emerald-400 font-mono">
                  Hospital Portico Entrance
                </div>
                <div className="border-r border-b border-sky-400/20"></div>
                <div className="border-r border-b border-sky-400/20"></div>
                <div className="border-b border-sky-400/20"></div>
                <div className="border-r border-sky-400/20"></div>
                <div className="border-r border-sky-400/20"></div>
                <div></div>
              </div>
            )}
          </div>

          {/* Foreground Content: Placed specifically within the designated negative space on the left */}
          {showTypographyOverlay ? (
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
              <div className="max-w-2xl">
                {/* Regional Credential Line (Unboxed text with dots) */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-200 font-medium mb-4">
                  <span className="flex items-center gap-1.5 text-sky-300">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    Kot Addu, Punjab, Pakistan
                  </span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-emerald-300 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    PHC Registered
                  </span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-300">PMDC Accredited</span>
                </div>

                {/* Urdu Primary Wordmark */}
                <p className="text-sm sm:text-base font-urdu text-sky-200/90 mb-2">
                  کوٹ ادو جنرل ہسپتال و میڈیکل کمپلیکس
                </p>

                {/* Primary Hospital Name & Value Proposition */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance mb-4 leading-tight">
                  Kot Addu General Hospital
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-xl">
                  Providing modern healthcare, 24/7 emergency trauma response, advanced hemodialysis, and specialized maternal clinics to the families of Kot Addu and Southern Punjab.
                </p>

                {/* Call to Actions (In strict single-line controls) */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                  <button
                    onClick={onOpenAppointmentModal}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-sky-50 rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap group"
                  >
                    <Calendar className="w-4 h-4 text-sky-700" />
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onExploreServices}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap backdrop-blur-sm"
                  >
                    <span>Explore Our Services</span>
                  </button>

                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-rose-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-rose-500 animate-bounce" />
                    <span className="tabular-nums">ER: {HOSPITAL_INFO.emergencyPhone}</span>
                  </a>
                </div>

                {/* Quantitative Trust Markers (Clean unboxed editorial styling) */}
                <div className="pt-6 border-t border-slate-700/60 grid grid-cols-3 gap-4 max-w-lg text-slate-300">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">24/7</div>
                    <div className="text-xs text-slate-400 mt-0.5">Emergency & Trauma Care</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">160+</div>
                    <div className="text-xs text-slate-400 mt-0.5">Operational Inpatient Beds</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tabular-nums">100%</div>
                    <div className="text-xs text-slate-400 mt-0.5">Sehat Card Accepted</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full flex items-end justify-between pointer-events-none">
              <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-lg border border-slate-700 pointer-events-auto text-xs text-slate-300 max-w-md">
                <span className="font-semibold text-white block mb-1">Raw 16:9 Composition Preview</span>
                Notice the expansive left-side negative space in the architectural composition, allowing clean website typography without obscuring the hospital entrance or medical staff.
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: MOBILE 9:16 SIMULATOR */}
      {viewMode === 'mobile' && (
        <div className="py-10 px-4 flex flex-col items-center justify-center bg-slate-950 min-h-[660px]">
          <div className="text-center mb-6 max-w-md">
            <span className="text-xs uppercase tracking-wider text-sky-400 font-mono font-semibold">
              9:16 Vertical Mobile Composition
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Mobile Smartphone Viewport Hero
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Architecture concentrated in central-lower portion with generous negative space in the upper portion for mobile header & CTA.
            </p>
          </div>

          {/* Smartphone Frame Simulation */}
          <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-[36px] overflow-hidden border-[6px] border-slate-700 shadow-2xl bg-slate-900">
            {/* Dynamic Island / Speaker notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-30" />

            {/* 9:16 Mobile Image Asset */}
            <div className="absolute inset-0 z-0">
              <img
                src={VISUAL_ASSETS.heroMobile.path}
                alt="Kot Addu Punjab Pakistan hospital mobile hero visual"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Gradient for upper negative space text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-slate-950/70" />
            </div>

            {/* Mobile Header & Content in designated upper negative space */}
            {showTypographyOverlay && (
              <div className="relative z-10 h-full flex flex-col justify-between p-5 pt-10 text-white">
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] text-sky-300">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Kot Addu, Punjab
                    </span>
                    <span className="font-urdu text-xs">کوٹ ادو جنرل ہسپتال</span>
                  </div>

                  <h3 className="text-xl font-bold font-display leading-tight text-white text-balance">
                    Kot Addu General Hospital
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    Modern 24/7 healthcare facility providing comprehensive trauma, dialysis, and maternal care.
                  </p>

                  <div className="flex flex-col gap-2 mt-4">
                    <button
                      onClick={onOpenAppointmentModal}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-slate-900 bg-white hover:bg-sky-50 rounded-lg shadow text-center whitespace-nowrap"
                    >
                      Book OPD Appointment
                    </button>
                    <a
                      href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                      className="w-full py-2 px-3 text-xs font-semibold text-rose-300 bg-rose-950/70 border border-rose-600/40 rounded-lg text-center flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-rose-400" />
                      <span>24/7 ER: {HOSPITAL_INFO.emergencyPhone}</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Trust Tag on Mobile */}
                <div className="pb-4">
                  <div className="bg-slate-950/75 backdrop-blur-md rounded-lg p-2.5 border border-slate-700/80 text-[10px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-medium">✓ Sehat Sahulat Card</span>
                      <span className="text-slate-400 font-mono">160 Beds</span>
                    </div>
                    <div className="text-slate-400 mt-0.5">
                      Main Highway, Kot Addu · Rescue 1122 Link
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 3: RAW INSPECTOR & COMPOSITION GUIDE */}
      {viewMode === 'raw_inspector' && (
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Art Director & Design System Inspector
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Visual Composition & Negative Space Analysis
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Reviewing the photographic assets created specifically for the Kot Addu hospital website without typography obscuring the architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* 16:9 Desktop Asset Card */}
            <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-4">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-white">Desktop 16:9 Primary Hero Visual</span>
                <span className="text-sky-400 font-mono">16:9 Aspect Ratio · Landscape</span>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 group">
                <img
                  src={VISUAL_ASSETS.heroDesktop.path}
                  alt="16:9 Pakistan Hospital Hero"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-sky-950/10 pointer-events-none" />
                {/* Visual guideline overlay */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-sky-300 text-[11px] px-2.5 py-1 rounded border border-slate-700">
                  Left Negative Space (Preserved for Brand + CTA)
                </div>
                <div className="absolute bottom-3 right-3 bg-emerald-950/90 text-emerald-300 text-[11px] px-2.5 py-1 rounded border border-emerald-800">
                  Modern Pakistani Architecture & Portico
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Environment</span>
                  <span className="font-medium text-slate-200">Kot Addu, Punjab</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Natural Light</span>
                  <span className="font-medium text-slate-200">Golden Morning Sun</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Signage In Image</span>
                  <span className="font-medium text-emerald-400">Zero (Clean Asset)</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Architectural Style</span>
                  <span className="font-medium text-slate-200">Punjab Modernist</span>
                </div>
              </div>
            </div>

            {/* 9:16 Mobile Asset Card & Palette */}
            <div className="space-y-6">
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white">Mobile 9:16 Asset</span>
                  <span className="text-sky-400 font-mono">9:16 Vertical</span>
                </div>
                <div className="relative aspect-[9/16] max-h-80 mx-auto rounded-lg overflow-hidden border border-slate-800">
                  <img
                    src={VISUAL_ASSETS.heroMobile.path}
                    alt="9:16 Mobile Hospital Visual"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/90 text-sky-300 text-[10px] px-2 py-0.5 rounded border border-slate-700">
                    Upper Negative Space
                  </div>
                </div>
              </div>

              {/* Color System Swatches */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 text-xs">
                <span className="font-semibold text-white block mb-2">Hospital Color Palette</span>
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-8 rounded bg-white border border-slate-300"></div>
                    <span className="text-[10px] text-slate-400 mt-1">Clinical White</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-8 rounded bg-sky-500"></div>
                    <span className="text-[10px] text-slate-400 mt-1">Soft Blue</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-8 rounded bg-slate-900 border border-slate-700"></div>
                    <span className="text-[10px] text-slate-400 mt-1">Deep Navy</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-8 rounded bg-emerald-600"></div>
                    <span className="text-[10px] text-slate-400 mt-1">Subtle Green</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
