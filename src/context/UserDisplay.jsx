import { useContext } from "react";
import { UserContext } from "./UserContext";



// const defaultUserDisplay = {

// }

// export const UserDisplay = createContext(defaultUserDisplay);

export default function UserDisplay(){
    //-- 
    // let globalUserData = useContext(UserContext)
    const {userData, setUserData} = useContext(UserContext);


    //-- create a function to invoke onChange event
    function updateUserData(event){
        setUserData({jwt:event.target.value})
    }

    return (
        <div>
            {/* -- */}
            {/* <h1>User JWT: {globalUserData.userData.jwt}</h1> */}
            
            <h1>User JWT: {userData.jwt}</h1>
            <input
            type= "text"
            name= "jwt"
            id= "jwt"
            value= {userData.jwt}

            //-- this is a way to do the onChange event, 
            // onChange= {(event) => {setUserData({jwt: event.target.value})}}

            //-- This is the cleaner way, make a function and invoke the fuction
            onChange= {updateUserData}
            />

        </div>
    )
    
}