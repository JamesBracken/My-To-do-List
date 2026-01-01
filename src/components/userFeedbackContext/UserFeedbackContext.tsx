import { createContext, useState } from "react";

export type Feedback = {
    message: string | null,
    type: "message" | "error",
}

type FeedbackContextType = {
    userFeedback: Feedback[],
    setUserFeedback: React.Dispatch<React.SetStateAction<Feedback[]>>,
}

export const UserFeedbackContext = createContext<FeedbackContextType | null>(null)

export const FeedbackProvider = ({ children }) => {
    const [userFeedback, setUserFeedback] = useState<Feedback[]>([])
    return (
        <UserFeedbackContext value={{ userFeedback, setUserFeedback }}>
            {children}
        </UserFeedbackContext>
    )
}