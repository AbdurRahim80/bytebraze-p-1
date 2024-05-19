



import React from 'react';
import Markdown from 'react-markdown'
import { useLoaderData } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const Author = useLoaderData();
    const { id, title, url, description, name, cover_image, user, published_at, tags, body_html } = Author;
    return (
        <div>
            <div className='border-2 p-1  rounded-md'>
                <div
                    rel="noopener noreferrer" href="#" className="mx-auto group 
                    hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image} />
                    <div>
                        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                            {tags.map(tag => (
                                <a
                                    key={tag}
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:underline">
                                    #{tag}
                                </a>
                            )
                        )}

                        </div>
                    </div>
                    <div className="p-6 space-y-2">
                        <a href={url}  target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;