import { handleLogin } from "../../authHandlers";
import { useAuth } from "../../hooks/authHooks";
const ProtectedRoute = ({ children }) => {
    const { tokens } = useAuth();

    if (!tokens || (tokens && tokens?.error)) {
        handleLogin()
    }
    return children;
}

export default ProtectedRoute;