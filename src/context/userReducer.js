export const userReducer = (previousState, instructions) => {
    //-- ... spread operator, to reference the previous state but make it a new object
    let newState = {...previousState}
    
    switch (instructions.type){
        case "login":
            newState = "Pretend a fetch request finished and returned a JWT";
            return newState;
        
        case "logout":
            // newState = "";
            // return newState;
            return ""

        default:
            return newState

    }
}