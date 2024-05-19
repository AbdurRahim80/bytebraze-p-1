
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blogCard, deleteable,handleRomoveBlog }) => {
    const { id, title, description, name, cover_image, user, published_at } = blogCard;
    console.log(blogCard);

    return (
        <div className='border-2 p-1 transition rounded-md hover:border-secondary hover:scale-105 relative'>

            <Link
                to={`/blog/${id}`}
                rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group 
                 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{user.name}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {/* {
                deleteable &&
               ( <div
                    // onClick={() => handleBlog(blog)}
                    className='bg-primary hover:opacity-75 opacity-60 hover:cursor-pointer hover:scale-105 w-8 overflow-hidden rounded-full p-1 absolute -right-0'>
                    <MdDeleteForever size={25} className='text-secondary' />
                </div>)
            } */}
            {deleteable && <div
                onClick={() => handleRomoveBlog(id)}
                className='bg-primary hover:opacity-75 opacity-60 hover:cursor-pointer hover:scale-105 w-8 o rounded-full p-1 absolute -right-3 -top-3'>
                <MdDeleteForever size={25} className='text-secondary' />
            </div>}

        </div>
    );
};

export default BlogCard;