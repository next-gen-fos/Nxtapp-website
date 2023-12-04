import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mx-[90px] text-black">
      {/* Logo on the far left */}
      <div className="flex items-center">
        <span className="text-2xl font-SpaceGrotesk font-semibold italic ">Otherwise</span>
      </div>

      <div className="lg:hidden">
        <button className="text-xl focus:outline-none">
          <span className="block">&#9776;</span>
        </button>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/use-case">Use Case</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/download">
          <button className="bg-black rounded-md border border-black text-white px-4 py-2">Download</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
