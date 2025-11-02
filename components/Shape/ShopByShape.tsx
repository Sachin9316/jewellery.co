"use client";
import React, {useRef} from "react";
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface ShapeItem {
    label: string;
    icon: string;
}

const shapes: ShapeItem[] = [
    {label: "Round", icon: "/images/round.png"},
    {label: "Heart", icon: "/images/heart.png"},
    {label: "Radiant", icon: "/images/radiant.png"},
    {label: "Princess", icon: "/images/princess-diamond.png"},
    {label: "Pear", icon: "/images/pear.png"},
    {label: "Oval", icon: "/images/ov-diamond.png"},
    {label: "Magnum", icon: "/images/marque-diamond.png"},
]


function ShopByShape() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({left: -200, behavior: "smooth"});
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({left: 200, behavior: "smooth"});
    };

    let isDown = false;
    let startX: number;
    let scrollLeftStart: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        startX = e.pageX - scrollRef.current!.offsetLeft;
        scrollLeftStart = scrollRef.current!.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
    };

    const handleMouseUp = () => {
        isDown = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current!.offsetLeft;
        const walk = x - startX;
        scrollRef.current!.scrollLeft = scrollLeftStart - walk;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full mt-5">
            <CommonTitleHeader
                title={"shop by shape"}
                description={"Every Diamond Tells a Story So Find Yours"}
            />

            <div className="relative w-full mt-4 flex items-center gap-4 px-10">
                <div className={'relative w-[16px] h-[16px] cursor-pointer'} onClick={scrollLeft}>
                    <Image
                        src={'/icons/left-arrow-gray.svg'}
                        alt={''}
                        fill
                        priority
                        className={'absolute object-contain'}
                    />
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 w-full justify-around"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {shapes.map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                            <div className="relative w-[120px] h-[120px] flex items-end justify-center">
                                <Image
                                    src={item?.icon}
                                    alt={item?.label}
                                    fill
                                    priority
                                    fetchPriority={'high'}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-muted-foreground text-md uppercase pb-2">{item?.label}</span>
                        </div>
                    ))}
                </div>

                <div className={'relative w-[16px] h-[16px] cursor-pointer'} onClick={scrollRight}>
                    <Image
                        src={'/icons/right-arrow-gray.svg'}
                        alt={''}
                        fill
                        priority
                        className={'absolute object-contain'}
                    />
                </div>
            </div>

            <section className="relative w-full h-[90vh] mt-12">
                <Image
                    src="/images/hero-image-2.jpg"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute bottom-8 p-2 space-y-8 left-20 md:w-2/4">
                    <div className="space-y-5 text-white">
                        <div className="text-[48px] font-sans font-light tracking-widest">
                            MAKE YOUR OWN
                        </div>
                        <div className="text-[24px] uppercase leading-7">
                            Design a piece that’s truly yours , personalized, engraved, and crafted to reflect your
                            unique style.
                        </div>
                    </div>

                    <div className="w-full gap-2 flex justify-between pr-5">
                        <Button
                            className="bg-transparent border-white text-white border-1 rounded-xs px-12 font-normal py-4.75 hover:bg-destructive cursor-pointer tracking-widest">
                            CUSTOMIZE
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ShopByShape;
