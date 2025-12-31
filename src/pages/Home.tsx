import { useContext, useEffect } from "react";
import { useAuth } from "../hooks/authHooks";
import { UserFeedbackContext, type Feedback } from "../components/userFeedbackContext/UserFeedbackContext";
import addUserFeedback from "../services/addUserFeedback";

const Home = () => {
    const userFeedbackContext = useContext(UserFeedbackContext)
    if (!userFeedbackContext) throw new Error("User Feedback Context does not exist")
    const { userFeedback, setUserFeedback } = userFeedbackContext;
    const { tokens } = useAuth();

    const newFeedback: Feedback = { message: "Authentication failure, please try again", type: "error" }

    useEffect(() => {
        if (userFeedback.length === 0) {
            console.log("adding user feedback")
            addUserFeedback({ newFeedback, setUserFeedback })
            addUserFeedback({ newFeedback, setUserFeedback })
            addUserFeedback({ newFeedback, setUserFeedback })
        }
    }, [])
    console.log("tokens:", tokens)
    console.log("session verifier", sessionStorage.getItem("codeVerifier"))
    return (
        <>
            <h1>Home Page</h1>
        </>
    )

}

export default Home;