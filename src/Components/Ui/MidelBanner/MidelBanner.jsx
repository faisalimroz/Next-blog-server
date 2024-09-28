import React from 'react';
import banner from '../../../assets/banner-03.jpg';
const MidelBanner = () => {
    return (
        <div>
            <div className="mt-10 relative overflow-hidden">
            <div
                className="h-[500px] bg-fixed bg-cover bg-center flex flex-col items-start justify-center"
                style={{ backgroundImage: `url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg')` }}
            >
                <div className="p-8 ">
                    <p className="text-xl text-white font-semibold">Limited Time Offer</p>
                    <h1 className="text-4xl text-white font-bold my-4">
                        Limited Time Offer Special Edition
                    </h1>
                    <p className="text-lg text-white mb-6">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
                    <button className="btn">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MidelBanner;