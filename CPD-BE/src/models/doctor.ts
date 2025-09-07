import { Schema, model } from 'mongoose';

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    availability: {
        type: [String], // Array of available time slots
        required: true,
    },
    prescriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescription', // Assuming a Prescription model exists
    }],
}, { timestamps: true });

const Doctor = model('Doctor', doctorSchema);

export default Doctor;