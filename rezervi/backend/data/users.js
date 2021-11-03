import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Fedi Nabli',
    email: 'fedinabli@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    phoneNumber: 29669933,
    isSupervisor: true,
    isAdmin: true
  },
  {
    name: 'Asma Basli',
    email: 'asma@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    phoneNumber: 29669934,
    isSupervisor: false,
    isAdmin: false
  },
  {
    name: 'Med Nassim',
    email: 'mednassim@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    phoneNumber: 29669935,
    isSupervisor: true,
    isAdmin: false
  }
]

export default users