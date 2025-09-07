import User, { IUser } from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export class AuthService {
    async register(data: Partial<IUser>): Promise<IUser> {
        data.password = await bcrypt.hash(data.password!, 10);
        const user = new User(data);
        await user.save();
        return user;
    }

    async login(identifier: string, password: string): Promise<{ token: string, user: IUser } | null> {
        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }, { phone: identifier }]
        });
        if (!user || !(await bcrypt.compare(password, user.password))) return null;
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '30d' });
        user.sessions.push(token);
        await user.save();
        return { token, user };
    }

    async logout(userId: string, token: string): Promise<void> {
        await User.findByIdAndUpdate(userId, { $pull: { sessions: token } });
    }

    async resetPassword(userId: string, newPassword: string): Promise<void> {
        const hashed = await bcrypt.hash(newPassword, 10);
        await User.findByIdAndUpdate(userId, { password: hashed });
    }

    async forgotIdentifier(type: 'username' | 'email' | 'phone', value: string): Promise<IUser | null> {
        return await User.findOne({ [type]: value });
    }

    async verifySession(token: string): Promise<IUser | null> {
        try {
            const payload: any = jwt.verify(token, JWT_SECRET);
            const user = await User.findById(payload.id);
            if (user && user.sessions.includes(token)) return user;
            return null;
        } catch {
            return null;
        }
    }
}