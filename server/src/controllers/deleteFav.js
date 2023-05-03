const { Favorite } = require("../DB_connection");

const deleteFav = async (req,res)=>{
    const { id } =req.params;

    try {
    const deleteChar = await Favorite.findByPk(id);
    

    await deleteChar.destroy();
    const allFav = await Favorite.findAll();
    res.status(200).json(allFav);
    }
    catch(err){res.status(500).send(err.message)}
}

module.exports = deleteFav;