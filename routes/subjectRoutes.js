import express from "express"
import subjectController from "../controllers/subjectController.js"

const router = express.Router()

router.post(
    "/",
    subjectController.createSubject
)

router.get(
    "/",
    subjectController.getAllSubjects
)

router.get(
    "/:id",
    subjectController.getSubjectsById
)

router.get(
    "/teacher/:teacherId",
    subjectController.getSubjectsByTeacher
)

router.get(
    "/active/wasd",
    subjectController.getSubjectsActive
)

router.get(
    "/hours/:min/:max",
    subjectController.getSubjectsByHours
)

router.put(
    "/:id",
    subjectController.updateSubject
)

router.patch(
    "/:id",
    subjectController.updateStatus
)

router.delete(
    "/:id",
    subjectController.deleteSubject
)

export default router;