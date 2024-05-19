import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

import { GetBlogs, delBlog } from '../utilies';
import Emty from '../components/Emty';

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlog = GetBlogs();
        setBlogs(storedBlog);
    }, [])

    const handleRomoveBlog = id =>{
        delBlog(id);
        const storedBlog = GetBlogs();
        setBlogs(storedBlog);
    }

    if(blogs.length<1) return <Emty message= 'No Card here' address={'/blogs'}/>
    return (
        <div className="grid justify-center grid-cols-1 mx-auto max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5">
            {
                blogs.map(blogCard => <BlogCard key={blogCard.id} blogCard={blogCard} deleteable = {true} handleRomoveBlog = {handleRomoveBlog} />)
            }
        
        </div>

    );
};

export default Bookmarks;