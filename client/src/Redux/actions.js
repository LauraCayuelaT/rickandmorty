import axios from "axios";

export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER="FILTER"
export const ORDER="ORDER"
export const GET_FAVORITES="GET_FAVORITES"


// export const addFav = (personaje)=>{
//     return ({type:ADD_FAV, payload:personaje})
// }
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

 export const addFav =  (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) =>{

      try {
         const response = await axios.post(endpoint, character);
         const { data } = response;
         return dispatch({
                  type: 'ADD_FAV',
                  payload: data,
               });
      }
      catch(err){throw new Error}

   }


      };

   export const getFavorites = ()=>{
      return async function  (dispatch) {
         try{
         const response = await axios.get('http://localhost:3001/rickandmorty/fav')
         dispatch({type:GET_FAVORITES, payload: response.data})}
         catch(err){throw Error("No se logró despachar la acción")}
      }
      
   }

    
   



// export const removeFav = (id)=>{
//     return ({type:REMOVE_FAV, payload:id})
// }

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

 export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      const response = await axios.delete(endpoint)
      const { data } = response;
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         })
      };
   }
 

export const filterCards =(gender)=>{
    return({type:FILTER,payload:gender})
}

export const orderCards =(orden)=>{
    return({type:ORDER,payload:orden})
}


