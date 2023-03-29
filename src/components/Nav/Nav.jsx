import SearchBar from "../SearchBar/SearchBar"
import { useState } from "react"
import { Link } from "react-router-dom";
import { Boton } from "./NavStyle";


const Nav = (props)=>{
    const [id,setId] = useState("");

    const random = ()=> {
        const min=1;
        const max=826;
        const rand = Math.floor(Math.random()*(826-1) + 1);
        setId(rand)
        

    }
    
    return (
        <>
        <SearchBar onSearch={props.onSearch} />
        <Boton onClick={()=>{
            random();
            props.onSearch(id)}}>Random</Boton>
        <Link to='/about'>
        <Boton>About</Boton>
        </Link>
        <Link to='/home'>
        <Boton>Home</Boton>
        </Link>
        <Link to='/favorites'>
        <Boton>Favorites</Boton>
        </Link>
        </>
    )
}

export default Nav;