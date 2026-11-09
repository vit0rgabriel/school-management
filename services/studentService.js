import Student from "../models/Student.js";

const createStudent = async (data) => {
    const { nome, email, idade, matricula } = data

    if (!nome || !email) {
        const error = new Error("O nome e o email são obrigatórios")
        error.statuscode = 400
        throw error
    }

    const studentExists = await Student.findOne({ email })

    if (studentExists) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const student = await Student.create({
        nome,
        email,
        idade,
        matricula
    })

    return {
        _id: student._id,
        nome: student.nome,
        email: student.email,
        idade: student.idade,
        matricula: student.matricula,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt
    }

    return student;
}

const getAllStudents = async () => {
    return Student.find()
}
    
const getStudentById = async (id) => {
    const student = await Student.findById(id);

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const searchStudentsActives = async (ativo) => {
    const student = await Student.find({
        ativo: true,
    })

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const searchStudentsNames = async (nome) => {
    const student = await Student.find({
        nome
    })

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const countStudents = async () => {
    return Student.countDocuments()
}

const updateStudent = async (id, data) => {
    const { nome, email, idade, matricula } = data
    const student = await Student.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const updateStatus = async (id, data) => {
    const student = await Student.findByIdAndUpdate(id, data)

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const deleteStudent = async (id) => {
    const student = await Student.findByIdAndDelete(id)

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
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