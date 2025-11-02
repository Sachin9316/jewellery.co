"use client";

import React, {useState, useEffect, useRef} from "react";
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
    "LIMITED OFFER - TODAY",
];

function TopBar() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState("INR");

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % offers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries/currency");
                const result = await response.json();

                if (!result.error) {
                    const uniqueCurrencies = [
                        ...new Set(result.data.map((item: any) => item.currency).filter(Boolean)),
                    ];
                    setCurrencies(uniqueCurrencies.sort());
                }
            } catch (error) {
                console.error("Error loading currencies:", error);
            }
        };

        fetchCurrencies();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="top-bar flex justify-between items-center px-4 py-2 bg-destructive">
            {/* Social Icons */}
            <div className="flex gap-1.5 items-center justify-center">
                {socialIcons.map(({id, icon, link}) => (
                    <Link key={id} href={link}>
                        <div className="relative w-[16px] h-[16px]">
                            <Image src={icon} alt={`icon-${id}`} fill priority className="object-contain"/>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Offers Slider */}
            <div className="flex items-center justify-between text-white sm:gap-20 gap-3">
                {index === 0 && (
                    <div className="relative w-[16px] h-[16px] cursor-pointer hidden sm:flex"
                         onClick={() => setIndex(index - 1)}>
                        <Image src="/icons/left-arrow.svg" alt="left" fill className="object-contain"/>
                    </div>
                )}
                <span className="transition-all duration-300 md:text-md tracking-widest text-xs">{offers[index]}</span>
                {index === 0 && (
                    <div className="relative w-[16px] h-[16px] cursor-pointer hidden sm:flex"
                         onClick={() => setIndex(index + 1)}>
                        <Image src="/icons/right-arrow.svg" alt="right" fill className="object-contain"/>
                    </div>
                )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative flex items-center text-white gap-1" ref={dropdownRef}>
                <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="relative w-[16px] h-[16px]">
                        <Image src="/icons/globe-icon.svg" alt="globe" fill className="object-contain" priority/>
                    </div>
                    <span>{selectedCurrency}</span>
                </div>

                {isOpen && (
                    <div
                        className="absolute right-0 top-7 bg-white text-black rounded shadow-md w-32 max-h-48 overflow-y-auto z-50">
                        {currencies.length > 0 ? (
                            currencies.map((currency) => (
                                <div
                                    key={currency}
                                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedCurrency(currency);
                                        setIsOpen(false);
                                    }}
                                >
                                    {currency}
                                </div>
                            ))
                        ) : (
                            <div className="px-3 py-2 text-sm">Loading...</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopBar;
