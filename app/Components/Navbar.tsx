import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 mx-[90px] text-black">
      <div className="flex items-center">
        <span className="text-2xl font-SpaceGrotesk font-semibold italic ">OdaWise</span>
      </div>
      <div className="items-center space-x-8">
        <Link href="/#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Services</Link>
        <Link href="#">Use Case</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Blog</Link>
        <Link href="#">
          <button className="bg-black rounded-md border border-black text-white px-4 py-2">Download</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
