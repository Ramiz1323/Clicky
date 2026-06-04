import { useContext, useEffect, useState } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
    const context = useContext(PostContext);
    const { loading, setLoading, feed, setFeed} = context;

    const handleGetFeed = async() => {
        setLoading(true);
        try{
            const data = await getFeed();
            setFeed(data.posts.reverse());
        } finally {
            setLoading(false);
        }
        // console.log("Feed data:", feed);
    }

    useEffect(()=>{
        handleGetFeed();
    }, []);

    return {loading, handleGetFeed, feed}
}