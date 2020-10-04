import { ROLES } from '../models/Role'
import User from '../models/User'

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })
  const email = await User.findOne({ email: req.body.email })

  if (user || email) return res.status(400).json({ message: `The ${user ? 'User' : 'Email'} already exists` })
  next()
}

export const checkRoleExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({ message: `Role ${req.body.roles[i]} does not exists` })
      }
    }
  }

  next()
}
