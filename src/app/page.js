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
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Logo />
        <ShowUp />
        <Product/>
        <MidelBanner />
      </Suspense>
    </div>
  );
}
