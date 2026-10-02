export interface Doctor {
  id: string;
  name: string;
  nameUrdu: string;
  specialty: string;
  qualifications: string;
  experience: string;
  opdTimings: string;
  opdDays: string;
  fee: number;
  acceptsSehatCard: boolean;
  department: string;
  availableToday: boolean;
}

export interface Department {
  id: string;
  name: string;
  nameUrdu: string;
  description: string;
  iconName: string;
  features: string[];
  headOfDepartment: string;
  emergencyAvailable: boolean;
}

export interface AppointmentBooking {
  patientName: string;
  contactNumber: string;
  cnicNumber?: string;
  departmentId: string;
  doctorId: string;
  appointmentDate: string;
  slot: string;
  coverageType: 'private' | 'sehat_card' | 'welfare';
  symptoms?: string;
}
