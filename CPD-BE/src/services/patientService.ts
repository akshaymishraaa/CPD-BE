import Patient  from '../models/patient';
import  Appointment  from '../models/appointment';

export class PatientService {
    async registerPatient(patientData: Partial<any>): Promise<any> {
        // Logic to register a new patient
        const newPatient = new Patient(patientData);
        await newPatient.save();
        return newPatient;
    }

    async loginPatient(email: string, password: string): Promise<any | null> {
        // Logic to authenticate a patient
        const patient = await Patient.findOne({ email });
        if (patient && patient.password === password) {
            return patient;
        }
        return null;
    }
    async bookAppointment(appointmentData: Partial<any>): Promise<any> {
        // Logic to book an appointment
        const newAppointment = new Appointment(appointmentData);
        await newAppointment.save();
        return newAppointment;
    }

    async updatePatientProfile(patientId: string, updateData: Partial<any>): Promise<any | null> {
        // Logic to update patient profile
        const updatedPatient = await Patient.findByIdAndUpdate(patientId, updateData, { new: true });
        return updatedPatient;
    }

    async viewMedicalHistory(patientId: string): Promise<any[]> {
        // Logic to retrieve medical history for a patient
        const appointments = await Appointment.find({ patientId });
        return appointments;
    }

    async getPatientProfile(patientId: string): Promise<any | null> {
        // Logic to get patient profile
        const patient = await Patient.findById(patientId);
        return patient;
    }

    async deletePatientAccount(patientId: string): Promise<void> {
        // Logic to delete patient account
        await Patient.findByIdAndDelete(patientId);
        // Optionally, delete related appointments
        await Appointment.deleteMany({ patientId });
    }

    async listAppointments(patientId: string): Promise<any[]> {
        // Logic to list all appointments for a patient
        const appointments = await Appointment.find({ patientId });
        return appointments;
    }

    async updateAppointment(appointmentId: string, updateData: Partial<any>): Promise<any | null> {
        // Logic to update an appointment
        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, updateData, { new: true });
        return updatedAppointment;
    }

    async rescheduleAppointment(appointmentId: string, newDate: Date): Promise<any | null> {
        // Logic to reschedule appointment
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { date: newDate, status: 'rescheduled' },
            { new: true }
        );
        return updatedAppointment;
    }

    async cancelAppointment(appointmentId: string): Promise<any | null> {
        // Logic to cancel appointment
        const cancelledAppointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status: 'cancelled' },
            { new: true }
        );
        return cancelledAppointment;
    }
}