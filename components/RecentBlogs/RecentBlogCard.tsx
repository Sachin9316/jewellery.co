import React from 'react';
import Image from "next/image";

function RecentBlogCard({label, image, date}: { label: string, image: string, date: string }) {
    return (
        <div className="bg-primary w-[400px] h-[500px]">
            <div className="relative w-[400px] h-[500px] flex items-end justify-center">
                <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="flex items-center justify-center flex-col gap-2 mt-3">
                <span className={'text-sm text-muted-foreground'}>{date}</span>
                <span className={'text-2xl uppercase text-muted-foreground'}>{label}</span>
            </div>
        </div>
    );
}

export default RecentBlogCard;