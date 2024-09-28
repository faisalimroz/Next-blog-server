import { productData } from '@/util/Fetching/Featching';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Products | DNK",
    description: "This is my products page",
};

const page = async () => {
    let products = [];

    try {
        products = await productData();
    } catch (error) {
        console.error('Error fetching products:', error);
    }

    return (
        <div>
            <div className='flex items-center justify-center gap-3'>
                <h2 className='text-3xl font-semibold text-center'>Products</h2>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-primary">Category</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-purple-600 rounded-box z-[1] w-52 p-2 shadow text-white font-medium">
                        <li><Link href='/search/mans'>Man's</Link></li>
                        <hr />
                        <li><Link href='/search/Woman'>Woman's</Link></li>
                    </ul>
                </div>
            </div>

            <div className='mt-7'>
                <div className='grid lg:grid-cols-3 gap-3'>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map(product => (
                            <div key={product._id}>
                                <div className="card bg-base-100 shadow-xl rounded-lg h-[500px]">
                                    <figure>
                                        <Image
                                            className='h-[300px] object-cover hover:scale-105 rounded-lg'
                                            width={400}
                                            height={400}
                                            src={product.photo}
                                            alt={product.name}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.name}</h2>
                                        <p>{product.description}</p>
                                        <h2 className="card-title text-orange-500">${product.price}</h2>
                                        <div className="card-actions justify-end">
                                            <Link href={`/products/${product._id}`}>
                                                <button className="btn btn-primary">Order Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;