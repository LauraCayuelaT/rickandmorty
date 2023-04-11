import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Favorites from './components/Favorites/Favorites';




function App() {

   const [characters, setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   const EMAIL= 'lauracayuela91@gmail.com'
   const PASSWORD = 'lala123'
   const navigate = useNavigate();
   
  
   // const login = (userData)=>{
   //    if(userData.password===PASSWORD && userData.email===EMAIL){
   //       setAccess(true);
   //       navigate('/home')
   //    } 
   //    else {alert("Credenciales incorrectas!")}
   // }

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   async function login(userData){
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      try{
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const {data} = response;
         const { access } = data;
         setAccess(data);
         access && navigate('/home');

      }
      catch(err){throw new Error(err.message)}
   
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   // function onSearch(id){
   //    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then((res)=>res.json())
   //    .then((data)=>{
   //       if(data.name && !characters.find(char=>char.id===data.id)) {
   //          setCharacters((oldData)=>[...oldData,data]) //Aqui estamos haciendo algo importante y es no tocar directamente el estado
   //          // setCharacters([...characters,data]) // Es lo mismo
   //       }else{
   //          window.alert('No hay personajes con ese ID')
   //       }
   //    })
   // }
      
   async function onSearch(id){
      try {
         const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         const { data } = response;
         if(data.name && !characters.find(char=>char.id===data.id)) {
                     setCharacters((oldData)=>[...oldData,data]) //Aqui estamos haciendo algo importante y es no tocar directamente el estado
                     // setCharacters([...characters,data]) // Es lo mismo
                  }else{
                     window.alert('No hay personajes con ese ID o ya está incluido')
                  }


      } catch(err){ throw new Error(err.message)}
      

   }

   function onClose(id) {
      setCharacters(characters.filter(char=>char.id!==id))
   }

   const { pathname } = useLocation();
   

   return (
      // <img id="bgimage" />
      <div className='App'>
         {pathname!=='/' && <Nav onSearch = {onSearch}/>}
      <Routes>
         <Route path="/home" 
         element ={<Cards characters={characters} onClose={onClose}/> }/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path='/' element ={<Form login={login}/>}/> 
         <Route path="/favorites" element={<Favorites/>}/>
         
      
      </Routes>
      </div>
   );
}

export default App;
