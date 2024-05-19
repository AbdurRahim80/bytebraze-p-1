import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { MdBookmarkAdd } from "react-icons/md";
import { setBlog } from '../utilies';

const Blog = () => {

    const blog = useLoaderData();
    const [borderIndex, setBorderIndex] = useState(0);
    const { title, type_of, reading_time_minutes, readable_publish_date, profile_image, user, profile_image_90, comments_count } = blog;
    console.log(blog);

    const handleBlog = blog => {
        setBlog(blog);
    }

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8  dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{type_of}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center md:space-x-2">
                            <img src={user.profile_image} alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                            <p className="text-sm">{user.name} • {new Date(readable_publish_date).toLocaleDateString()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes}min read • {comments_count} views</p>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
                        <Link
                            onClick={() => setBorderIndex(0)}
                            to={''}
                            rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                            ${borderIndex === 0 ? 'border border-b-0' : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link
                            onClick={() => setBorderIndex(1)}

                            to={'author'}
                            rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                            ${borderIndex === 1 ? 'border border-b-0' : "border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        <div
                            onClick={() => handleBlog(blog)}
                            className='bg-primary hover:opacity-75 opacity-60 hover:cursor-pointer hover:scale-105 overflow-hidden rounded-full p-1'>
                            <MdBookmarkAdd size={25} className='text-secondary' />
                        </div>
                    </div>
                </div>
                <Outlet />
            </article>

        </div>
    );
};

export default Blog;