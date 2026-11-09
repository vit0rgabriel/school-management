import Teacher from "../models/Teacher.js"
import teacherService from "../services/teacherService.js"

const createTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.createTeacher(req.body)

        res.status(201).json({
            message: "Professor(a) criado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createTeacher
}