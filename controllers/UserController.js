import User from "../models/User.js"

class UserController{
    async registration (req,res){
        try{
            const {name, lastname, age} = req.body
            const newUser = await User.create({name, lastname, age}) 
            res.json(newUser)
            newUser.save()
        }catch(err){
            res.status(500).json("Ошибка при регистрации " + err)
            console.log("Ошибка при регистрации " + err );
            
        }
    }
}

export default new UserController();