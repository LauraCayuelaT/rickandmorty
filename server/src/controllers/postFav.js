const { Favorite } = require("../DB_connection");

const postFav = async (req,res)=>{
    const { id, name, origin, status, image, species, gender} = req.body;

    try{
       

    if(![id, name, origin, status, image, species, gender].every(Boolean)) return res.status(401).send("Faltan Datos")

    const [newFav,created] = await Favorite.findOrCreate({ 
        where: {id:id},
        defaults: {
            name, origin, status, image, species, gender
        } });

    if(created) {    
    const allFavs = await Favorite.findAll();

    return res.status(200).json(allFavs)
    }

    
    return res.status(400).send("El ususario ya se encuentra en favoritos")
    }catch(err){res.status(500).send(err.message)}



}

module.exports = postFav;