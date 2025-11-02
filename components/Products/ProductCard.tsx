import React from 'react';
import Image from "next/image";
import {ProductProps} from "@/components/Products/ProductSection";


function ProductCard({label, price, icon}: ProductProps) {
    return (
        <div className="h-100 w-76 cursor-pointer">
            <div className="relative w-full h-full">

                <div
                    className="absolute top-3 right-4 pt-0.5 w-[30px] h-[30px] bg-muted rounded-full flex items-center justify-center z-10">
                    <Image
                        src="/icons/heart-icon-gray.svg"
                        alt="heart"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </div>


                <Image
                    src={icon}
                    alt={label}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute bottom-5 left-5 text-white font-sans">
                    <div className="text-lg tracking-widest text-destructive">$ {price}</div>
                    <div className="text-xl font-light tracking-widest text-muted-foreground">{label}</div>
                </div>

            </div>
        </div>


    );
}

export default ProductCard;