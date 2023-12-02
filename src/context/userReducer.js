export const userReducer = (previousState, instructions) => {
    //-- ... spread operator, used to copy elements from an array
    //-- into a new array without affecting the original
    let newState = {...previousState}
    
    console.log(instructions)
    
    switch (instructions.type){
        
        case "setJwt":
            newState = instructions.data;
            return newState;

        case "login":
            newState = "Pretend a fetch request finished and returned a JWT";
            return newState;
        
        case "logout":
            // newState = "";
            // return newState;
            return "";

        default:
            return newState;

    }
}