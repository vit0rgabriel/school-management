import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },
        idade: {
            type: Number,
            required: true,
            trim: true
        },

        matricula: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        ativo: {
            type: Boolean,
            default: true,
            trim: true
        },
    },
    {
        collection: "students",
        timestamps: true
    }
)

export default mongoose.model("Student", StudentSchema)