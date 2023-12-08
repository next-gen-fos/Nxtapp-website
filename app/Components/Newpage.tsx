import React from 'react';
import Image from 'next/image';
import Apple from '../../public/AppStore.svg';

const Newpage = () => {
  return (
    <div className="flex  mx-[90px] mt-9 flex-col">
      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-6xl font-semibold mb-[35px]">Get the Value for your Money</h2>
          <p className="text-lg mb-[35px]">
            inflation affects your day-to-day life. Saving in Stable currency is a great way to diversify your savings
            and seize the opportunity to earn big. With OdaWise app, you can save in stable currency with a few clicks
            wherever you are.
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
              <Image src={Apple} alt="Appstore" width={125} height={50} />
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
