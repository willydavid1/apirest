import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) return res.status(403).json({ message: 'Not provided the token' })
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId, { password: 0, roles: 0 }) // retorna todo pero omite la password y roles
    if (!user) return res.status(403).json({ message: 'User does not exist' })
    next()
  } catch (error) {
    return res.status(401).json({ message: `Unauthorized | error: ${error.message}` })
  }
}

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'moderator') {
      next()
      return
    }
  }
  return res.status(403).json({ message: 'Require moderator role' })
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      next()
      return
    }
  }
  return res.status(403).json({ message: 'Require admin role' })
}
