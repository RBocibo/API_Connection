import { listPosts } from "./making-requests";
import { getPostById } from "./making-requests";
import { createPost } from "./making-requests";

document.getElementById('buttonList').addEventListener('click' , listPosts);
document.getElementById('getPostByIdButton').addEventListener('click', getPostById)
document.getElementById('createPostByIdButton').addEventListener('click', createPost)


