import { Request, Response } from 'express';
import {PatientService} from '../services/patientService';
import { DoctorService } from '../services/doctorService';

class PatientController {
    private patientService: PatientService;
    private doctorService: DoctorService; // Add doctorService

    constructor() {
        this.patientService = new PatientService();
        this.doctorService = new DoctorService(); // Initialize doctorService
    }

    public registerPatient = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientData = req.body;
            const newPatient = await this.patientService.registerPatient(patientData);
            res.status(201).json(newPatient);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public loginPatient = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const token = await this.patientService.loginPatient(email, password);
            res.status(200).json({ token });
        } catch (error: any) {
            res.status(401).json({ message: error.message });
        }
    };

    public updatePatientProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientId = req.params.id;
            const updatedData = req.body;
            const updatedPatient = await this.patientService.updatePatientProfile(patientId, updatedData);
            res.status(200).json(updatedPatient);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public bookAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const appointmentData = req.body;
            const appointment = await this.patientService.bookAppointment(appointmentData);
            res.status(201).json(appointment);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public viewMedicalHistory = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientId = req.params.id;
            const medicalHistory = await this.patientService.viewMedicalHistory(patientId);
            res.status(200).json(medicalHistory);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

    public getDoctorAvailability = async (req: Request, res: Response): Promise<void> => {
        try {
            const doctorId = req.params.id;
            const availability = await this.doctorService.getDoctorAvailability(doctorId);
            res.status(200).json(availability);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

    public getPatientProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientId = req.params.id;
            const profile = await this.patientService.getPatientProfile(patientId);
            res.status(200).json(profile);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

    public deletePatientAccount = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientId = req.params.id;
            await this.patientService.deletePatientAccount(patientId);
            res.status(200).json({ message: 'Patient account deleted successfully.' });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public listAppointments = async (req: Request, res: Response): Promise<void> => {
        try {
            const patientId = req.params.id;
            const appointments = await this.patientService.listAppointments(patientId);
            res.status(200).json(appointments);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

    public updateAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const appointmentId = req.params.appointmentId;
            const updateData = req.body;
            const updatedAppointment = await this.patientService.updateAppointment(appointmentId, updateData);
            res.status(200).json(updatedAppointment);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const appointmentId = req.params.appointmentId;
            const { newDate } = req.body;
            const updatedAppointment = await this.patientService.rescheduleAppointment(appointmentId, new Date(newDate));
            res.status(200).json(updatedAppointment);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    public cancelAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const appointmentId = req.params.appointmentId;
            const cancelledAppointment = await this.patientService.cancelAppointment(appointmentId);
            res.status(200).json(cancelledAppointment);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };
}

export default PatientController;