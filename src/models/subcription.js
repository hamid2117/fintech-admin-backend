import mongoose from 'mongoose'

const SubscriptionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  },
  { timestamps: true }
)

const Subcription = mongoose.model('Subcription', SubscriptionSchema)

export default Subcription
