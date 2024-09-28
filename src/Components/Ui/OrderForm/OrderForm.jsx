'use client'
import { useSubmitOrderMutation } from '@/lib/Redux/Apis/orderApi/orderApi';
import { stateFulSetUser } from '@/util/getUser/stateFulSetUser';
import Error from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const OrderForm = ({ product }) => {
    const user = stateFulSetUser();
    const [count, setCount] = useState(1);
    const [ordersubmit,{isLoading,isError}]=useSubmitOrderMutation()
    const router=useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const order={
            productName:product.name,
            price:parseFloat(product.price),
            productId:product._id,
            photo:product.photo,
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address,
            city:data.city,
            quantity:parseInt(count),
            status:'Pending',
            date: new Date(),
            time: new Date().toLocaleTimeString()
        }
      if (user) {
      if (product.stock!==0) {
        const res=await ordersubmit(order)
        if (res.data.status==='order successful submit') {
            router.push('/dashboard/show-order')
            router.refresh()
        }else{
          return  new Error('not submited')
        }
      }
      }else{
        router.push('/login')
        router.refresh()
      }
        
    };

    return (
        <div>
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label>Full Name</label>
                                        <input
                                            {...register("name", { required: true })}
                                            value={user?.name}
                                            readOnly
                                            type="text"
                                            id="name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="md:col-span-5">
                                        <label>Email Address</label>
                                        <input
                                            value={user?.email}
                                            readOnly
                                            type="text"
                                            {...register("email", { required: true })}
                                            id="email"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            placeholder="email@domain.com"
                                        />
                                        {errors.email && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="md:col-span-3">
                                        <label>Address / Street</label>
                                        <input
                                            {...register("address", { required: true })}
                                            type="text"
                                            id="address"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            placeholder=""
                                        />
                                        {errors.address && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label>City</label>
                                        <input
                                            {...register("city", { required: true })}
                                            type="text"
                                            id="city"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            placeholder=""
                                        />
                                        {errors.city && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label>Phone Number</label>
                                        <input
                                            {...register("phone", { required: true })}
                                            type="number"
                                            id="city"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            placeholder=""
                                        />
                                        {errors.city && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label>How many products?</label>
                                        <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <button
                                                type='button'
                                                disabled={count === 1}
                                                onClick={() => setCount(count - 1)}
                                                className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                </svg>
                                            </button>
                                            <input
                                                {...register("quantity", { required: true, min: 1, max: product.stock })}
                                                id="quantity"
                                                className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                value={count}
                                                onChange={(e) => {
                                                    const value = Math.max(1, Math.min(product.stock, Number(e.target.value) || 1));
                                                    setCount(value);
                                                }}
                                            />
                                            <button
                                                type='button'
                                                disabled={product.stock === count}
                                                onClick={() => setCount(count + 1)}
                                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                                                </svg>
                                            </button>
                                        </div>
                                        {errors.quantity && <span className="text-red-500">Quantity is required and must be between 1 and {product.stock}</span>}
                                    </div>

                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">
                                            {
                                                user?                                            <button disabled={product.stock===0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Order Now</button>:<><Link href='/login'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Please Login</button></Link></>
                                            }
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
