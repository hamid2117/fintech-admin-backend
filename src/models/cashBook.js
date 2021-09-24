//TODO : type :  client , accountant , non client
//TODO : account :  12digits
//TODO :  balance :  default 0
//TODO :  current Data and  time
//TODO :  can view any account
import mongoose from 'mongoose'

const cashBookSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    type: { type: String, required: true, default: 'client' },
    account: { type: Number, required: true },
    balance: { type: Number, required: true, default: '0' },
  },
  { timestamps: true }
)

const Cash = mongoose.model('CashBook', cashBookSchema)

export default Cash
