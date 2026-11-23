import Teacher from "../models/Teacher.js";
import User from "../models/User.js";

const createTeacher = async (data) => {
    const { nome, email, idade, especialidade, telefone } = data

    if (!nome || !email || !idade || !especialidade, !telefone || !password) {
        const error = new Error("O nome e o email são obrigatórios")
        error.statuscode = 400
        throw error
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        nome,
        email,
        password: hashedPassword,
        telefone,
        role: "teacher",
        ativo: "true"
    })

    try {
        const teacher = await Teacher.create({
            userId: user._id,
            idade,
            especialidade,
            ativo: true
        })

        return Teacher.findById(teacher._id)
            .populate("userId", "nome email telefone role")
    } catch (error) {
        await User.findByIdAndDelete(user._id)
        throw error
    }
}

const getAllTeachers = async () => {
    return Teacher.find()
        .populate("userId", "nome email")
}

const getTeachersById = async (id) => {
    const teacher = await Teacher.findById(id)
        .populate("userId", "nome email")

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
        .populate("userId", "nome email")

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
        .populate("userId", "nome email")

    if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const countTeachers = async () => {
    return Teacher.countDocuments()

        .populate("userId", "nome email")

}

const updateTeacher = async (id, data) => {
    const teacher = await Teacher.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })
        .populate("userId", "nome email")

    if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const updateStatus = async (id, data) => {
    const teacher = await Teacher.findByIdAndUpdate(id, data)
        .populate("userId", "nome email")

    if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const deleteTeacher = async (id) => {
    const teacher = await Teacher.findByIdAndDelete(id)
        .populate("userId", "nome email")

    if (!teacher) {
        const error = new Error("Professor(a) não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
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