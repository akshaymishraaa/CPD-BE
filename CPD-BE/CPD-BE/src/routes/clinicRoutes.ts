import { Router } from 'express';
import ClinicController from '../controllers/clinicController';

const router = Router();
const clinicController = new ClinicController();

// Route to register a new clinic
router.post('/register', clinicController.registerClinic);

// Route to assign a doctor to a clinic
router.post('/assign-doctor', clinicController.assignDoctor);

// Route to manage time slots for a clinic
router.post('/manage-time-slots', clinicController.manageTimeSlots);

// Route to access patient history for a clinic
router.get('/patient-history/:clinicId/:patientId', clinicController.accessPatientHistory);

export default router;