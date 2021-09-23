import mongoose from 'mongoose'

const agencySchema = mongoose.Schema(
  {
    codee: { type: Number, required: true },
    label: { type: String, required: true },
  },
  { timestamps: true }
)

const Agency = mongoose.model('Agency', agencySchema)

export default Agency
