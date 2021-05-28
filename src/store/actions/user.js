import { ADD_USERNAME } from '../actionTypes'

export const addUsername = (username) =>{
    return {
        type: ADD_USERNAME,
        username
    
    }
}