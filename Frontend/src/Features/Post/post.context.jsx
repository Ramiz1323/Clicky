import { useState } from "react";
import { createContext, useContext } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState(null)

    return (
        <PostContext.Provider value={{ loading, setLoading, feed, setFeed }}>
            {children}
        </PostContext.Provider>
    );
}