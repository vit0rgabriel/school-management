import Student from "../models/Student.js"
import studentService from "../services/studentService.js"

const createStudent = async (req, res, next) => {
    try {
        const student = await studentService.createStudent(req.body)

        res.status(201).json({
            message: "Estudante criado com sucesso",
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
        const students = await studentService.searchStudentsActives()

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const searchStudentsNames = async (req, res, next) => {
    try {
        const students = await studentService.searchStudentsNames(req.params.name)

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const countStudents = async (req, res, next) => {
    try {
        const students = await studentService.countStudents()

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const students = await studentService.updateStudent(req.params.id,
            req.body
        )

        res.status(200).json({
            message: "Estudante atualizado com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const students = await studentService.updateStatus(req.params.id,
            req.body)
        
        res.status(200).json({
            message: "Estudantes atualizados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const students = await studentService.deleteStudent(req.params.id)
        
        res.status(200).json({
            message: "Estudantes deletados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createStudent,
    getAllStudents,
    getStudentById,
    searchStudentsActives,
    searchStudentsNames,
    countStudents,
    updateStudent,
    updateStatus,
    deleteStudent
}