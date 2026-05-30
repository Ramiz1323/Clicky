import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login } from "../services/auth.api.js";

export const useAuth = () =>{
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (username, password) => {
        setLoading(true);
        const response = await login(username, password);
        setUser(response.user);
        setLoading(false);
    }

    return{
        user, loading, handleLogin
    }
}