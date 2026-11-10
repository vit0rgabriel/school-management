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

router.put(
    "/:id",
    teacherController.updateTeacher
)

router.patch(
    "/:id",
    teacherController.updateStatus
)

router.delete(
    "/:id",
    teacherController.deleteTeacher
)

export default router;