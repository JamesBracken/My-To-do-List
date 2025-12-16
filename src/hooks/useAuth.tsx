import { useContext } from "react";
import { AuthContext } from "../components/authContext/AuthContext";

function useAuth() {
    const context = useContext(AuthContext)
    if(!context) throw new Error("Context does not exist")
    const {tokens, setTokens, user, isAuthenticated} = context
    console.log("isAuthenticated in useAuth:", isAuthenticated);
    return {tokens, setTokens, user, isAuthenticated};
} 
export default useAuth;