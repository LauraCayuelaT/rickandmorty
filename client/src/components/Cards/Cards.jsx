import Card from '../Card/Card';
import { ContenedorCarta, Contenedor } from './CardsStyle';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../Redux/actions';
import { useEffect } from 'react';

export default function Cards(props) {
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(getFavorites())
  },[])

   const { characters } = props;
   
   return ( <Contenedor>
      {
               characters.map( (char) => {
               
               return( 
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
                  onClose={props.onClose}
                  />
                  </ContenedorCarta>
                  )
               
               }
               )
            }

   </Contenedor>);
}
