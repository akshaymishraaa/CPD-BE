import { Router } from 'express';
import AppointmentController from '../controllers/appointmentController';

const router = Router();
const appointmentController = new AppointmentController();

// Route to create a new appointment
router.post('/', appointmentController.createAppointment);

// Route to reschedule an existing appointment
router.put('/:id/reschedule', appointmentController.rescheduleAppointment);

// Route to cancel an appointment
router.delete('/:id', appointmentController.cancelAppointment);

// Route to get details of a specific appointment
router.get('/:id', appointmentController.getAppointmentDetails);

export default router;