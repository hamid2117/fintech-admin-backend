import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://adminfintech2117:adminfintech2117@fintech-website.aht8m.mongodb.net/fintech?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    console.log(`MongoDB Connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(`Mongo error :${error}`)
    process.exit(1)
  }
}
export default connectDB
