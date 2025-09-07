import { Schema, model } from 'mongoose';

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    contactDetails: {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    medicalHistory: {
        type: [String],
        default: [],
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
}, { timestamps: true });

const Patient = model('Patient', patientSchema);

export default Patient;