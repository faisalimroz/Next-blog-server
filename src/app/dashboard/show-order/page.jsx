'use client'
import error from '@/app/error';
import { useDeleteorderMutation, useGetOrderQuery } from '@/lib/Redux/Apis/orderApi/orderApi';
import { stateFulSetUser } from '@/util/getUser/stateFulSetUser';
import Image from 'next/image';
import React from 'react';

const page = () => {
  const user = stateFulSetUser()
  const { data, isLoading, isError } = useGetOrderQuery(user?.email)
  const [deleteOrder] = useDeleteorderMutation()
  if (isLoading) {
    return <>loading</>
  }
  if (isError) {
    return (
      <>  <div>
        <div className="h-screen   flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-8">
              <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 500</div>
              <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                Sorry we couldn't find any data
              </p>

              <button onClick={() => location.reload()} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">Refresh Page</button>
            </div>
            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
              <Image width={400} height={400} src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found" />
            </div>

          </div>
        </div>
      </div></>
    )
  }
  return (
    <div>
      <h2 className='text-3xl text-center py-3 font-semibold'>My Order List</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Order Status</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(order => (
                <tr key={order._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image width={100} height={100}
                            src={order.photo}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.productName}</div>
                        <div className="text-sm text-black">{order.address} {order.city}</div>
                        <div className="text-sm  text-black">{order.date?.slice(0, 10)} {order.time}</div>
                      </div>
                    </div>
                  </td>
                  <td>

                    <span className="text-xl">${order.price}</span>
                  </td>
                  <td>{order.status}</td>
                  <td>{order.quantity}x</td>
                  <th>
                    <button onClick={() => deleteOrder(order._id)} disabled={order.status==='Accepted'} className="btn text-white btn-xs btn-error">Delete</button>
                  </th>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;