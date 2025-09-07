import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    phone: string;
    password: string;
    role: 'patient' | 'doctor' | 'admin';
    sessions: string[]; // Array of session tokens
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
    sessions: [{ type: String }]
});

export default mongoose.model<IUser>('User', UserSchema);