import mongoose from 'mongoose'

const cashSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    agency: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Agency',
    },
    codee: { type: Number, required: true },
    label: { type: String, required: true },
    currency: { type: String, required: true, default: 'EUR' },
    status: { type: Boolean, required: true, default: false },
    state: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
)

const Cash = mongoose.model('Cash', cashSchema)

export default Cash
