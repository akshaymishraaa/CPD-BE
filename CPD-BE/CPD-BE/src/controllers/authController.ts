import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const user = await authService.register(req.body);
            res.status(201).json(user);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { identifier, password } = req.body;
            const result = await authService.login(identifier, password);
            if (!result) return res.status(401).json({ message: 'Invalid credentials' });
            res.status(200).json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async logout(req: any, res: Response) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            const userId = req.user.id;
            await authService.logout(userId, token!);
            res.status(200).json({ message: 'Logged out' });
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async resetPassword(req: any, res: Response) {
        try {
            const userId = req.user.id;
            const { newPassword } = req.body;
            await authService.resetPassword(userId, newPassword);
            res.status(200).json({ message: 'Password reset successful' });
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async forgotIdentifier(req: Request, res: Response) {
        try {
            const { type, value } = req.body;
            const user = await authService.forgotIdentifier(type, value);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ user });
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}