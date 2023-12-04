import Image from 'next/image';
import ilustration from '@/public/illustration.svg';
import appstore from '@/public/AppStore.svg';
import google from '@/public/GooglePlay.svg';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-9 justify-center mx-[90px]">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-6xl font-semibold mb-[35px]">
          The Value of Your Money Stays <br /> Intact
        </h2>
        <p className="text-lg mb-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button>
            <Image src={appstore} alt="appstore" className="mx-2 my-2" width={125} height={50} />
          </button>
          <button>
            <Image src={google} alt="appstore" className="mx-2 my-2" width={125} height={50} />
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 justify-center item-center">
        <Image src={ilustration} alt="ilustration" className="mx-7 my-2" width={610} height={50} />
      </div>
    </div>
  );
}
