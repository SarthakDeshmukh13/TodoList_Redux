import * as types from "./actionTypes";


export const COMPLETE_TODO = (todo) = ({
    type : types.COMPLETE_TODO,
    payload : todo,
}) ;