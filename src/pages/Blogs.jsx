import React, { useState, useEffect } from 'react';

const Blogs = () => {
  

  return (
    <div className='flex justify-center items-center  h-[50vh] '>
      
<a href="https://huamanraj.hashnode.dev/" class="inline-flex sm:mt-1  mt-28 items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
    <img className='h-10 rounded-full  w-10' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1715791496236/5UP6jh9Mm.png?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp" alt="" />                                             
    <span class="w-full p-2 font-bold">Read My Blogs On Hashnode</span>
    <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 

    </div>
  );
};

export default Blogs;