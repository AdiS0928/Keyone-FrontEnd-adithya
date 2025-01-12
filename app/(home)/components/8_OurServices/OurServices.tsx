'use client';

import { serviceData } from './data';
import { cn } from '@/lib/utils';

export default function OurServices() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[80vh] py-20 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">
        <h1 className="text-black text-2xl md:text-4xl max-w-[550px] mb-4">Let The Professionals Manage Your Holiday Home</h1>
        <p className="max-w-[800px]">
          Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={cn(
                'w-full bg-white border border-green-500 shadow-lg p-6 rounded-lg transform transition-all duration-300 hover:scale-105',
                'h-[350px]'
              )}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-4"><service.icon size={50} /></div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
