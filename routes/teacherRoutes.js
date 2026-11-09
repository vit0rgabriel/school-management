import express from "express"
import teacherController from "../controllers/teacherController.js"

const router = express.Router()

router.post(
    "/",
    teacherController.createTeacher
)

router.get(
    "/",
    teacherController.getAllTeachers
)

router.get(
    "/:id",
    teacherController.getTeachersById
)

router.get(
    "/active/teachers/active",
    teacherController.searchTeachersActives
)

router.get(
    "/:speciality/teachers",
    teacherController.searchTeachersSpeciality
)

router.get(
    "/count/teachers/c",
    teacherController.countTeachers
)

export default router;