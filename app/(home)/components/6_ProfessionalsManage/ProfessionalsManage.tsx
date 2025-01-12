"use client";
import { serviceData } from "./data";

export default function ProfessionalsManage() {
  return (
    <div  className="relative flex flex-col w-full items-center justify-center min-h-[60vh] py-10 overflow-hidden bg-secondary-100">
      <div className="flex flex-col items-center justify-center text-center h-full w-[95vw] max-w-[1400px]">

        <h1 className="text-black text-2xl md:text-4xl max-w-[550px] mb-4">Let The Professionals Manage Your Holiday Home</h1>
        <p className="max-w-[800px]">
          Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center text-center gap-8 mt-8">
          {serviceData.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-start gap-2 w-full md:w-[30%]">
              <div className="text-4xl text-primary-500">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="max-w-[300px] text-xs">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
