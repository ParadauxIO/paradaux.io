import { supabase } from "../state/supabase"

const getBlogPosts = async () => { 
    let { data, error } = await supabase.from("blog_posts").select("*");

    if (error) console.error(error);

    return data;
}

export { getBlogPosts }