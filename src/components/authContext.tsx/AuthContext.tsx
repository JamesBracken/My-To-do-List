import { useState } from "react";
import { createContext } from "react";

type AuthContextType = {
    tokens : Tokens | null,
    setTokens : React.Dispatch<React.SetStateAction<Tokens | null>>;
}

type Tokens = {
    access_token: string,
    expires_in: number,
    id_token: string,
    refresh_token: string,
    token_type: string
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}) => {
    const [tokens, setTokens] = useState<Tokens | null>(null)

    return(
        <AuthContext value={{tokens, setTokens}}>
            {children}
        </AuthContext>
    )
}