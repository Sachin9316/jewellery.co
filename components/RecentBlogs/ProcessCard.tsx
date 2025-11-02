import React from 'react';
import Image from "next/image";

function ProcessCard({image, label}: { image: string; label: string }) {
    return (
        <div className="flex flex-col items-center text-center w-full">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                <Image
                    src={image}
                    alt={label}
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <span className="uppercase text-[10px] sm:text-xs text-muted-foreground mt-2 leading-tight">
                {label}
            </span>
        </div>
    );
}

export default ProcessCard;