import { Router } from 'express';
import DoctorController from '../controllers/doctorController';

const router = Router();
const doctorController = new DoctorController();

// Route to register a new doctor
router.post('/register', doctorController.registerDoctor);

// Route to update doctor profile
router.put('/update/:id', doctorController.updateDoctorProfile);

// Route to get doctor availability
router.get('/availability/:id', doctorController.getDoctorAvailability);

// Route to add a prescription
router.post('/prescription/:id', doctorController.addPrescription);

export default router;