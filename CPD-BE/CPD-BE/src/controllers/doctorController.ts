import { Request, Response } from 'express';
import { DoctorService } from '../services/doctorService';

class DoctorController {
    private doctorService: DoctorService;

    constructor() {
        this.doctorService = new DoctorService();
    }

    // Register a new doctor
    async registerDoctor(req: Request, res: Response) {
        try {
            const doctorData = req.body;
            const newDoctor = await this.doctorService.createDoctor(doctorData);
            res.status(201).json(newDoctor);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update doctor profile
    async updateDoctorProfile(req: Request, res: Response) {
        try {
            const doctorId = req.params.id;
            const updatedData = req.body;
            const updatedDoctor = await this.doctorService.updateDoctorProfile(doctorId, updatedData);
            res.status(200).json(updatedDoctor);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get doctor availability
    async getDoctorAvailability(req: Request, res: Response) {
        try {
            const doctorId = req.params.id;
            const availability = await this.doctorService.getDoctorAvailability(doctorId);
            res.status(200).json(availability);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // Add prescription
    async addPrescription(req: Request, res: Response) {
        try {
            const { doctorId, patientId, prescription } = req.body;
            const result = await this.doctorService.addPrescription(doctorId, patientId, prescription);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get all doctors
    async getAllDoctors(req: Request, res: Response) {
        try {
            const doctors = await this.doctorService.getAllDoctors();
            res.status(200).json(doctors);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get doctor by ID
    async getDoctorById(req: Request, res: Response) {
        try {
            const doctorId = req.params.id;
            const doctor = await this.doctorService.getDoctorById(doctorId);
            res.status(200).json(doctor);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default DoctorController;
