import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getBlogPosts } from "../../partials/blog";
import { blogPostsAtom } from "../atoms/blog-posts";

export default function useBlogPosts() { 
    let [blogPosts, setBlogPosts] = useRecoilState(blogPostsAtom);

    async function load() { 
        let posts = await getBlogPosts();

        setBlogPosts(posts)
        console.log("a", posts)
    }

    useEffect(() => { 
        if (blogPosts.length === 0) { 
            load();
        }
    }, [])

    return {
        blogPosts,
        setBlogPosts
    }
}