import Enrollment from "../models/Enrollment.js";

const createEnrollment = async (data) => {
    const { status, notaFinal } = data

    const enrollment = await Enrollment.create({
        status,
        notaFinal
    })

        return {
        _id: enrollment._id,
        dataMatricula: enrollment.dataMatricula,
        status: enrollment.status,
        notaFinal: enrollment.notaFinal,
        createdAt: enrollment.createdAt,
        updatedAt: enrollment.updatedAt
    }

    return enrollment;
}

export default {
    createEnrollment,

}