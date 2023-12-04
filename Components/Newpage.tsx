import React from 'react';
import Image from 'next/image';

const Newpage = () => {
  return (
    <div className="flex  mx-[90px] mt-9 flex-col">
      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-6xl font-semibold mb-[35px]">The Value of Your Money Stays Intact</h2>
          <p className="text-lg mb-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="w-1/3 ">
          <Image src="/midsec.png" alt="normal" width={500} height={500} />
        </div>
        <div className="w-1/3 px-4 ">
          <h2 className="text-3xl font-bold mb-4">
            Unlock Financial Freedom with Oda<span className="text-[#b9ff66]">Wise</span>
          </h2>
          <p className="text-lg">
            Saving money is not just about putting cash aside; it&apos;s a path to financial empowerment. Start saving
            today and enjoy benefits like financial security, stress reduction, and the ability to achieve your
            financial goals.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Available for Download on</p>
        <div className="w-full flex items-center justify-center">
          <div className="flex">
            <button className=" rounded-full p-3 mx-2 my-2">
              <Image src="/Appstore.svg" alt="Appstore" width={125} height={50} />
            </button>
            <button className=" rounded-full p-3 mx-2 my-2">
              <Image src="/GooglePlay.svg" alt="Google Play" width={125} height={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpage;
