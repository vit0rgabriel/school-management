import userService from "..service/userService.js"

const getMe = async (req, res, next) => {
    try {
       res.status(200).json({
        message: "Usuário Logado encontrado",
        data: req.user
       })
    } catch (error) {
        next (error)
    }
}

export default {
    getMe
}