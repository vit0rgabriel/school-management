import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"


const router = express.Router()

router.post(
    "/", authMiddleware, adminMiddleware,
    enrollmentController.createEnrollment
)

router.get(
    "/", authMiddleware,
    enrollmentController.getAllEnrollments
)

router.get(
    "/:id", authMiddleware,
    enrollmentController.getEnrollmentById
)

router.get(
    "/student/:studentId", authMiddleware,
    enrollmentController.getEnrollmentByStudentId
)

router.get(
    "/subject/:subjectId", authMiddleware,
    enrollmentController.getEnrollmentBySubjectId
)

router.get(
    "/status/:status", authMiddleware, adminMiddleware, 
    enrollmentController.getEnrollmentByStatus
)

router.get(
    "//count", authMiddleware, adminMiddleware,
    enrollmentController.countEnrollments
)

router.patch(
    "/:id/grade", authMiddleware, adminMiddleware,
    enrollmentController.updateEnrollmentByGrade
)

router.patch(
    "/:id/status", authMiddleware, adminMiddleware,
    enrollmentController.updateStatus
)

router.delete(
    "/:id/delete", authMiddleware, adminMiddleware,
    enrollmentController.deleteEnrollment
)

router.get(
    "/students/:studentId/history", authMiddleware, adminMiddleware,
    enrollmentController.getHistoryStudents
)

router.get(
    "/subjects/:studentId/students/count", authMiddleware, adminMiddleware,
    enrollmentController.getStudentsBySubject
)

export default router;