import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log("isAuthenticated in protectedRoute:", isAuthenticated)
    return children;
}

export default ProtectedRoute;