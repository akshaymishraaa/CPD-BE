import express from 'express';
import PatientController from '../controllers/patientController';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/rbacMiddleware';

const router = express.Router();
const patientController = new PatientController();

// Public routes
router.post('/register', patientController.registerPatient);
router.post('/login', patientController.loginPatient);

// Protected routes (example: only patients can access their profile)
router.put('/:id/profile', authenticateJWT, authorizeRoles(['patient']), patientController.updatePatientProfile);
router.post('/appointments', authenticateJWT, authorizeRoles(['patient']), patientController.bookAppointment);

// Doctor-only route example
router.get('/doctor/:id/availability', authenticateJWT, authorizeRoles(['doctor', 'admin']), patientController.getDoctorAvailability);

// Admin-only route example
router.delete('/:id', authenticateJWT, authorizeRoles(['admin']), patientController.deletePatientAccount);

// Update appointment
router.put('/appointments/:appointmentId', patientController.updateAppointment);

// Reschedule appointment
router.put('/appointments/:appointmentId/reschedule', patientController.rescheduleAppointment);

// Cancel appointment
router.put('/appointments/:appointmentId/cancel', patientController.cancelAppointment);

// View medical history
router.get('/:id/medical-history', patientController.viewMedicalHistory);

// Get patient profile
router.get('/:id/profile', patientController.getPatientProfile);

// List appointments
router.get('/:id/appointments', patientController.listAppointments);

export default router;