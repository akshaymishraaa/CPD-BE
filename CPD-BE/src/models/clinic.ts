import { Schema, model } from 'mongoose';

const clinicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    servicesOffered: {
        type: [String],
        required: true,
    },
    assignedDoctors: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    }],
}, { timestamps: true });

const Clinic = model('Clinic', clinicSchema);

export default Clinic;