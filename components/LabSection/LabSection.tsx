import React, {useRef} from 'react';
import {Button} from "@/components/ui/button";

function LabSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div className="flex items-center justify-center w-full p-14">
            <div
                className="left-card w-1/2 border overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src="/images/video_of_lab.mp4"
                    className="w-full h-full object-cover cursor-pointer"
                    // muted
                    // controls={true}
                    preload="metadata"
                />
            </div>

            <div className="right-card w-1/2 flex flex-col justify-center items-center p-10 gap-10">
                <div className="text-[40px] uppercase tracking-wider font-light text-center">
                    brilliance of lab grown diamonds
                </div>

                <p className="text-center px-20 text-muted-foreground">
                    Design jewelry that tells your story. From gemstone choices to engravings, make it yours crafted
                    with care, just for you.
                </p>

                <div>
                    <Button
                        className="px-16 bg-transparent border-destructive text-destructive border-1 rounded-sm flex-1 font-normal py-4.75 hover:text-white hover:bg-destructive cursor-pointer tracking-widest"
                    >
                        CUSTOMIZE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LabSection;
