import React from 'react';
import Image from "next/image";

function ProcessCard({image, label}: {image: string; label: string} ) {
    return (
        <div className={"p-2 flex justify-center items-center flex-col w-40"}>
            <div className={'flex justify-center items-center h-30'}>
                <div className="relative w-20 h-20 flex items-end justify-center">
                    <Image
                        src={image}
                        alt=""
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            <div className={'h-2 text-center leading-3'}>
                <span className={'uppercase text-muted-foreground text-xs text-center'}>{label}</span>
            </div>
        </div>
    );
}

export default ProcessCard;