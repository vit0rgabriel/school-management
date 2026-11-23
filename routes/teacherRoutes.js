import express from "express"
import teacherController from "../controllers/teacherController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"

const router = express.Router()

router.post(
    "/",
    authMiddleware, adminMiddleware,
    teacherController.createTeacher
)

router.get(
    "/",
    authMiddleware, adminMiddleware,
    teacherController.getAllTeachers
)

router.get(
    "/:id",
    authMiddleware,
    teacherController.getTeachersById
)

router.get(
    "/active/teachers/active",
    authMiddleware, adminMiddleware,
    teacherController.searchTeachersActives
)

router.get(
    "/:speciality/teachers",
    authMiddleware, adminMiddleware,
    teacherController.searchTeachersSpeciality
)

router.get(
    "/count/teachers/c",
    authMiddleware, adminMiddleware,
    teacherController.countTeachers
)

router.put(
    "/:id",
    authMiddleware,
    teacherController.updateTeacher
)

router.patch(
    "/:id",
    authMiddleware, adminMiddleware,
    teacherController.updateStatus
)

router.delete(
    "/:id",
    authMiddleware, adminMiddleware,
    teacherController.deleteTeacher
)

export default router;