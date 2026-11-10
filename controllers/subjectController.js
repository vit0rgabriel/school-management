import Subject from "../models/Subject.js"
import subjectService from "../services/subjectService.js"

const createSubject = async (req, res, next) => {
    try {

        console.log("chegou")
        const subject = await subjectService.createSubject(req.body)

        res.status(201).json({
            message: "Assunto criado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const getAllSubjects = async (req, res, next) => {
    try {
        const subject = await subjectService.getAllSubjects()

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const getSubjectsById = async (req, res, next) => {
    try {
        const subject = await subjectService.getSubjectsById(req.params.id)

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const getSubjectsByTeacher = async (req, res, next) => {
    try {
        const subject = await subjectService.getSubjectsByTeacher(req.params.teacherId)

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const getSubjectsActive = async (req, res, next) => {
    try {
        const subject = await subjectService.getSubjectsActive()

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const getSubjectsByHours = async (req, res, next) => {
    try {
        const subject = await subjectService.getSubjectsByHours(req.params.min, req.params.max)

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const updateSubject = async (req, res, next) => {
    try {
        const subject = await subjectService.updateSubject(req.params.id, req.body)

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const subject = await subjectService.updateStatus(req.params.id, req.body)

        res.status(200).json({
            message: "Assunto mostrado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

const deleteSubject = async (req, res, next) => {
    try {
        const subject = await subjectService.deleteSubject(req.params.id)

        res.status(200).json({
            message: "Assunto deletado com sucesso",
            data: subject,
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createSubject,
    getAllSubjects,
    getSubjectsById,
    getSubjectsByTeacher,
    getSubjectsActive,
    getSubjectsByHours,
    updateSubject,
    updateStatus,
    deleteSubject
}