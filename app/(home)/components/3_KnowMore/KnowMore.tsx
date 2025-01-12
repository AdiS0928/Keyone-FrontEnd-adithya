"use client";
import MyButton from "@/components/custom/MyComponents/MyButton";
import Image from "next/image";

export default function KnowMore() {
  return (
    <div  id="about" className="relative flex flex-col w-full items-center justify-center min-h-[70vh] overflow-hidden bg-secondary-100">
      <div className="flex flex-col md:flex-row items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">

        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 relative">
            <Image
                alt="Placeholder Image"
                src="/images/home/image1.png"
                width={350}
                height={350}
                className="object-contain w-[250px] md:w-[350px] h-auto"
            />
            <Image
                alt="Placeholder Image"
                src="/images/home/image2.png"
                width={280}
                height={280}
                className="object-contain w-[200px] md:w-[280px] h-auto md:ml-[-100px] md:mt-[270px] mt-[-50px]"
            />
        </div>


        {/* Right Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 px-4 py-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl mb-4 text-black"> 
                Premier Property Management for the Chosen Ones
            </h1>
            <p className="text-lg md:text-xl">
                Experience exceptional property management tailored exclusively for discerning property owners. We elevate your investment with unparalleled professionalism and personalized attention, ensuring your property reaches its fullest potential. Trust us to provide the finest care that only the select few can appreciate.
            </p>
          
            <MyButton type="submit" className="w-full bg-black text-white py-3 rounded-lg mt-6 font-semibold">Know More</MyButton>
        </div>

      </div>
    </div>
  );
}
