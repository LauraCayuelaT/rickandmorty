const users=require("../utils/users")

const login =(req,res)=>{

    const { email, password }=req.query;
    const valido = users.find(user=>user.email===email && user.password===password);
    if(valido) return res.status(200).json({access:true})
    res.status(400).json({access:false})


}

module.exports = login;