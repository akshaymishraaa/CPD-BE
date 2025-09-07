import { Request, Response } from 'express';
import {AppointmentService} from '../services/appointmentService';

class AppointmentController {
    private appointmentService: AppointmentService;

    constructor() {
        this.appointmentService = new AppointmentService();
    }

    public createAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const appointmentData = req.body;
            const newAppointment = await this.appointmentService.createAppointment(appointmentData);
            res.status(201).json(newAppointment);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { appointmentId } = req.params;
            const updatedData = req.body;
            const updatedAppointment = await this.appointmentService.rescheduleAppointment(appointmentId, updatedData);
            res.status(200).json(updatedAppointment);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public cancelAppointment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { appointmentId } = req.params;
            await this.appointmentService.cancelAppointment(appointmentId);
            res.status(204).send();
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };

    public getAppointmentDetails = async (req: Request, res: Response): Promise<void> => {
        try {
            const { appointmentId } = req.params;
            const appointmentDetails = await this.appointmentService.getAppointmentDetails(appointmentId);
            res.status(200).json(appointmentDetails);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default AppointmentController;