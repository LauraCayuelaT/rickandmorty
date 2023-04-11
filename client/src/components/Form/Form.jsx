import { useState } from "react";
import validation from "./validation";
import { Title, Cajas, Boton } from "./FormStyle";

const Form =(props)=>{

    const[userData,setUserData] = useState({
        email:'',
        password: '',
    });

    const [errors,setErrors] = useState({});

    const handleChange = (event)=>{
        const parametro = event.target.name;
        const value = event.target.value;
        setUserData({...userData,[parametro]:value})
        validation({...userData,[parametro]:value},setErrors,errors)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.login(userData);
    }


    return(
        <form onSubmit={handleSubmit} >
            <br />
            <div>
            <Title htmlFor="email">Email: </Title>
            <Cajas type="text" 
                   name='email' 
                   value={userData.email}
                   onChange={handleChange}
            />
            <p>{errors.email}</p>
            </div>
            <br />
            <div>
            <Title htmlFor="password">Password: </Title>
            <Cajas type="text" 
                   name='password' 
                   value={userData.password}
                   onChange={handleChange}
                   />
            <p>{errors.password}</p>
            </div>
            <br />
            <Boton>Submit</Boton>

        </form>
    )
}

export default Form;