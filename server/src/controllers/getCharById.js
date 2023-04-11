const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios")


const getCharById = (req,res)=>{ 
    const { id } = req.params;
    axios.get(`${URL}/${id}`)
    .then(response=>{
        const { status, name, species, origin, image, gender} = response.data
        if(response){
            res.json({
                id,
                status,
                name,
                species,
                origin,
                image,
                gender

            })
        }
        else{ res.status(404).send("Not found")}
    })
    .catch(err=> req.status(500).send(err.message))
}


module.exports = getCharById;