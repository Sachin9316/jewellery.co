"use client";
import React, {useState, useEffect} from "react";
import ProductCard from "@/components/Products/ProductCard";
import {Button} from "@/components/ui/button";
import {getConversionRate} from "@/utils/currency";
import {useSearchParams} from "next/navigation";

export interface ProductProps {
    id: number;
    label: string;
    price: number;
    icon: string;
}

const products: ProductProps[] = [
    {id: 1, label: "Classic Pearl Necklace", price: 725, icon: "/images/pr-1.jpg"},
    {id: 2, label: "Rose Gold Pearl Pendant", price: 425, icon: "/images/pr-2.jpg"},
    {id: 3, label: "Diamond Drop Pearl Chain", price: 800, icon: "/images/pr-3.jpg"},
    {id: 4, label: "Luxury Bridal Pearl Set", price: 9466, icon: "/images/pr-4.jpg"},
    {id: 5, label: "Vintage Pearl Choker", price: 8888, icon: "/images/pr-5.jpg"},
    {id: 6, label: "Modern Pearl Charm Necklace", price: 7596, icon: "/images/pr-6.jpg"},
];

const arr = ["New Arrival", "Best seller", "Trending"];

function ProductSection() {
    const [selected, setSelected] = useState(0);
    const [conversionRate, setConversionRate] = useState(1);
    const [currency, setCurrency] = useState<string>("INR");
    const searchParams = useSearchParams();

    useEffect(() => {
        const queryCurrency: string = searchParams.get("currency") || "";
        const storedCurrency: string | null =
            typeof window !== "undefined" ? localStorage.getItem("currency") : null;

        const finalCurrency: string = queryCurrency || storedCurrency || "INR";

        setCurrency(finalCurrency);

        if (finalCurrency !== "INR") {
            getConversionRate("INR", finalCurrency)
                .then((rate) => setConversionRate(rate))
                .catch(() => setConversionRate(1));
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col items-center justify-center z-50 mt-10">
            <div className="flex flex-wrap gap-10 justify-center">
                {arr.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(index)}
                        className="flex flex-col items-center justify-center cursor-pointer"
                    >
            <span
                className={`uppercase tracking-widest ${
                    selected === index ? "text-destructive" : "text-muted-foreground"
                }`}
            >
              {item}
            </span>
                        <span
                            className={`w-full h-[1px] ${
                                selected === index ? "bg-destructive" : "bg-transparent"
                            }`}
                        ></span>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 m-10 mx-auto">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        convertedPrice={product.price * conversionRate}
                        currency={currency}
                    />
                ))}
            </div>

            <div>
                <Button
                    className="px-12 bg-transparent border-destructive text-destructive border-1 rounded-sm py-4.75 hover:text-white hover:bg-destructive tracking-widest">
                    CUSTOMIZE
                </Button>
            </div>
        </div>
    );
}

export default ProductSection;
