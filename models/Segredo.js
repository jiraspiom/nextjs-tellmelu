import mongoose from 'mongoose'

/* SegredoSchema will correspond to a collection in your MongoDB database. */
const SegredoSchema = new mongoose.Schema({
    segredo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    dataAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

export default mongoose.models.Segredo || mongoose.model('Segredo', SegredoSchema)
