'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
    const router=useRouter()
    const handelSearch=(e)=>{
        e.preventDefault();
        const query = e.target.search.value; 
        console.log('Search query:', query);
         router.push(`/search/${query}`)
         e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handelSearch} className=" relative mx-auto text-gray-600">
                <input  className="border-2 border-gray-300 bg-white h-10  w-52 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 bottom-2 mt-5 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </form>
        </div>
    );
};

export default SearchBar;