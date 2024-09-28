import { productData } from '@/util/Fetching/Featching';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Product = async() => {
    
    const products=await productData()
    if (!products.length===0) {
      return <>Error</>
    }
    return (
        <div className='mt-4'>
           <h1 className='text-center text-3xl font-semibold py-4'>Products</h1>
     <div className='grid lg:grid-cols-3 gap-3'>
     {
        products?.slice(0,5).map((product) => (
          <div key={product._id}>
          <div className="card bg-base-100 shadow-xl h-[500px]">
  <figure>
    <Image className='h-[300px] object-cover hover:scale-105' width={400} height={400}
      src={product.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <h2 className="card-title text-orange-500">${product.price}</h2>
    <div className="card-actions justify-end">
    <Link href={`/products/${product._id}`}> <button className="btn btn-primary">Order Now</button></Link>
    </div>
  </div>
</div>
          </div>
        ))}
     </div>
        </div>
    );
};

export default Product;