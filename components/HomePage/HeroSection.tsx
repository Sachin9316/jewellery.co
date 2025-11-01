import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const nav: string[] = ['NEW ARRIVAL', 'CUSTOM JEWELLERY', 'TRY AT HOME', 'EDUCATION HUB', 'about US'];

const icons = [
    { id: 1, icon: "/icons/search-icon.svg" },
    { id: 2, icon: "/icons/heart-icon.svg" },
    { id: 3, icon: "/icons/user-icon.svg" },
    { id: 4, icon: "/icons/bag-icon.svg" },
];

function HeroSection() {
    return (
        <section className="relative w-full flex-1">
            <Image
                src="/images/hero-image.jpg"
                alt="Hero"
                fill
                priority
                className="object-cover"
            />

            <div className="flex items-center justify-center absolute z-10 w-full p-2 flex-col">
                <div className="flex items-center justify-between w-2/3">
                    <div className="flex items-center gap-2 text-white">
                        <div className="relative w-[24px] h-[24px]">
                            <Image src="/icons/contact-icon.svg" alt="contact" fill priority className="absolute object-contain" />
                        </div>
                        <span className="text-[12px] font-sans">CONTACT</span>
                    </div>

                    <div className="relative w-32 h-10">
                        <Image src="/icons/logo.svg" alt="logo" fill priority className="absolute object-contain" />
                    </div>

                    <div className="flex gap-2">
                        {icons.map(({ id, icon }) => (
                            <div key={id} className="relative w-[24px] h-[24px]">
                                <Image
                                    src={icon}
                                    alt={`icon-${id}`}
                                    fill
                                    priority
                                    className="absolute object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between w-2/3 p-6">
                    {nav.map((item, index) => (
                        <Link href={item} key={index}>
                            <span className="text-white text-[12px] font-sans">{item}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-3 p-2 space-y-10 left-20 md:w-2/7">
                <div className="space-y-6">
                    <div className="text-[48px] font-sans font-light tracking-widest">GIFT THE GLOW</div>
                    <div className="text-[24px] uppercase leading-7">
                        fresh designs that sparkle as bright as you do.
                    </div>
                </div>

                <div className="w-full gap-2 flex justify-between pr-5">
                    <Button className="bg-destructive rounded-xs flex-1 font-normal py-5 cursor-pointer">SHOP NOW</Button>
                    <Button className="bg-transparent border-destructive text-destructive border-1 rounded-xs flex-1 font-normal py-4.75 hover:text-white hover:bg-destructive cursor-pointer tracking-widest">CUSTOMIZE</Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
