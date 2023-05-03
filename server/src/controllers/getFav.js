const { Favorite } = require("../DB_connection");

const getFav = async(req,res)=>{

    const allFavs = await Favorite.findAll();
    res.status(200).json(allFavs)

}

module.exports = getFav;