import Teacher from "../models/Teacher.js";

const createTeacher = async (data) => {
    const { nome, email, idade, especialidade, telefone } = data

    if (!nome || !email || !idade || !especialidade, !telefone) {
        const error = new Error("O nome e o email são obrigatórios")
        error.statuscode = 400
        throw error
    }

    const teacherExists = await Teacher.findOne({ email })

    if (teacherExists) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const teacher = await Teacher.create({
        nome,
        email,
        idade,
        especialidade,
        telefone,
    })

    return {
        _id: teacher._id,
        nome: teacher.nome,
        email: teacher.email,
        idade: teacher.idade,
        especialidade: teacher.especialidade,
        telefone: teacher.telefone,
        createdAt: teacher.createdAt,
        updatedAt: teacher.updatedAt
    }

    return teacher;
}

const getAllTeachers = async () => {
    return Teacher.find()
}

const getTeachersById = async (id) => {
    const teacher = await Teacher.findById(id)

        if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const searchTeachersActives = async (ativo) => {
    const teacher = await Teacher.find({ 
        ativo: true
    })

        if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const searchTeachersSpeciality = async (especialidade) => {
    const teacher = await Teacher.find({
        especialidade
    })

        if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const countTeachers = async () => {
    return Teacher.countDocuments()
}

export default {
    createTeacher,
    getAllTeachers,
    getTeachersById,
    searchTeachersActives,
    searchTeachersSpeciality,
    countTeachers
}