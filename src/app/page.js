import Product from '@/Components/Ui/Product/Product';
import React, { Suspense, lazy } from 'react';
export const dynamic = 'force-dynamic'
const Banner = lazy(() => import('@/Components/Ui/Banner/Banner'));
const Logo = lazy(() => import('@/Components/Ui/Logo/Logo'));
const MidelBanner = lazy(() => import('@/Components/Ui/MidelBanner/MidelBanner'));
const ShowUp = lazy(() => import('@/Components/Ui/Show Up/ShowUp'));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>
        <div>
          <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
        </div>
      </div>}>
        <Banner />
        <Logo />
        <ShowUp />
        <Product/>
        <MidelBanner />
      </Suspense>
    </div>
  );
}
