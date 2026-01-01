import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth, useHandleLogout } from "../hooks/authHooks";
import { validateAuthTokenResponse } from "../authHelper";
import { UserFeedbackContext, type Feedback } from "../components/userFeedbackContext/UserFeedbackContext";
import config from "../config.json";
import addUserFeedback from "../services/addUserFeedback";

const AuthCallbackPage = () => {
    const userFeedbackContext = useContext(UserFeedbackContext)

    const authInfo = useAuth();
    const navigate = useNavigate();
    const handleLogout = useHandleLogout();

    if (!userFeedbackContext) throw new Error("User Feedback Context does not exist")
    if (!authInfo) throw new Error("Error fetching authentication information")

    const { setUserFeedback } = userFeedbackContext;
    const { setTokens, isAuthenticated } = authInfo;

    const authReturnedCode = window.location.search.split("&")[0]
        .replace("?code=", "")
    useEffect(() => {
        (async () => {
            if (!isAuthenticated) {
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

                    if (!response.ok) {
                        console.error(`token request failure status code:${response.status}`)
                        const newFeedback: Feedback = { message: "Authentication failure, please try again", type: "error" }
                        addUserFeedback({ newFeedback, setUserFeedback })
                        navigate("/")
                    }

                    const responseJson = await response.json()
                    setTokens(responseJson);
                    if (!validateAuthTokenResponse(responseJson)) {
                        console.error("Incomplete token response logging out user, clearing Authentication")
                        sessionStorage.setItem("userFeedbackMessage", "Authentication error, please try again")
                        sessionStorage.setItem("userFeedbackType", "error")
                        handleLogout()
                    };

                    // TESTING--------------------------------------------------------------
                    // sessionStorage.setItem("userFeedbackMessage", "TEST ERORR TEST")
                    // sessionStorage.setItem("userFeedbackType", "error")
                    // const sessionMessage = sessionStorage.getItem("userFeedbackMessage")
                    // const sessionMessageType = sessionStorage.getItem("userFeedbackType");
                    // console.log("Adding testing items:", (sessionMessage && sessionMessageType))

                    sessionStorage.removeItem("codeVerifier")

                    navigate("/")
                } catch (e) {
                    console.error("Unexpected error fetching tokens", e)
                    const newFeedback: Feedback = {
                        message: "An unexpected error occurred, please try to login again",
                        type: "error"
                    }
                    addUserFeedback({newFeedback, setUserFeedback})
                    setTimeout(() => {
                        navigate("/")
                    })
                }
            }
        })()
    })
    return (
        <>
            <h1>Auth callback</h1>
        </>
    )
}
export default AuthCallbackPage;