import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import config from "../config.json";
import { useAuth, useHandleLogout } from "../hooks/authHooks";
import { validateAuthTokenResponse } from "../authHelper";

const AuthCallbackPage = () => {
    const authInfo = useAuth();
    const navigate = useNavigate();
    const handleLogout = useHandleLogout();
    const { tokens, setTokens } = authInfo;
    const authReturnedCode = window.location.search.split("&")[0]
        .replace("?code=", "")

    if (!authInfo) throw new Error("Error fetching authentication information")
    useEffect(() => {
        (async () => {
            try {
                const codeVerifier = sessionStorage.getItem("codeVerifier");
                if (!codeVerifier) throw new Error("codeVerifier not found")

                if (!authReturnedCode) {
                    console.error("authReturnedCode not found")
                }

                const params = new URLSearchParams({
                    grant_type: "authorization_code",
                    client_id: config.amplify.userPoolClientId,
                    code: authReturnedCode,
                    redirect_uri: "http://localhost:5173/auth-callback",
                    code_verifier: codeVerifier,
                });

                const response = await fetch("https://eu-north-1dsoci5dtk.auth.eu-north-1.amazoncognito.com/oauth2/token", {
                    method: "POST",
                    body: params.toString(),
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        "Accept": "application/json"
                    }
                })

                // PENDING_TASK: ADD FURTHER ERROR HANDLING HERE AND REDIRECT USER THEN DISPLAY FEEDBACK
                if (!response.ok) {
                    console.error(`token request failure status code:${response.status}`)
                }

                const responseJson = await response.json()
                setTokens(responseJson);
                // PENDING_TASK : DISPLAY USER ERROR MESSAGE
                if (validateAuthTokenResponse(responseJson)) handleLogout();
                sessionStorage.removeItem("codeVerifier")
                navigate("/")
            } catch (e) {
                console.error("Unexpected error fetching tokens", e)
            }
        })()
    }, [])
    return (
        <>
            <h1>Auth callback</h1>
        </>
    )
}
export default AuthCallbackPage;