import Student from "../models/Student.js"
import studentService from "../services/studentService.js"

const createStudent = async (req, res, next) => {
    try {
        const student = await studentService.createStudent(req.body)

        res.status(201).json({
            message: "Estudante criada com sucesso",
            data: student,
        })
    } catch (error) {
        next(error)
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        const student = await studentService.getAllStudents()

        res.status(200).json({
            message: "Estudante mostrado com sucesso",
            data: student,
        })
    } catch (error) {
        next(error)
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const student = await studentService.getStudentById(req.params.id)

        res.status(200).json({
            message: "Estudante encontrado com sucesso",
            data: student
        })
    } catch (error) {
        next(error)
    }
}

const searchStudentsActives = async (req, res, next) => {
    try {
        const students = await studentService.searchStudentsActives(req.params.ativo)


        res.status(200).json({
            message: "Usuarios encontrados com sucesso",
            total: students.length,
            data: students
        })
    } catch (error) {
        next (error)
    }
}

export default {
    createStudent,
    getAllStudents,
    getStudentById,
    searchStudentsActives
}