import { createContext, useState, useEffect } from "react";
import { getProfile } from "./services/auth.api";

export const AuthContext = createContext();

// Authentication State Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getProfile();
        if (data && data.user) {
          setUser(data.user);
        }
      } catch (err) {
        console.log("No active session:", err.message);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};