import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    clinicId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Clinic'
    },
    dateTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'canceled'],
        default: 'scheduled'
    }
}, { timestamps: true });

const Appointment = model('Appointment', appointmentSchema);

export default Appointment;