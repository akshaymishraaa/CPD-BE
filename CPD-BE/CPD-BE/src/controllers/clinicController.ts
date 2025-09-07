import { Request, Response } from 'express';
import {ClinicService} from '../services/clinicService';

class ClinicController {
    private clinicService: ClinicService;

    constructor() {
        this.clinicService = new ClinicService();
    }

    public registerClinic = async (req: Request, res: Response) => {
        try {
            const clinicData = req.body;
            const newClinic = await this.clinicService.registerClinic(clinicData);
            res.status(201).json(newClinic);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public assignDoctor = async (req: Request, res: Response) => {
        try {
            const { clinicId, doctorId } = req.body;
            const updatedClinic = await this.clinicService.assignDoctor(clinicId, doctorId);
            res.status(200).json(updatedClinic);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public manageTimeSlots = async (req: Request, res: Response) => {
        try {
            const { clinicId, timeSlots } = req.body;
            const updatedClinic = await this.clinicService.manageTimeSlots(clinicId, timeSlots);
            res.status(200).json(updatedClinic);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public accessPatientHistory = async (req: any, res: any) => {
        try {
            const { clinicId,patientId } = req.params;
            const patientHistory = await this.clinicService.accessPatientHistory(clinicId,patientId);
            res.status(200).json(patientHistory);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default ClinicController;