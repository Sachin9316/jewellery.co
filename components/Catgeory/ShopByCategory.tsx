import React from 'react';
import Image from "next/image";
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";

function ShopByCategory() {
    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <CommonTitleHeader title={'shop by category'} description={'Discover Jewelry Designed for Every Mood and Moment'}/>

            <div className="w-full mt-4 flex justify-center gap-1">
                <div className="flex flex-col flex-1 gap-1">
                    <div className="relative w-full h-full flex items-end justify-center">
                        <Image
                            src="/images/earring.png"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />

                        <span className="absolute text-xl text-white font-sans tracking-widest pb-4">
                            EARRINGS
                        </span>
                    </div>

                    <div className="relative w-full h-full flex items-end justify-center">
                        <Image
                            src="/images/rings.jpg"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />

                        <span className="absolute text-xl text-white font-sans tracking-widest pb-4">
                            RINGS
                        </span>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex-1">
                    <div className="relative w-full h-full flex items-end justify-center">
                        <Image
                            src="/images/earring-1.svg"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />

                        <span className="absolute text-xl text-white font-sans tracking-widest pb-4">
                            EARRINGS
                        </span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col flex-1 gap-1">
                    <div className="relative w-full h-[300px] flex items-end justify-center">
                        <Image
                            src="/images/bracelet.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                        <span className="absolute text-xl text-white font-sans tracking-widest pb-4">
                            BRACELET
                        </span>
                    </div>
                    <div className="relative w-full h-[300px] flex items-end justify-center">
                        <Image
                            src="/images/wedding.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                        <span className="absolute text-xl text-white font-sans tracking-widest pb-4">
                            WEDDING
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;
