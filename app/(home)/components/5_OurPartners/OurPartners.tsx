"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MyButton from "@/components/custom/MyComponents/MyButton";

export default function OurPartners() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[70vh] py-10 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">

        <h1 className="text-black text-2xl md:text-4xl">Our Partners</h1>
        <p>Find out how much you can maximize your income with Key One Holiday Homes</p>

        <div className="flex flex-col items-center justify-center text-center mt-4">
          <Marquee speed={50} gradient={false} loop={0} pauseOnHover={true}>
            <div className="flex items-center justify-center gap-20 overflow-hidden">
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center ml-20">
                <Image alt="Placeholder Image" src="/images/home/partners/logo1.png" height={97.5} width={180} className="rounded-lg" />
              </div>
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center">
                <Image alt="Placeholder Image" src="/images/home/partners/logo2.png" height={97.5} width={180} className="rounded-lg" />
              </div>
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center">
                <Image alt="Placeholder Image" src="/images/home/partners/logo3.png" height={97.5} width={180} className="rounded-lg" />
              </div>
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center">
                <Image alt="Placeholder Image" src="/images/home/partners/logo4.png" height={97.5} width={180} className="rounded-lg" />
              </div>
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center">
                <Image alt="Placeholder Image" src="/images/home/partners/logo5.png" height={97.5} width={180} className="rounded-lg" />
              </div>
              <div className="relative h-[97.5px] transition-all transform duration-300 hover:scale-105 flex justify-center items-center">
                <Image alt="Placeholder Image" src="/images/home/partners/logo6.png" height={97.5} width={180} className="rounded-lg" />
              </div>
            </div>
          </Marquee>
        </div>


        
        <div className="flex items-center justify-center text-center gap-4 mt-4 bg-secondary-200 w-full px-10 py-20 rounded-xl">
            <div className="flex w-full justify-between items-start text-left text-white flex-col">
                <h1 className="text-4xl mb-2 max-w-[380px]">Ready to maximize Your Earnings?</h1>
                <p>Ready to maximize Your Earnings?</p>
            </div>
            <div className="flex w-full justify-end items-center">
                <MyButton type="submit" className="bg-[#F6CA6A] text-white py-3 px-10 rounded-lg font-semibold">Know More</MyButton>
            </div>
        </div>

      </div>
    </div>
  );
}
