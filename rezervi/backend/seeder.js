import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import events from './data/events.js'
import User from './models/userModel.js'
import Event from './models/eventModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Event.deleteMany()
    await User.deleteMany()
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleEvents = events.map((events) => {
      return { ...events, user: adminUser }
    })
    await Event.insertMany(sampleEvents)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroytData = async () => {
  try {
    await Order.deleteMany()
    await Event.deleteMany()
    await User.deleteMany()
    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroytData()
} else {
  importData()
}