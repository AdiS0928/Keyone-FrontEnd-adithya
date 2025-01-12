'use client';

import FormSection from './Form';

export default function LessStress() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[80vh] py-20 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">
        <h1 className="text-black text-2xl md:text-4xl max-w-[550px] mb-4">Less Stress, More Time, More Money</h1>
        <p className="max-w-[800px]">
            Experience less stress and more freedom with our property management services. Let us handle late-night emergencies, paperwork, and tedious tasks, allowing you to focus on quality time with loved ones. Efficiently managing your portfolio, minimizing delays, and negotiating favorable rates, we enhance your property&apos;s profitability, ensuring more money in your pocket.
        </p>

        <div className="flex justify-center items-center w-[100vw] min-h-[80vh] bg-[url('/images/home/bg-image2.png')] bg-cover bg-center bg-fixed relative mt-8">
            <div className="absolute inset-0 bg-[#577D54] opacity-70 z-1"></div>
            <FormSection />
        </div>
      </div>
    </div>
  );
}
