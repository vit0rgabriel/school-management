import express from "express"
import authController from "../controllers/authController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"

const router = express.Router()

router.post("/register", authController.register)
router.post("/login", authController.login)

export default router