import type { Feedback } from "../components/userFeedbackContext/UserFeedbackContext";

type addUserFeedbackParams = {
    newFeedback: Feedback,
    setUserFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>
}

const addUserFeedback = ({ newFeedback, setUserFeedback }: addUserFeedbackParams) => {
    setUserFeedback(prev => [...prev, newFeedback])
    console.log("set user feedback to add", newFeedback)
}

export default addUserFeedback;