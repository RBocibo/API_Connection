import { listPosts } from "./making-requests";
import { getPostById } from "./making-requests";
import { createPost } from "./making-requests";
import { removePost } from "./making-requests";

document.getElementById('buttonList').addEventListener('click' , listPosts);
document.getElementById('getPostByIdButton').addEventListener('click', getPostById);
document.getElementById('createPostButton').addEventListener('click', createPost);
document.getElementById('removePostButton').addEventListener('click', removePost)

