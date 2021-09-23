import users from './data/UserData.js'
import cashRegiser from './data/CashData.js'
import agencydata from './data/AgencyData.js'
// Models
import User from './models/userModel.js'
import Agency from './models/agency.js'
import Cash from './models/cashRegisterModel.js'
// other
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
connectDB()

// Don't do that in Production it will replace all data

const importData = async () => {
  try {
    await User.deleteMany()
    await Cash.deleteMany()
    await Agency.deleteMany()

    const createdUsers = await User.insertMany(users)
    const createdAgency = await Agency.insertMany(agencydata)
    const adminUser = createdUsers[0]._id
    const byAgency = createdAgency[0]._id
    const sampleCash = cashRegiser.map((product) => {
      return { ...product, user: adminUser, agency: byAgency }
    })
    const createdCash = await Cash.insertMany(sampleCash)
    // const
    console.log(createdUsers)
    console.log(createdCash)
    console.log(createdAgency)
    console.log('data Inserted !')
    process.exit()
  } catch (error) {
    console.error(`Your Error is : ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    console.log('data is destroyed ')
    process.exit(0)
  } catch (error) {
    console.error(`Error of destroy Data is : ${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
