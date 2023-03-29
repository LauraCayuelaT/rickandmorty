import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ContenedorCarta, Contenedor, Lista} from "./FavoritesStyle";

const Favorites = ({ myFavorites })=>{

    const [aux,setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (e) =>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter=(e)=>{
        dispatch(filterCards(e.target.value))
    }

    return(
        <div>
        <Lista onChange={handleOrder}>
            <option value="A">Ascentente</option>
            <option value="D">Descendente</option>
        </Lista>

        <Lista onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </Lista>

        <Contenedor>

        {myFavorites.map((char)=>{
            
            return (
                <ContenedorCarta>
                <Card 
                  key = {char.id}
                  id={char.id}
                  name={char.name}
                  status={char.status}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin.name}
                  image={char.image}
                  onClose={char.onClose}
                  />
                  </ContenedorCarta>
            )
                }
                  
                  )}

            </Contenedor>

    
    </div>
    )
    

}



const mapStateToProps=(state)=>{

    return {
       myFavorites:state.myFavorites
    }
    
 }

export default connect(mapStateToProps,null)(Favorites);