import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blogs }) => {
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
      <div className='max-w-[1240px] m-auto text-center'>
        <h1 className='text-4xl font-bold mb-8'>Blogs</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black equal-height-grid'>
          {blogs.data.map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id}>
              <div className='bg-white rounded-xl overflow-hidden drop-shadow-md flex flex-col h-full'>
                <div className='h-1/2'>
                  <img src={`http://localhost:1337${item.attributes.coverimage.data[0].attributes.url}`} alt="Cover" className='w-full h-full object-cover' />
                </div>
                <div className='p-8 flex-grow'>
                  <h3 className='font-bold text-2xl my-1'>{item.attributes.title}</h3>
                  <p className='text-gray-600 text-xl'>{item.attributes.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
