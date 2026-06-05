import { useContext, useEffect, useState } from "react";
import { PostContext } from "../post.context";
import { getFeed, createPost } from "../services/post.api";

export const usePost = () => {
    const context = useContext(PostContext);
    const { loading, setLoading, feed, setFeed} = context;

    const handleGetFeed = async() => {
        setLoading(true);
        try{
            const data = await getFeed();
            setFeed(data.posts);
        } finally {
            setLoading(false);
        }
    }


    const handleCreatePost = async(caption, image) => {
        setLoading(true);
        try {
            const data = await createPost(caption, image);
            setFeed([data.post, ...feed]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        handleGetFeed();
    }, []);

    return { loading, feed, handleCreatePost }
}