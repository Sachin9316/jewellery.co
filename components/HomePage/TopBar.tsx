"use client";

import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";

const socialIcons = [
    {id: 1, icon: "/icons/insta-icon.svg", link: "/"},
    {id: 2, icon: "/icons/fb-icon.svg", link: "/"},
    {id: 3, icon: "/icons/twitter-icon.svg", link: "/"},
    {id: 4, icon: "/icons/yt-icon.svg", link: "/"},
];

const offers = [
    "SIGNUP AND GET 10% OFF",
    "BUY 2 GET 5% EXTRA OFF",
    "FREE SHIPPING OVER ₹999",
    "LIMITED OFFER – FLAT 15% OFF TODAY"
];

function TopBar() {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % offers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="top-bar flex justify-between items-center px-4 py-2 bg-destructive">

            {/* ✅ Social Media Icons (Mapped) */}
            <div className="flex gap-1.5 items-center justify-center">
                {socialIcons.map(({id, icon, link}) => (
                    <Link key={id} href={link}>
                        <div className="relative w-[16px] h-[16px]">
                            <Image
                                src={icon}
                                alt={`icon-${id}`}
                                fill
                                priority
                                className="absolute object-contain"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* ✅ Middle offer text with auto switch + arrows hide if index = 0 */}
            <div className="flex items-center justify-between text-white gap-20">

                {/* Left Arrow (hide if index = 0) */}
                {index !== 0 && (
                    <div className="relative w-[16px] h-[16px] cursor-pointer" onClick={() => setIndex(index - 1)}>
                        <Image src="/icons/left-arrow.svg" alt="left" fill className="absolute object-contain"/>
                    </div>
                )}

                {/* Offer text */}
                <span className="transition-all duration-300">{offers[index]}</span>

                {/* Right Arrow */}
                {index !== 0 && (
                    <div className="relative w-[16px] h-[16px] cursor-pointer" onClick={() => setIndex(index + 1)}>
                        <Image src="/icons/right-arrow.svg" alt="right" fill className="absolute object-contain"/>
                    </div>
                )}
            </div>

            <div className="flex items-center text-white gap-0.5">
                <div className="relative w-[16px] h-[16px]">
                    <Image src="/icons/globe-icon.svg" alt="globe" fill className="absolute object-contain"/>
                </div>
                <span>IND</span>
            </div>
        </div>
    );
}

export default TopBar;
