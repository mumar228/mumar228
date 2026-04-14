import User from "../models/user.models.js"

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({ message: "Access denied. Admins only." })
  }
  next()
}