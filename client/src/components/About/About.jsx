import { Titulo, Fondo, Texto } from "./AboutStyle.js";

const About =()=>{
    
    return(
        <Fondo className='Title'>
            <Titulo>Aplicación creada por Laura Cayuela</Titulo>
            <Texto>Esta aplicación fue creada por Laura Cayuela, alumna de Henry, aplicó todos los conocimientos obtenidos de JavaScript, HTML, y React</Texto>
        </Fondo>
    )
}

export default About;