import Appointment  from '../models/appointment';
import Patient  from '../models/patient';
import Doctor  from '../models/doctor';
import  Clinic  from '../models/clinic';

export class AppointmentService {
    async createAppointment(appointmentData: any) {
        // Logic to create a new appointment
        const newAppointment = new Appointment(appointmentData);
        await newAppointment.save();
        return newAppointment;
    }

    async rescheduleAppointment(appointmentId: string, newDateTime: Date) {
        // Logic to reschedule an existing appointment
        const appointment = await Appointment.findById(appointmentId);
        if (appointment) {
            appointment.dateTime = newDateTime;
            await appointment.save();
            return appointment;
        }
        return null;
    }

    async cancelAppointment(appointmentId: string) {
        // Logic to cancel an existing appointment
        const appointment = await Appointment.findById(appointmentId);
        if (appointment) {
            appointment.status = 'canceled';
            await appointment.save();
            return appointment;
        }
        return null;
    }

    async getAppointmentDetails(appointmentId: string){
        // Logic to retrieve appointment details
        return await Appointment.findById(appointmentId).populate('patientId doctorId clinicId');
    }

    async getAppointmentsByPatient(patientId: string){
        // Logic to retrieve all appointments for a specific patient
        return await Appointment.find({ patientId }).populate('doctorId clinicId');
    }

    async getAppointmentsByDoctor(doctorId: string) {
        // Logic to retrieve all appointments for a specific doctor
        return await Appointment.find({ doctorId }).populate('patientId clinicId');
    }
}