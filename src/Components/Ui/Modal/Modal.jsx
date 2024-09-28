import Link from 'next/link';
import React from 'react';

const TermsModal = () => {
  return (
    <div
      id="default-modal"
      className="top-0 right-0 left-0  flex justify-center items-center w-full h-[calc(100%-1rem)]  overflow-y-auto overflow-x-hidden"
    >
      <div className="relative p-4 w-full max-w-2xl ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
             Product Not Available
            </h3>
          </div>

        
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Ops Product Not Available Don't Mind
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Link href='/'>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Back Home Page
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
