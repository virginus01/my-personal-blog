import React from 'react';
import Link from 'next/link';
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <div>
        <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>Welcome to my profile solace</p>
      </div>
      <Posts />
    </main>
  );
}


