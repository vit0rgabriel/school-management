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

const getAllTeachers = async (req, res, next) => {
    try {
        const teacher = await teacherService.getAllTeachers()

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const getTeachersById = async (req, res, next) => {
    try {
        const teacher = await teacherService.getTeachersById(req.params.id)

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const searchTeachersActives = async (req, res, next) => {
    try {
        const teacher = await teacherService.searchTeachersActives()

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const searchTeachersSpeciality = async (req, res, next) => {
    try {
        const teacher = await teacherService.searchTeachersSpeciality(req.params.speciality)

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const countTeachers = async (req, res, next) => {
    try {
        const teacher = await teacherService.countTeachers()

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const updateTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.updateTeacher(req.params.id,
            req.body)

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const teacher = await teacherService.updateStatus(req.params.id,
            req.body)

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

const deleteTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.deleteTeacher(req.params.id)

        res.status(200).json({
            message: "Professor(a) mostrado(a) com sucesso",
            data: teacher,
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createTeacher,
    getAllTeachers,
    getTeachersById,
    searchTeachersActives,
    searchTeachersSpeciality,
    countTeachers,
    updateTeacher,
    updateStatus,
    deleteTeacher
}