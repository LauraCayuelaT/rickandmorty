import { useState } from 'react';
import { Texto, Boton } from './SearchBarStyle';

export default function SearchBar({ onSearch }) {

   const [id,setId] = useState("");

   const handleChange = (event)=> {
      setId(event.target.value);
     
      
   }

   return (
      <div>
         <Texto type='search' onChange ={handleChange}></Texto>
         <Boton onClick={()=>onSearch(id)}>Agregar</Boton> 
      </div>
   );
}
