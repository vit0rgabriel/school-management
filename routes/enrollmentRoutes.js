
import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"


const router = express.Router()

router.post(
    "/",
    enrollmentController.createEnrollment
)

export default router;