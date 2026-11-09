
import express from "express"
import studentController from "../controllers/studentController.js"

const router = express.Router()

router.post(
    "/",
    studentController.createStudent
)

router.get(
    "/",
    studentController.getAllStudents
)

router.get(
    "/:id",
    studentController.getStudentById
)

router.get(
    "/active/students",
    studentController.searchStudentsActives
)

router.get(
    "/:name/students",
    studentController.searchStudentsNames
)

router.get(
    "/count/students/user",
    studentController.countStudents
)

router.put(
    "/:id/update",
    studentController.updateStudent
)

router.patch(
    "/:id/upd",
    studentController.updateStatus
)

router.delete(
    "/:id/delete",
    studentController.deleteStudent
)

export default router;