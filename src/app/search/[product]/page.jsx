import NotFoundPage from '@/components/Ui/NotFound/NotFpund';
import { searchProducts } from '@/util/Fetching/Featching';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page =async ({params}) => {
    const products= await searchProducts(params.product)
    if (products.length===0) {
       return <NotFoundPage></NotFoundPage> 
    }
    return (
        <div>
           
           <div className='mt-7'>
            <div className='grid lg:grid-cols-3 gap-3'>
     {
        products.map((product) => (
          <div key={product._id}>
          <div className="card bg-base-100 shadow-xl rounded-lg h-[500px]">
  <figure>
    <Image className='h-[300px] object-cover hover:scale-105 rounded-lg' width={400} height={400}
      src={product.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
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
        </div>
    );
};

export default page;