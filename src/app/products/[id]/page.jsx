import TermsModal from '@/components/Ui/Modal/Modal';
import { seenProduct } from '@/util/Fetching/Featching';
import { decodeToken } from '@/util/serverGetUser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const page = async({params}) => {
    const product= await seenProduct(params.id)
    const user= decodeToken()
    const OrderForm = dynamic(() => import('@/components/Ui/OrderForm/OrderForm'), { ssr: false })
    return (
<div>
  {
    product.stock===0?<TermsModal></TermsModal>: <div>
    <div className="hero  min-h-screen">
<div className="hero-content flex-col lg:flex-row">
<Image width={400} height={400} alt={product.name}
src={product.photo}
className="max-w-sm rounded-lg" />
<div>
<h1 className="text-5xl font-bold">{product.name}</h1>
<p className="py-1 text-2xl text-orange-500">${product.price}</p>
<p className="py-1 text-2xl text-orange-500">{product.stock===0?'Stock Out':'Stock In'}</p>

<p className="py-3">
  {product.description}
</p>
<OrderForm product={product}></OrderForm>
</div>
</div>
</div>
  </div>
  }
</div>
    );
};

export default page;