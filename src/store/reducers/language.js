import { CHANGE_THE_LANGUAGE } from '../actionTypes';

export default function languageReducer (state = ['en'],action ) {
    switch (action.type){
        case CHANGE_THE_LANGUAGE: {
            const {type , language } = action
            return language
            
        }
        default:
            return state
    }
}