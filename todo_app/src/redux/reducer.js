import * as types from "./actionTypes" 

const initialState = {
    todos : [{id:1 , task : "Make React App" , complete: false}],
}

const todosReducer = (state = initialState , action) =>{
    switch (action.type) {
        case types.COMPLETE_TODO:
            return{
                ...state,
            }
    
        default:
            return state;
    }
}

export default todosReducer