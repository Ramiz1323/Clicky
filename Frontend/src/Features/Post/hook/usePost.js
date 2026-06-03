import { useContext, useEffect, useState } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
    const context = useContext(PostContext);
    const { loading, setLoading, feed, setFeed} = context;

    const handleGetFeed = async() => {
        setLoading(true);
        const data = await getFeed();
        setFeed(data.posts.reverse());
        setLoading(false);
    }

    useEffect(()=>{
        handleGetFeed();
    }, []);

    return {loading, handleGetFeed, feed}
}