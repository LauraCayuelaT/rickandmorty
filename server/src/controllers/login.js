const {User} =require("../DB_connection")

const login = async (req,res)=>{

    const { email, password }=req.query;

    try {
    if(!email || !password) return res.status(400).send("Faltan Datos");

    const currentUser = await User.findOne({where:{email:email}});


    if(!currentUser) return res.status(404).send("Usuario no encontrado")


    if(currentUser.password===password) return res.status(200).json({access:true})
    
    
    return res.status(403).send("Contraseña incorrecta")


    
    }
    catch(err){res.status(500).send(err.message)}
    


}

module.exports = login;