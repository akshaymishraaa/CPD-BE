import express from 'express';
import { AuthController } from '../controllers/authController';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/rbacMiddleware';

const router = express.Router();
const authController = new AuthController();

// Public routes
router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.post('/forgot-identifier', (req, res) => authController.forgotIdentifier(req, res));

// Protected routes (JWT + RBAC)
router.post('/logout', authenticateJWT, (req, res) => authController.logout(req, res));
router.post('/reset-password', authenticateJWT, (req, res) => authController.resetPassword(req, res));

// Example: admin-only route
router.get('/admin-only', authenticateJWT, authorizeRoles(['admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome, admin!' });
});

export default router;