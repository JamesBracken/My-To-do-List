import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FIREBASE_CONFIG from "../../constants";
//Setting up firebase instance

const app = initializeApp(FIREBASE_CONFIG)

const AddTask = () => {
    return (
        <form action="">
            <input type="text" />
        </form>
    )
}

export default AddTask;