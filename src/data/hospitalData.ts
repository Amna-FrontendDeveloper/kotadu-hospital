import { Doctor, Department } from '../types/hospital';

export const HOSPITAL_INFO = {
  name: 'Kot Addu General Hospital',
  nameUrdu: 'کوٹ ادو جنرل ہسپتال و میڈیکل کمپلیکس',
  subtitle: 'A Modern Healthcare Facility in Punjab, Pakistan',
  emergencyPhone: '066-2241122',
  rescueLine: 'Rescue 1122 Interconnected',
  opdHelpline: '0300-8451122',
  location: 'Main Multan-Mianwali Highway, Kot Addu, Punjab, Pakistan',
  phcRegistration: 'PHC-REG-2024-8841',
  pmdcAccredited: true,
  beds: 160,
  emergencyTriageBeds: 24,
  dialysisStations: 14,
  icuBeds: 18,
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'emergency',
    name: '24/7 Emergency & Trauma Centre',
    nameUrdu: 'شعبہ حادثات و ایمرجنسی',
    description: 'Round-the-clock emergency medical response with state-of-the-art resuscitation bays, trauma surgical team, and dedicated ambulance drop-off zone.',
    iconName: 'Activity',
    headOfDepartment: 'Dr. Muhammad Tariq Khan (FCPS Trauma & Emergency)',
    emergencyAvailable: true,
    features: ['Direct ambulance portico bay', 'Point-of-care ultrasound (POCUS)', 'Immediate blood cross-match protocol', 'Level II Trauma response unit']
  },
  {
    id: 'cardiology',
    name: 'Cardiology & Intensive Care (ICU/CCU)',
    nameUrdu: 'شعبہ امراض قلب و انتہائی نگہداشت',
    description: 'Comprehensive cardiac monitoring, ECG, 2D echocardiography, and intensive care management for acute coronary syndromes and critical illnesses.',
    iconName: 'Heart',
    headOfDepartment: 'Dr. Shahzad Rafique (MBBS, FCPS Cardiology)',
    emergencyAvailable: true,
    features: ['18-bed monitored CCU/ICU', 'Siemens Color Doppler Echocardiography', 'Continuous central hemodynamic monitoring', 'Emergency thrombolysis protocols']
  },
  {
    id: 'maternal-child',
    name: 'Maternal & Neonatal Healthcare (MCH)',
    nameUrdu: 'شعبہ زچگی و امراض اطفال',
    description: 'Specialized mother and infant wing featuring modern modular delivery suites, high-risk pregnancy monitoring, and neonatal intensive care (NICU).',
    iconName: 'Baby',
    headOfDepartment: 'Dr. Farah Naz (MBBS, MCPS, FCPS Gynae & Obs)',
    emergencyAvailable: true,
    features: ['24/7 emergency C-section team', 'NICU phototherapy & servo incubators', 'Antenatal wellness clinics', 'Private family labor rooms']
  },
  {
    id: 'nephrology',
    name: 'Nephrology & Hemodialysis Unit',
    nameUrdu: 'شعبہ گردہ و ڈائیلاسز سینٹر',
    description: 'Dedicated 14-bed Fresenius hemodialysis facility delivering vital renal replacement care to patients from Kot Addu, Taunsa, and Muzaffargarh regions.',
    iconName: 'ShieldPlus',
    headOfDepartment: 'Dr. Zubair Ahmed (MBBS, MRCP UK, Nephrology)',
    emergencyAvailable: true,
    features: ['Double-pass reverse osmosis water purification', 'Dedicated Hepatitis B/C isolated dialysis suites', 'Arteriovenous fistula maintenance clinic', 'Emergency 24-hr dialysis coverage']
  },
  {
    id: 'general-surgery',
    name: 'General & Minimally Invasive Surgery',
    nameUrdu: 'جنرل و لیپروسکوپک سرجری',
    description: 'Modern laminar air-flow surgical suites equipped for laparoscopic cholecystectomies, trauma reconstructions, appendectomies, and elective procedures.',
    iconName: 'Stethoscope',
    headOfDepartment: 'Prof. Dr. Irfan Bashir (MBBS, FRCS Glasgow)',
    emergencyAvailable: true,
    features: ['Karl Storz 4K Laparoscopy tower', 'HEPA-filtered cleanroom operation theatres', 'Post-operative recovery monitoring', 'Day-care surgery program']
  },
  {
    id: 'radiology-pathology',
    name: 'Diagnostic Radiology & 24/7 Lab',
    nameUrdu: 'تشخیصی ریڈیالوجی و لیبارٹری',
    description: 'Digital imaging suite with 128-slice CT scanner, computerised radiography (CR), 4D ultrasound, and automated molecular pathology testing.',
    iconName: 'Layers',
    headOfDepartment: 'Dr. Sadia Jamil (MBBS, DMRD, FCPS Radiology)',
    emergencyAvailable: true,
    features: ['128-slice helical CT Scan', 'Fully automated biochemistry analyzers', 'Safe screened blood transfusion service', 'Digital online portal for test reports']
  }
];

export const CONSULTANTS: Doctor[] = [
  {
    id: 'dr-tariq',
    name: 'Dr. Muhammad Tariq Khan',
    nameUrdu: 'ڈاکٹر محمد طارق خان',
    specialty: 'Trauma & Emergency Medicine',
    qualifications: 'MBBS (Nishtar), FCPS (Emergency Medicine), Dip. Critical Care',
    experience: '14+ years experience',
    opdTimings: '08:00 AM – 02:00 PM',
    opdDays: 'Monday – Saturday',
    fee: 1200,
    acceptsSehatCard: true,
    department: 'emergency',
    availableToday: true
  },
  {
    id: 'dr-farah',
    name: 'Dr. Farah Naz',
    nameUrdu: 'ڈاکٹر فرح ناز',
    specialty: 'Obstetrician & Gynecologist',
    qualifications: 'MBBS (KEMU), MCPS, FCPS (Gynae & Obs), Laparoscopic Fellow',
    experience: '16+ years experience',
    opdTimings: '09:00 AM – 01:00 PM / 05:00 PM – 08:00 PM',
    opdDays: 'Monday – Friday',
    fee: 1500,
    acceptsSehatCard: true,
    department: 'maternal-child',
    availableToday: true
  },
  {
    id: 'dr-shahzad',
    name: 'Dr. Shahzad Rafique',
    nameUrdu: 'ڈاکٹر شہزاد رفیق',
    specialty: 'Consultant Cardiologist',
    qualifications: 'MBBS, FCPS (Cardiology), Dip. Interventional Cardiology (NICVD)',
    experience: '12+ years experience',
    opdTimings: '10:00 AM – 03:00 PM',
    opdDays: 'Monday, Wednesday, Friday',
    fee: 1800,
    acceptsSehatCard: true,
    department: 'cardiology',
    availableToday: true
  },
  {
    id: 'dr-zubair',
    name: 'Dr. Zubair Ahmed',
    nameUrdu: 'ڈاکٹر زبیر احمد',
    specialty: 'Consultant Nephrologist & Kidney Specialist',
    qualifications: 'MBBS, MRCP (UK), Specialty Certificate in Nephrology (SCE UK)',
    experience: '11+ years experience',
    opdTimings: '11:00 AM – 04:00 PM',
    opdDays: 'Tuesday, Thursday, Saturday',
    fee: 1500,
    acceptsSehatCard: true,
    department: 'nephrology',
    availableToday: false
  },
  {
    id: 'prof-irfan',
    name: 'Prof. Dr. Irfan Bashir',
    nameUrdu: 'پروفیسر ڈاکٹر عرفان بشیر',
    specialty: 'Senior Laparoscopic & General Surgeon',
    qualifications: 'MBBS (Nishtar), FRCS (Glasgow), FACS (USA)',
    experience: '22+ years experience',
    opdTimings: '04:00 PM – 08:00 PM',
    opdDays: 'Monday – Thursday',
    fee: 2000,
    acceptsSehatCard: true,
    department: 'general-surgery',
    availableToday: true
  },
  {
    id: 'dr-sadia',
    name: 'Dr. Sadia Jamil',
    nameUrdu: 'ڈاکٹر سعدیہ جمیل',
    specialty: 'Consultant Radiologist',
    qualifications: 'MBBS, DMRD, FCPS (Diagnostic Radiology)',
    experience: '10+ years experience',
    opdTimings: '09:00 AM – 02:00 PM',
    opdDays: 'Monday – Saturday',
    fee: 1200,
    acceptsSehatCard: true,
    department: 'radiology-pathology',
    availableToday: true
  }
];

export const VISUAL_ASSETS = {
  heroDesktop: {
    path: '/src/assets/images/hero_desktop_pakistan_hospital_1790924927277.jpg',
    aspectRatio: '16:9',
    format: 'Landscape Commercial Hero',
    purpose: 'Desktop Website Hero Banner with Negative Space on Left for Brand & CTA',
    lighting: 'Early-morning golden hour natural daylight',
    locationContext: 'Kot Addu, Punjab, Pakistan',
    resolutionGrade: 'Ultra-realistic 8K Commercial Architectural Quality'
  },
  heroMobile: {
    path: '/src/assets/images/hero_mobile_pakistan_hospital_1790924939348.jpg',
    aspectRatio: '9:16',
    format: 'Vertical Mobile Hero',
    purpose: 'Mobile Viewport Screen with Upper Negative Space for Header and Central Hospital Entrance',
    lighting: 'Crisp morning daylight with natural soft blue sky',
    locationContext: 'Kot Addu, Punjab, Pakistan',
    resolutionGrade: 'High Dynamic Range Smartphone Screen Architecture'
  },
  consultation: {
    path: '/src/assets/images/hospital_consultation_punjab_1790924951160.jpg',
    aspectRatio: '4:3',
    format: 'Clinical Consultation Documentary',
    purpose: 'Doctor Consultation & Outpatient OPD Patient Care',
    lighting: 'Bright natural clinic window daylight',
    locationContext: 'Kot Addu OPD Consultation Room'
  },
  emergencyBay: {
    path: '/src/assets/images/hospital_emergency_ambulance_1790924964954.jpg',
    aspectRatio: '4:3',
    format: 'Emergency Drop-off & Ambulance Bay',
    purpose: '24/7 Trauma Entrance with Emergency Ambulance and Medical Team',
    lighting: 'Architectural canopy natural morning lighting',
    locationContext: 'Kot Addu 24/7 Emergency Wing'
  }
};
