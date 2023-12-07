import React from 'react';
import Link from 'next/link';

const NewNav = () => {
  return (
    <nav className="flex items-center justify-between text-lg font-medium mt-7 p-4 mx-[90px]">
      <span className="text-2xl font-SpaceGrotesk font-semibold italic ">
        Oda<span className="text-[#b9ff66]">Wise</span>
      </span>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/services">Services</Link>
      <Link href="/use-case">Use Case</Link>
      <Link href="/pricing">Pricing</Link>
    </nav>
  );
};

export default NewNav;
