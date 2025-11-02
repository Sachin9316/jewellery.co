import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";

function LabSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) videoRef.current.play();
    };

    const handleMouseLeave = () => {
        if (videoRef.current) videoRef.current.pause();
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full p-6 sm:p-10 lg:p-14 gap-6 lg:gap-0 mt-7 sm:mt-0">

            {/* Left Video Section */}
            <div
                className="left-card w-full lg:w-1/2 border overflow-hidden h-[250px] sm:h-[350px] lg:h-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src="/images/video_of_lab.mp4"
                    className="w-full h-full object-cover cursor-pointer"
                    preload="metadata"
                />
            </div>

            {/* Right Content Section */}
            <div className="right-card w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:p-10 gap-6 lg:gap-10">
                <div className="text-2xl sm:text-3xl lg:text-[40px] uppercase tracking-wider font-light text-center">
                    brilliance of lab grown diamonds
                </div>

                <p className="text-center text-sm sm:text-base text-muted-foreground px-2 sm:px-10 lg:px-20">
                    Design jewelry that tells your story. From gemstone choices to engravings, make it yours crafted
                    with care, just for you.
                </p>

                <div>
                    <Button className="px-10 sm:px-16 bg-transparent border-destructive text-destructive border rounded-sm font-normal py-3 hover:text-white hover:bg-destructive cursor-pointer tracking-widest">
                        CUSTOMIZE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(LabSection);
