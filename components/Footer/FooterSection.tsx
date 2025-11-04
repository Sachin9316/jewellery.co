"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ChevronDown, ChevronUp} from "lucide-react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import FooterColumn from "./FooterColumn";

const companyLinks = ["About us", "Why we are different", "Lab grown diamonds", "Why us", "Our purpose", "Story Glimpse"];
const supportLinks = ["Chat Now", "Free Resizing", "Track your Order", "Education", "Review", "FAQ"];
const serviceLinks = ["Free Shipping", "Return Policy", "Lifetime Warranty", "Order Status", "Cancellation", "Certifications", "Buyback"];

const socialIcons = [
    {src: "/icons/insta-logo-red.svg", alt: "Instagram"},
    {src: "/icons/fb-logo-red.svg", alt: "Facebook"},
    {src: "/icons/twitter-logo-red.svg", alt: "Twitter"},
    {src: "/icons/yt-logo-red.svg", alt: "YouTube"},
];

const paymentIcons = [
    {src: "/icons/rupay-logo.svg", alt: "Rupay", width: "w-12"},
    {src: "/icons/upi-logo.svg", alt: "UPI", width: "w-10"},
    {src: "/icons/visa-logo.svg", alt: "Visa", width: "w-12"},
    {src: "/icons/mastercard-logo.svg", alt: "Mastercard", width: "w-10"},
];


const informationLinks = [
    "Track your order",
    "Return policy",
    "Career",
    "Shipping",
    "Free resizing",
    "Certifications",
    "Blogs",
    "FAQ",
];

function FooterSection() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);

    return (
        <footer className="bg-white pb-10 pt-6 px-6 md:px-16 lg:px-12">
            {/* Logo and Social Icons */}
            <div className="flex flex-col md:flex-row md:justify-between gap-10">
                <div className="flex flex-col gap-2 sm:items-start items-center">
                    <div className="flex flex-col justify-center items-center pb-2">
                        <div className="relative w-32 h-8">
                            <Image src={isAuthenticated ? '/icons/logo-2.svg' : '/icons/logo-3.svg'} alt="logo" fill className="absolute object-contain"/>
                        </div>

                        <p className="text-[10px] text-muted-foreground ">Grown with love, worn with pride</p>
                    </div>

                    <div className="flex gap-4">
                        {socialIcons.map((icon, index) => (
                            <img key={index} src={icon.src} alt={icon.alt} className={`w-5 cursor-pointer ${isAuthenticated ? '' : 'grayscale-100'}`}/>
                        ))}
                    </div>
                </div>

                {/* Footer Accordion Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-2 md:gap-12 gap-1">
                    <FooterColumn title="COMPANY" links={companyLinks}/>
                    <FooterColumn title="INFORMATION" links={informationLinks}/>
                    <FooterColumn title="SERVICES" links={serviceLinks}/>
                    <FooterColumn title="CONTACT" links={supportLinks}/>
                </div>

            </div>

            {/* Divider */}
            <div className={`${!isAuthenticated ? 'border-destructive' : 'border-primary'} border-t my-6`}></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <div className="flex gap-5 flex-wrap justify-center md:justify-start">
                    {paymentIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} className={icon.width}/>
                    ))}
                </div>

                <p className="text-gray-500 text-center">© 2025 — Copyright All Right Reserved.</p>

                <a href="/privacy" className="text-gray-500 hover:text-black">Privacy Policy</a>
            </div>
        </footer>
    );
}



export default FooterSection;
