"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";

const videos = [
    "/videos/video-1.mp4",
    "/videos/video-2.mp4",
    "/videos/video-3.mp4",
    "/images/video_of_lab.mp4",
];

function CustomerReview() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % videos.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

    const getPositionStyle = (i: number) => {
        // Mobile: Only show active video
        if (typeof window !== "undefined" && window.innerWidth < 640) {
            return i === index ? "translate-x-0 scale-100 z-20 opacity-100" : "opacity-0 scale-75 pointer-events-none";
        }

        // Desktop view
        if (i === index % videos.length) return "translate-x-0 scale-110 z-20";
        if (i === (index - 1 + videos.length) % videos.length) return "-translate-x-[300px] scale-90 z-10";
        if (i === (index + 1) % videos.length) return "translate-x-[300px] scale-90 z-10";
        return "opacity-0 pointer-events-none scale-75";
    };

    return (
        <div className="flex flex-col items-center justify-center w-full px-4">
            <CommonTitleHeader title="WHAT OUR CUSTOMERS SAY" description="" />

            <div className="relative mt-8 w-full sm:w-3/4 flex items-center justify-center overflow-hidden">
                {/* Left Arrow */}
                <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center cursor-pointer z-30">
                    <Image src="/icons/left-arrow-gray.svg" alt="left" width={20} height={20} />
                </button>

                {/* Video Slider */}
                <div className="relative flex justify-center items-center w-full h-[400px] sm:h-[580px]">
                    {videos.map((video, i) => (
                        <video
                            key={i}
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`
                absolute transition-all duration-500 ease-in-out shadow-lg 
                w-[200px] h-[350px] sm:w-[250px] sm:h-[580px] object-cover 
                ${getPositionStyle(i)}
              `}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center cursor-pointer z-30">
                    <Image src="/icons/right-arrow-gray.svg" alt="right" width={20} height={20} />
                </button>
            </div>
        </div>
    );
}

export default CustomerReview;
