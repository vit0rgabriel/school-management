import Teacher from "../models/Teacher";

const createTeacher = async (data) => {
    const { nome, email, idade, especialidade, telefone } = data

    if (!nome || !email) {
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
        telefone
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

export default {
    createTeacher
}