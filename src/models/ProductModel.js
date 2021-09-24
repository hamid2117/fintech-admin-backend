//TODO : code :  3 digit
//TODO :  label :  20 String
//TODO :  durationEnum :MONTH / BIMONTHLY / QUARTER / SEMESTER / ANNUAL
//TODO :  statusEnum :ENABLED / DISABLED  Boolean
//TODO :  Association :product / scale  Boolean
//TODO :  can view any product

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
