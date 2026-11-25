import Student from "../models/Student.js";

const createStudent = async (data) => {
    const { nome, email, idade, matricula, password } = data

    if (!nome || !email || !idade || !matricula || !password) {
        const error = new Error("O nome, o email e senha são obrigatórios")
        error.statuscode = 400
        throw error
    }

    const userExists = await Student.findOne({ email })

    if (userExists) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const user = await Student.create({
        nome,
        email,
        idade,
        matricula,
        role: "student",
        ativo: "true"
    })

    try {
        const student = await Student.create({
            userId: user._id,
            idade,
            matricula,
            role: "student",
            ativo: true
        })

        return Student.findById(student._id)
            .populate("userId", "nome email idade matricula role ativo")
    } catch (error) {
        await User.findByIdAndDelete(user._id)
        throw error
    }
}

const getAllStudents = async () => {
    return Student.find().populate("userId", "nome email idade matricula role ativo")
}

const getStudentById = async (id) => {
    const student = await Student.findById(id)
            .populate("userId", "nome email idade matricula role ativo")

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
        .populate("userId", "nome email idade matricula role ativo")

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
        .populate("userId", "nome email idade matricula role ativo")

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const countStudents = async () => {
    return Student.countDocuments()
        .populate("userId", "nome email idade matricula role ativo")
}

const updateStudent = async (id, data) => {
    const { nome, email, idade, matricula } = data
    const student = await Student.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    })
        .populate("userId", "nome email idade matricula role ativo")

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const updateStatus = async (id, data) => {
    const student = await Student.findByIdAndUpdate(id, data)
        .populate("userId", "nome email idade matricula role ativo")
        
    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const deleteStudent = async (id) => {
    const student = await Student.findByIdAndDelete(id)
        .populate("userId", "nome email idade matricula role ativo")

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