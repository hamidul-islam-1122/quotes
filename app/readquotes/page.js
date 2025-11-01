"use client";
import React from 'react';
import Routes from '../api/add/routes.js';

const Page = () => {
  return (
    <main className='p-6'>
      <h1 className='font-bold text-3xl mb-4'>Read Quotes</h1>
      <div className='flex flex-col gap-4'>
        <Routes />
      </div>
    </main>
  );
};

export default Page;