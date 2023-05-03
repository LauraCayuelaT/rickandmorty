const {User} = require("../DB_connection")

const postUser = async (req,res)=>{
    const { email, password } =req.body;

    if(!email || !password) return res.status(400).send("Faltan Datos");

   
    try {
        const [newUser,created] = await User.findOrCreate({
            where:{email:email},
            defaults:{password:password}
        })
        if(created) return res.status(200).json(newUser)

        return res.status(400).send("El usuario ya existe")
        }

    catch(err){res.status(500).json({error:err.message})}


    // })

    // try {
    //     const newUser = await User.create({ email, password })
       
    //     return res.status(200).json(newUser)
               
        
                
    // }
    // catch(err){res.status(500).send(err.message)}

}

module.exports = postUser;