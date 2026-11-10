import Enrollment from "../models/Enrollment.js"
import enrollmentService from "../services/enrollmentService.js"

const createEnrollment = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.createEnrollment(req.body)

        res.status(201).json({
            message: "Inscrição criada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}
    // const getAllEnrollments = async (req, res, next) => {
    //     const enrollment
    // }

    export default {
        createEnrollment
    }