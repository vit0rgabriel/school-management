import express from "express"
import studentController from "../controllers/studentController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"


const router = express.Router()

router.post(
    "/",
    authMiddleware,
    studentController.createStudent
)

router.get(
    "/",
    authMiddleware,
    studentController.getAllStudents
)

router.get(
    "/:id",
    authMiddleware,
    studentController.getStudentById
)

router.get(
    "/active/students/active",
    authMiddleware, adminMiddleware,
    studentController.searchStudentsActives
)

router.get(
    "/:name/students",
    authMiddleware, adminMiddleware,
    studentController.searchStudentsNames
)

router.get(
    "/count/students/user",
    authMiddleware, adminMiddleware,
    studentController.countStudents
)

router.put(
    "/:id/update",
    authMiddleware,
    studentController.updateStudent
)

router.patch(
    "/:id/upd",
    authMiddleware, adminMiddleware,
    studentController.updateStatus
)

router.delete(
    "/:id/delete",
    authMiddleware, adminMiddleware,
    studentController.deleteStudent
)

export default router;