import React from 'react';
import logo1 from '../../../assets/client-logo-1.png';
import logo2 from '../../../assets/client-logo-2.png';
import logo3 from '../../../assets/client-logo-3.png';
import logo4 from '../../../assets/client-logo-4.png';
import logo5 from '../../../assets/client-logo-5.png';
import Image from 'next/image';
const Logo = () => {
    return (
        <div>
            <div className="mt-10 flex flex-col items-center">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-10">
                <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform">
                    <Image width={100} src={logo1} alt="Client Logo 1" className="w-[140px]  object-contain" />
                </div>
                <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform">
                    <Image width={100} src={logo2} alt="Client Logo 2" className="w-[140px]  object-contain" />
                </div>
                <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform">
                    <Image width={100} src={logo3} alt="Client Logo 3" className="w-[140px]  object-contain" />
                </div>
                <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform">
                    <Image width={100} src={logo4} alt="Client Logo 4" className="w-[140px]  object-contain" />
                </div>
                <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform">
                    <Image width={100} src={logo5} alt="Client Logo 5" className="w-[140px]  object-contain" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Logo;