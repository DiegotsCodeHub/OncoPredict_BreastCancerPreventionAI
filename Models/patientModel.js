import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        name: String,
        history: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'History'
        }
        

    
    }
);

export default mongoose.model('Patient', patientSchema);