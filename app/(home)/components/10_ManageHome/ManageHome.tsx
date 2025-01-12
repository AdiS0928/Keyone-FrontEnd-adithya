"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function ManageHome() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("manageHomeVideo") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[70vh] py-20 overflow-hidden bg-secondary-100">
      <div className="flex flex-col md:flex-row items-center justify-center text-center h-full w-[95vw] max-w-[1400px] gap-20">

        {/* Left Section */}
        <div className="relative flex items-end justify-end w-full md:w-2/3 bg-secondary-200 rounded-xl p-10 pr-0">
            <video id="manageHomeVideo" src="/images/home/ManageHome.mp4" className="object-cover w-full h-full mr-[-40px]" muted loop playsInline />
            <div className="absolute w-full h-full overflow-visible">
                <button onClick={handlePlay} className="absolute flex items-center justify-center bg-secondary-200 text-yellow-200 text-2xl rounded-full w-24 h-24 shadow-md hover:bg-yellow-200 hover:text-secondary-200 transition duration-200 right-[-70px] top-1/2 transform -translate-y-1/2 z-10" aria-label={isPlaying ? "Pause Video" : "Play Video"} >
                <FaPlay size={40} />
                </button>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-4 py-8 text-center md:text-left">
            <h1 className="text-4xl mb-4 text-black w-[400px]">Looking for a better way to manage your holiday home?</h1>
            <p className="w-[400px]">We take out all the day-to-day issues of managing a holiday home rental and bring in happy faces and wide smiles.</p>
        </div>

      </div>
    </div>
  );
}
