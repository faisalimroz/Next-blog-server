
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Oops! Page Not Found</h2>
      <p className="mb-6 text-gray-500">Sorry, the page you are looking for does not exist.</p>
     <Link href='/products'> <button 
        className="btn btn-primary" 
      >
        Go to Homepage
      </button></Link>
    </div>
  );
};

export default NotFoundPage;
