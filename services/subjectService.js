import Subject from "../models/Subject.js";
import Teacher from "../models/Teacher.js";

const createSubject = async (data) => {
    const { teacherId, nome, codigo, cargaHoraria } = data

    if (!nome || !codigo || !cargaHoraria || !teacherId) {
        const error = new Error("Todos os campos são obrigatório ")
        error.statuscode = 400
        throw error
    }

    const teacher = await Teacher.findById(teacherId)

    if (!teacher) {
        const error = new Error("O id do professor é obrigatório")
        error.statuscode = 400
        throw error
    }

    const subjectExists = await Subject.findOne({ teacherId })

    if (subjectExists) {
        const error = new Error("O id do professor já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const subject = await Subject.create({
        teacherId,
        nome,
        codigo,
        cargaHoraria
    })

    return {
        _id: subject._id,
        teacherId: subject.teacherId,
        nome: subject.nome,
        codigo: subject.codigo,
        cargaHoraria: subject.cargaHoraria,
        createdAt: subject.createdAt,
        updatedAt: subject.updatedAt
    }

    return subject;
}

const getAllSubjects = async () => {
    return Subject.find()
}

const getSubjectsById = async (id) => {
    const subject = await Subject.findById(id)

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const getSubjectsByTeacher = async (teacherId) => {
    const subject = await Subject.findOne({ teacherId })

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const getSubjectsActive = async () => {
    const subject = await Subject.find({
        ativo: true
    })

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const getSubjectsByHours = async (min, max) => {
    const subject = await Subject.find({
        cargaHoraria: { $lt: max, $gt: min }
    })

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const updateSubject = async (id, data) => {
    const { teacherId, nome, codigo, cargaHoraria } = data
    const subject = await Subject.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const updateStatus = async (id, data) => {
    const subject = await Subject.findByIdAndUpdate(
        id, data
    )

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
}

const deleteSubject = async (id) => {
    const subject = await Subject.findByIdAndDelete(id)

    if (!subject) {
        const error = new Error("O assunto não foi encontrado")
        error.statuscode = 400
        throw error
    }

    return subject
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