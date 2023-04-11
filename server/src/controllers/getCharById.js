const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios")


const getCharById = async (req,res)=>{ 
    const { id } = req.params;

    try {
        const response = await axios.get(`${URL}/${id}`)
        if(response){
            const { status, name, species, origin, image, gender} = response.data
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
        else{
            res.status(404).send("Not found")
        }
    }
    catch(err){res.status(500).send(err.message) }
    


  
}


module.exports = getCharById;



  // axios.get(`${URL}/${id}`)
    // .then(response=>{
    //     const { status, name, species, origin, image, gender} = response.data
    //     if(response){
    //         res.json({
    //             id,
    //             status,
    //             name,
    //             species,
    //             origin,
    //             image,
    //             gender

    //         })
    //     }
    //     else{ res.status(404).send("Not found")}
    // })
    // .catch(err=> req.status(500).send(err.message))