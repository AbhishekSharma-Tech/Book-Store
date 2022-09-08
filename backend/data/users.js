import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Reaper',
    email: 'marten@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Hunter',
    email: 'hunter@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users