"use client";
import Image from "next/image";
import { features } from './data';

export default function DownloadPortal() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[70vh] overflow-hidden bg-black">
      <div className="flex flex-col md:flex-row items-stretch justify-center text-center h-full w-full bg-secondary-100">
        <div id="divx" className="relative flex items-center justify-center w-full md:w-1/2 bg-secondary-100" >
          <Image alt="Download Portal" src="/images/home/DownloadPortal.png" width={550} height={550} className="object-contain z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>
        </div>

        <div className="flex flex-col items-start justify-end w-full md:w-1/2 text-center md:text-left gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
            <div className="flex flex-col items-start w-1/2 h-1/2">
              <h1 className="text-4xl mb-4 text-black">Download our Landlords Portal</h1>
              <p>Insightful Management Control with Our Advanced Landlord App</p>
            </div>

            <div className="flex items-center justify-center mt-6 md:mt-0 w-1/2">
              <Image alt="Google Play" src="/images/home/GooglePlay.png" width={150} height={50} className="object-contain" />
              <Image alt="iOS Store" src="/images/home/iosStore.png" width={150} height={50} className="object-contain" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full bg-black h-1/2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start bg-black text-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
