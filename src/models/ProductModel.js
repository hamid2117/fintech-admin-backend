import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    codee: { type: String, required: true, default: 'client' },
    label: { type: String, required: true },
    durationEnum: { type: String, required: true, default: 'Month' },
    statusEnum: { type: Boolean, required: true, default: false },
    association: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
)

const Cash = mongoose.model('Product', ProductSchema)

export default Cash
