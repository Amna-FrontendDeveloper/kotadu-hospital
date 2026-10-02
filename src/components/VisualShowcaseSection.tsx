import React, { useState } from 'react';
import { Camera, Layers, CheckCircle2, Maximize2, X, Download } from 'lucide-react';
import { VISUAL_ASSETS } from '../data/hospitalData';

export const VisualShowcaseSection: React.FC = () => {
  const [activeAssetModal, setActiveAssetModal] = useState<string | null>(null);

  const assetsList = [
    {
      id: 'desktop',
      title: '16:9 Landscape Desktop Hero Visual',
      aspectRatio: '16:9',
      image: VISUAL_ASSETS.heroDesktop.path,
      tag: 'Primary Web Hero',
      description:
        'Captured during early-morning golden hour light in Punjab. Clean architectural lines with modern entrance portico, emergency bay, and generous left negative space reserved for hospital typography.',
      details: [
        'Natural golden hour illumination without CGI gloss',
        'Authentic Pakistani architectural identity (Punjab modernist)',
        'South Asian doctors in coats and families in natural modest attire',
        'Zero text, logos, or artificial typography in the image'
      ]
    },
    {
      id: 'mobile',
      title: '9:16 Portrait Smartphone Hero Visual',
      aspectRatio: '9:16',
      image: VISUAL_ASSETS.heroMobile.path,
      tag: 'Mobile Hero Screen',
      description:
        'Vertical composition optimized for mobile web viewports. Entrance concentrated in the central-lower portion with the upper third preserved as negative space for header and CTAs.',
      details: [
        'Central architectural focal point with clean sky upper portion',
        'Crisp morning daylight with authentic soft blue tones',
        'Preserved touch-friendly negative space on mobile displays',
        'No digital watermarks, signs, or fake branding'
      ]
    },
    {
      id: 'consultation',
      title: '4:3 Clinical OPD Consultation Visual',
      aspectRatio: '4:3',
      image: VISUAL_ASSETS.consultation.path,
      tag: 'Doctor-Patient Care',
      description:
        'Documentary photograph of an outpatient consultation room with a Pakistani senior physician consulting with a family in Kot Addu.',
      details: [
        'Natural examination desk daylight and clinical diagnostic tools',
        'Dignified, warm, and authentic doctor-patient consultation',
        'Modest South Asian attire and realistic hospital setting',
        'Clean high-clarity photography without artificial filters'
      ]
    },
    {
      id: 'emergency',
      title: '4:3 Trauma & Ambulance Drop-off Visual',
      aspectRatio: '4:3',
      image: VISUAL_ASSETS.emergencyBay.path,
      tag: '24/7 Emergency Care',
      description:
        'Covered trauma bay and emergency response ambulance with Pakistani emergency medical staff in uniform ready for triage.',
      details: [
        'Clean architectural canopy drop-off for rapid triage',
        'Rescue-ready emergency vehicle and professional medical team',
        'Realistic Punjab healthcare infrastructure and lighting',
        'Photorealistic textures with commercial commercial grade dynamic range'
      ]
    }
  ];

  const activeModalData = assetsList.find((a) => a.id === activeAssetModal);

  return (
    <section id="visual-case" className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-900 tracking-wide mb-2">
            <Camera className="w-4 h-4 text-sky-700" />
            <span>Architectural Photography & Web Case Study</span>
            <span aria-hidden="true">·</span>
            <span>Kot Addu, Punjab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display text-balance">
            Visual identity designed for the Kot Addu hospital digital presence
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every visual has been crafted according to strict professional healthcare photography standards: authentic Pakistani architectural context, modest South Asian attire, natural morning lighting, and deliberate negative space engineered for website typography and CTAs.
          </p>
        </div>

        {/* 4-Item Asset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {assetsList.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-sky-300 transition-all"
            >
              <div>
                {/* Visual Header */}
                <div className="relative group cursor-pointer" onClick={() => setActiveAssetModal(asset.id)}>
                  <div className={`w-full overflow-hidden bg-slate-900 ${asset.aspectRatio === '9:16' ? 'aspect-[16/10] sm:aspect-video' : 'aspect-video'}`}>
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-[11px] font-mono px-2.5 py-1 rounded border border-slate-700">
                    {asset.aspectRatio} · {asset.tag}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAssetModal(asset.id);
                    }}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-white hover:bg-slate-900 transition-colors shadow-sm"
                    title="Inspect Full Image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-sky-800 font-semibold mb-1">{asset.tag}</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2">{asset.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {asset.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {asset.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Status: Production Ready</span>
                <button
                  onClick={() => setActiveAssetModal(asset.id)}
                  className="font-semibold text-sky-900 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>Inspect Asset Details</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Specification Summary Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-base font-bold text-slate-900 mb-4">
            Technical Design Compliance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block mb-1 font-mono">Location Grounding</span>
              <span className="font-semibold text-slate-900">Kot Addu, Punjab, Pakistan</span>
              <p className="text-[11px] text-slate-500 mt-1">Realistic regional architecture, not generic Western or futuristic.</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block mb-1 font-mono">Negative Space Layout</span>
              <span className="font-semibold text-slate-900">Engineered for Typography</span>
              <p className="text-[11px] text-slate-500 mt-1">16:9 left negative space; 9:16 upper third negative space.</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block mb-1 font-mono">Color Palette Harmony</span>
              <span className="font-semibold text-slate-900">White, Soft Blue, Deep Navy</span>
              <p className="text-[11px] text-slate-500 mt-1">Subtle green accents with natural golden-hour illumination.</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block mb-1 font-mono">Branding Discipline</span>
              <span className="font-semibold text-slate-900">Zero Artificial Text in Visuals</span>
              <p className="text-[11px] text-slate-500 mt-1">No fake signs, watermarks, or mock logos inside the image.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal Inspector */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <h4 className="text-sm font-bold font-display">{activeModalData.title}</h4>
                <span className="text-xs text-slate-400 font-mono">
                  Aspect Ratio: {activeModalData.aspectRatio} · Kot Addu, Punjab
                </span>
              </div>
              <button
                onClick={() => setActiveAssetModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto flex items-center justify-center bg-black/60">
              <img
                src={activeModalData.image}
                alt={activeModalData.title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-xl text-slate-400">
                {activeModalData.description}
              </p>
              <button
                onClick={() => setActiveAssetModal(null)}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
