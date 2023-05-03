import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../Redux/actions";
import { connect, useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import { Close, Nombre, Detalle, Imagen} from "./CardStyle";




function Card({ id,name,species,gender,image,key,onClose,addFav,removeFav,status,myFavorites,origin }) {
   
   
   const [isFav,setIsFav] = useState(false);

   useEffect(() => {
      
      myFavorites.forEach((fav) => {
         if (fav.id ==id) {
            setIsFav(true);
         }
      });

      
   }, [myFavorites]);


   const handleFavorite = ()=>{
      
      if(!isFav){
         setIsFav(true);
         addFav({id,name,species,gender,image,key,onClose,status,origin});
      }
      else {
         setIsFav(false);
         removeFav(id);
      }
   }



   

   return (
      <div>
         <Close onClick={()=>onClose(id)}>X</Close>
         {
         isFav ? (
           <Close onClick={handleFavorite}>❤️</Close>
         ) : (
          <Close onClick={handleFavorite}>🤍</Close>
         )
         }
         <h2>{key}</h2>
         <Link to={`/detail/${id}`}>
         <Nombre>{name}</Nombre>
         </Link>
         <Detalle>Status: {status}</Detalle>
         <Detalle>Sepcies: {species}</Detalle>
         <Detalle>Genter: {gender}</Detalle> 
         <Detalle>Origin: {origin}</Detalle>
         <Imagen src={image} alt='' /> 
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{

   return {
      addFav: (personaje)=>dispatch(addFav(personaje)),
      removeFav: (id)=>dispatch(removeFav(id))
   }

}

const mapStateToProps=(state)=>{

   return {
      myFavorites:state.myFavorites
   }
   
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
