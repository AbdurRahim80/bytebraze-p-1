import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
export const GetBlogs = ()=>{
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// seve data

export const setBlog = blog =>{
    let blogs = GetBlogs()
    const isEixted = blogs.find(b=> b.id ===blog.id)
    if(isEixted){
        return toast.error("Already eixt it");
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success("Blog bookmark successful!")
}

// delete

export const delBlog = id =>{
    let blogs = GetBlogs();
    const remaining = blogs.filter(b=> b.id !==id)
    localStorage.setItem("blogs", JSON.stringify(remaining));
    toast.success("Blog remove successful!")
}