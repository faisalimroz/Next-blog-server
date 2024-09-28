
import { productData } from '@/util/Fetching/Featching';
import { decodeToken } from '@/util/serverGetUser';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
    const user=decodeToken()
  
    return (
        <div>
           
          <div className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
  <Image width={100} height={100} className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 " src={user?.photo} alt=""/>
  <h1 className="text-2xl text-gray-500 font-bold mt-2">
    {user?.name}
  </h1>
  <h2 className="text-base md:text-xl text-gray-500 font-bold">
    {user?.email}
  </h2>
</div>
        </div>
    );
};

export default page;