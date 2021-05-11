export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_PLUS = "MEMORY_PLUS"

export const changeOperation = (operator) =>{
    return ({type:CHANGE_OPERATION, payload:operator})
}

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const clearDisplay = () =>{
    return ({type:CLEAR_DISPLAY})
}

export const memoryPlus = (memory) =>{
    return ({type:MEMORY_PLUS, payload:memory})
}