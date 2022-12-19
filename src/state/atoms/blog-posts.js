import { atom } from "recoil";

const blogPostsAtom = atom({
    key: "blogPosts",
    default: []
});

export { blogPostsAtom }