import express from "express"
import subjectController from "../controllers/subjectController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"

const router = express.Router()

router.post(
    "/", 
    authMiddleware, adminMiddleware,
    subjectController.createSubject
)

router.get(
    "/", 
    authMiddleware,
    subjectController.getAllSubjects
)

router.get(
    "/:id", 
    authMiddleware,
    subjectController.getSubjectsById
)

router.get(
    "/teacher/:teacherId", 
    authMiddleware,
    subjectController.getSubjectsByTeacher
)

router.get(
    "/active/wasd", 
    authMiddleware, adminMiddleware,
    subjectController.getSubjectsActive
)

router.get(
    "/hours/:min/:max",
    authMiddleware, adminMiddleware,
    subjectController.getSubjectsByHours
)

router.put(
    "/:id", 
    authMiddleware, adminMiddleware,
    subjectController.updateSubject
)

router.patch(
    "/:id", 
    authMiddleware, adminMiddleware,
    subjectController.updateStatus
)

router.delete(
    "/:id", 
    authMiddleware, adminMiddleware,
    subjectController.deleteSubject
)

export default router;