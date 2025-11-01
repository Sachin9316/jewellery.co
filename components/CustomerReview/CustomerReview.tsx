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

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const getPositionStyle = (i: number) => {
        if (i === index % videos.length) {
            return "translate-x-0 scale-110 z-20";
        }
        if (i === (index - 1 + videos.length) % videos.length) {
            return "-translate-x-[300px] scale-90 z-10";
        }
        if (i === (index + 1) % videos.length) {
            return "translate-x-[300px] scale-90 z-10";
        }
        return "opacity-0 pointer-events-none scale-75";
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <CommonTitleHeader title="WHAT OUR CUSTOMERS SAY" description="" />

            <div className="relative mt-8 w-3/4 flex items-center justify-center overflow-hidden px-20">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center cursor-pointer"
                >
                    <Image src="/icons/left-arrow-gray.svg" alt="left" width={20} height={20} />
                </button>

                <div className="relative flex justify-center items-center w-full h-[580px] gap-20">
                    {videos?.map((video, i) => (
                        <video
                            key={i}
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`absolute transition-all duration-500 ease-in-out shadow-lg w-[250px] h-[580px] object-cover ${getPositionStyle(i)}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center cursor-pointer"
                >
                    <Image src="/icons/right-arrow-gray.svg" alt="right" width={20} height={20} />
                </button>
            </div>
        </div>
    );
}

export default CustomerReview;
