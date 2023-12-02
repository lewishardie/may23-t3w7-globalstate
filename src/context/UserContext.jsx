import { createContext, useReducer } from "react"
import { userReducer } from "./userReducer";


const defaultUserData = {
    jwt: "not empty jwt"
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){
    //-- const used when reducer hook isnt being used
    // const [userData, setUserData] = useState(defaultUserData)
    const [userData, userDataDispatch] = useReducer(userReducer, defaultUserData);
    return(
        <UserContext.Provider value={
            {
                userData: userData, 
                userDataDispatch: userDataDispatch
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
}