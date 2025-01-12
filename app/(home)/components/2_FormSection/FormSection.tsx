"use client";
import Form from '@/components/custom/ReusedSections/Form/Form';

export default function Hero() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center overflow-hidden mt-[-200px] ">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px] bg-white rounded-lg p-8 mt-8">
        <h2 className="text-xl mb-6 text-black text-left w-full">
          <span className='font-semibold'>Earn more</span> by converting your property into a holiday home. Request Evaluation now:
        </h2>
        <Form />
      </div>
    </div>
  );
}
