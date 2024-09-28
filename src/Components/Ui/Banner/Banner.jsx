import React from 'react';
const Banner = () => {
    return (
        <div className=" relative overflow-hidden">
            <div
                className="h-[540px] bg-fixed bg-cover bg-center flex flex-col items-start justify-center"
                style={{ backgroundImage: `url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')` }}
            >
                <div className="p-8 ">
                    <h1 className="text-5xl text-white font-bold my-4">
                        Raining Offers For <br />
                        Hot Summer!
                    </h1>
                    <p className="text-lg text-white mb-6">25% Off On All Products</p>
                    <div className='flex items-center space-x-2'>
                        <button className="btn">
                            SHOP NOW
                        </button>
                        <button className="btn hover:btn-outline">
                            Find More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;