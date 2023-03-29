const validation = (userData,setErrors,errors)=>{

    if(!userData.email) 
        setErrors({...errors,email: "Nombre de usuario no puede estar vacío"});
    else if(userData.email.length>35)
        setErrors({...errors, email:"El nombre de usuario no puede tener más de 35 caracteres"})
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
        setErrors({...errors,email:"Email inválido"})}

    else{setErrors({...errors,email: ""})}
        


//    if(userData.password.length<6 || userData.password.length>10)
   
//    {setErrors({...errors, password:"Contraseña tiene que tener entre 6 y 10 caracteres"})}

//    else if(!/\d/.test(userData.password))
//    {setErrors({...errors, password:"Debe contener al menos un número"})}
//    else
//    {setErrors({...errors, password:""})}

}


export default validation;