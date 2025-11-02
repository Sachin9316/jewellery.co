import React from 'react';
import Image from "next/image";

function RecentBlogCard({label, image, date}: { label: string; image: string; date: string }) {
    return (
        <div className="w-full max-w-full p-2">
            <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
                <Image
                    src={image}
                    alt={label}
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-center gap-1 mt-3">
                <span className="text-xs sm:text-sm text-muted-foreground">{date}</span>
                <span className="text-lg sm:text-2xl uppercase text-muted-foreground text-center">{label}</span>
            </div>
        </div>
    );
}


export default RecentBlogCard;