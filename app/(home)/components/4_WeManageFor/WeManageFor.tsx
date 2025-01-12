"use client";
import Image from "next/image";

export default function WeManageFor() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[50vh] py-10 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">

        <h1 className="text-black text-2xl md:text-4xl">We Manage For</h1>
        <p>Find out how much you can maximize your income with Key One Holiday Homes</p>

        <div className="flex flex-col items-center justify-center text-center gap-4 mt-4">
          <div className="flex items-center justify-center w-full gap-4">
            <div className="relative w-[380px] h-[197.5px] transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image alt="Placeholder Image" src="/images/home/image3.png" fill className="rounded-lg" />
            </div>
            <div className="relative w-[350px] h-[197.5px] transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image alt="Placeholder Image" src="/images/home/image4.png" fill className="rounded-lg" />
            </div>
          </div>

          <div className="flex items-center justify-center w-full gap-4">
            <div className="relative w-[350px] h-[197.5px] transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image alt="Placeholder Image" src="/images/home/image5.png" fill className="rounded-lg" />
            </div>
            <div className="relative w-[380px] h-[197.5px] transition-all transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image alt="Placeholder Image" src="/images/home/image6.png" fill className="rounded-lg" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
