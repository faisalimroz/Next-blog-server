'use client'
import Image from 'next/image';
import React from 'react';

const error = () => {
    return (
        <div>
            <div className="h-screen   flex items-center">
    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-8">
                <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 500</div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                Sorry we couldn't find any data
            </p>
            
            <button onClick={()=>location.reload()} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">Refresh Page</button>
    </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <Image width={400} height={400} src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found"/>
        </div>
    
    </div>
</div>
        </div>
    );
};

export default error;