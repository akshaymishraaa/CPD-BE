export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'doctor' | 'patient';
}

export interface Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    clinicId: string;
    dateTime: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}

export interface Clinic {
    id: string;
    name: string;
    location: string;
    servicesOffered: string[];
    assignedDoctors: string[];
}