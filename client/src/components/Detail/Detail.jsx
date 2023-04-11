import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ContenedorCarta, Nombre, Detalle, Imagen} from './DetailStyle';

const Detail=()=>{

    const { id } = useParams();

    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     if(character.name) {

    return (
      <ContenedorCarta>
        <div>
        <Nombre>{character.name}</Nombre>
        <br />
        <Detalle>Status: {character.status}</Detalle>
        <Detalle>Species: {character.species}</Detalle>
        <Detalle>Gender: {character.gender}</Detalle>
        <Detalle>Origin: {character.origin.name}</Detalle>
        <br />
        <Imagen src={character.image} alt="" />
        
        </div>

      </ContenedorCarta>
    )}
}

export default Detail;