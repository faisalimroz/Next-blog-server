'use client'
import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo@2x-free-img.png';
import Link from 'next/link';
import { useForm } from "react-hook-form"
import { RegisterActions } from '@/util/actions/RegisterAction';
import { useRouter } from 'next/navigation';

const page = () => {
    const router=useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit =async (data) => {
        const user={
            name:data.name,
            photo:data.photo,
            email:data.email,
            password:data.password,
            role:'user',
        }
        console.log(user);

        const res=await RegisterActions(user)
        try {
            if (res?.status===true) {
              router.push('/login')
            }
           } catch (error) {
            console.error(error.message);
           }
      
    }
    return (
        <div>

            <div className="min-h-screen  text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white  sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>

                            <Image width={100} height={100} alt='logo' src={Logo}
                                className="w-mx-auto" />

                            <h2 className='text-3xl text-center uppercase font-semibold'>Register Page</h2>
                        </div>

                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                  <input {...register("name", { required: true })}
                                        className="w-full px-8 my-1 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" placeholder="Name" />
                                  <input {...register("photo", { required: true })}
                                        className="w-full my-4 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="url" placeholder="Photo Url" />
                                  <input {...register("email", { required: true })}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input {...register("password", { required: true })}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-blue-400 text-white-500 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                        Log In
                                    </button>
                                  </form>
                                    <Link href='/login'><p className="mt-6  text-gray-900 text-center">
                                       You Have Any Account <span className='text-blue-500'>Login</span>
                                    </p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;