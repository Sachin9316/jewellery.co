"use client";
import React, {useState} from "react";
import ProductCard from "@/components/Products/ProductCard";
import {Button} from "@/components/ui/button";

export interface ProductProps {
    id: number;
    label: string;
    price: number;
    icon: string;
}

const products: ProductProps[] = [
    {id: 1, label: "Pearls by the Yard", price: 725, icon: "/images/pr-1.jpg"},
    {id: 2, label: "Pearls by the Yard", price: 725, icon: "/images/pr-2.jpg"},
    {id: 3, label: "Pearls by the Yard", price: 725, icon: "/images/pr-3.jpg"},
    {id: 4, label: "Pearls by the Yard", price: 725, icon: "/images/pr-4.jpg"},
    {id: 5, label: "Pearls by the Yard", price: 725, icon: "/images/pr-5.jpg"},
    {id: 6, label: "Pearls by the Yard", price: 725, icon: "/images/pr-6.jpg"},
];

const arr = ["New Arrival", "Best seller", "Trending"];

function ProductSection() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center z-50">
            <div className="flex gap-10">
                {arr.map((item, index) => {
                    const isActive = selected === index;
                    return (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                              <span
                                  className={`uppercase tracking-widest ${
                                      isActive ? "text-destructive" : "text-muted-foreground"
                                  }`}
                              >
                                {item}
                              </span>
                            <span
                                className={`w-full h-[1px] ${
                                    isActive ? "bg-destructive" : "bg-transparent"
                                }`}
                            ></span>
                        </div>
                    );
                })}
            </div>

            <div className={`grid grid-cols-3 gap-5 m-10`}>
                {
                    products?.map((product, index) => (
                        <ProductCard key={index} {...product}/>
                    ))
                }
            </div>

            <div>
                <Button
                    className={'px-12 bg-transparent border-destructive text-destructive border-1 rounded-sm flex-1 font-normal py-4.75 hover:text-white hover:bg-destructive cursor-pointer tracking-widest'}>CUSTOMIZE</Button>
            </div>
        </div>
    );
}

export default ProductSection;
