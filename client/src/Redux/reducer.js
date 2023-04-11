import { ADD_FAV, REMOVE_FAV, FILTER, ORDER  } from "./actions";
import { useState } from "react";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state=initialState,action)=>{


    switch(action.type){
        case ADD_FAV: 
            return ({...state,
                myFavorites: [...state.allCharacters,action.payload],
                allCharacters: [...state.allCharacters,action.payload], //Creamos una copia para no pisar el estado original y poder hacer el filtrado
            })
        case REMOVE_FAV:
            return({...state,
                myFavorites: state.myFavorites.filter((char)=>  char.id !== action.payload)
            })
        case FILTER:
            
            const allCharFiltered = state.allCharacters.filter((char)=>char.gender===action.payload)

            return {...state,
                myFavorites:allCharFiltered,
            }

        case ORDER:
            return {...state,
            
            myFavorites: 
                    action.payload ==="A" 
                    ? state.allCharacters.sort((a,b)=> a.id - b.id) 
                    : state.allCharacters.sort((a,b)=> b.id - a.id)
                    
                }
            
            

        default:
            return ({...state})
    }



}

export default rootReducer;