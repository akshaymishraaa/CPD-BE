import DoctorModel from '../models/doctor';
import AppointmentModel from '../models/appointment';

export class DoctorService {
    // Create a new doctor
    async createDoctor(doctorData: any) {
        const doctor = new DoctorModel(doctorData);
        return await doctor.save();
    }

    // Update a doctor profile
    async updateDoctorProfile(doctorId: string, updateData: any) {
        return await DoctorModel.findByIdAndUpdate(doctorId, updateData, { new: true });
    }

    // Get doctor availability
    async getDoctorAvailability(doctorId: string) {
        const doctor = await DoctorModel.findById(doctorId);
        return doctor ? doctor.availability : null;
    }

    // Add a prescription for a patient
    async addPrescription(doctorId: string, patientId: string, prescription: string) {
        const appointment = await AppointmentModel.findOne({ doctorId, patientId });
        if (appointment) {
            appointment.prescription = prescription;
            return await appointment.save();
        }
        return null;
    }

    // Get all doctors
    async getAllDoctors() {
        return await DoctorModel.find();
    }

    // Get a doctor by ID
    async getDoctorById(doctorId: string) {
        return await DoctorModel.findById(doctorId);
    }
}
