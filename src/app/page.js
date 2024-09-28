import Product from '@/components/Ui/Product/Product';
import React, { Suspense, lazy } from 'react';
export const dynamic = 'force-dynamic'
const Banner = lazy(() => import('@/components/Ui/Banner/Banner'));
const Logo = lazy(() => import('@/components/Ui/Logo/Logo'));
const MidelBanner = lazy(() => import('@/components/Ui/MidelBanner/MidelBanner'));
const ShowUp = lazy(() => import('@/components/Ui/Show Up/ShowUp'));

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
