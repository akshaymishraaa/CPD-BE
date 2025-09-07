import Clinic  from '../models/clinic';
import  Doctor from '../models/doctor';
import Patient from '../models/patient';

export class ClinicService {
    async registerClinic(clinicData:any) {
        const clinic = new Clinic(clinicData);
        return await clinic.save();
    }

    async assignDoctor(clinicId: string, doctorId: string) {
        const clinic = await Clinic.findById(clinicId);
        if (clinic) {
            clinic.assignedDoctors.push(doctorId);
            return await clinic.save();
        }
        return null;
    }

    async manageTimeSlots(clinicId: string, timeSlots: string[]){
        const clinic = await Clinic.findById(clinicId);
        if (clinic) {
            clinic.timeSlots = timeSlots;
            return await clinic.save();
        }
        return null;
    }

    async accessPatientHistory(clinicId: string, patientId: string){
        const clinic = await Clinic.findById(clinicId);
        if (clinic) {
            const patient = await Patient.findById(patientId);
            return patient;
        }
        return null;
    }
}