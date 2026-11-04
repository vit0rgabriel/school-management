import Enrollment from "../models/Enrollment.js"
import enrollmentService from "./services/enrollmentService.js"

const createEnrollment = async (req, res, next) => {
    const enrollment = await Enrollment.createEnrollment(req.body)

    res.status(201).json({
        message: "Inscrição criada com sucesso",
        data: user,
    })
}

export default {
    createEnrollment,

}