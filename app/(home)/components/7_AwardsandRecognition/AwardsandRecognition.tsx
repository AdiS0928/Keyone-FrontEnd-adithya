"use client";
import Image from "next/image";

export default function AwardsandRecognition() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[60vh] py-10 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">

        <h1 className="text-black text-2xl md:text-4xl max-w-[550px] mb-4">Let The Professionals Manage Your Holiday Home</h1>
        <p className="max-w-[800px]">
          Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-center text-center gap-10 md:gap-20 mt-8">
            <Image 
                alt="Placeholder Image" 
                src="/images/home/awards/award1.png" 
                height={180} 
                width={180}
                className="w-[140px] md:w-[180px] h-auto"
            />
            <Image 
                alt="Placeholder Image" 
                src="/images/home/awards/award2.png" 
                height={100} 
                width={100}
                className="w-[80px] md:w-[100px] h-auto"
            />
            <Image 
                alt="Placeholder Image" 
                src="/images/home/awards/award3.png" 
                height={100} 
                width={100}
                className="w-[80px] md:w-[100px] h-auto"
            />
            <Image 
                alt="Placeholder Image" 
                src="/images/home/awards/award4.png" 
                height={100} 
                width={100}
                className="w-[80px] md:w-[100px] h-auto"
            />
        </div>

      </div>
    </div>
  );
}
