import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Patient from '../models/patient';
import Doctor from '../models/doctor';
import Clinic from '../models/clinic';
import User from '../models/user'; // If you have a generic User model

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const authenticateJWT = async (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);

        // Try to find user in all collections
        let user = await Patient.findById(decoded.id);
        if (!user) user = await Doctor.findById(decoded.id);
        if (!user) user = await Clinic.findById(decoded.id);
        if (!user && User) user = await User.findById(decoded.id);

        if (!user || !user.sessions || !user.sessions.includes(token)) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};