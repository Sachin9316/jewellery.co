"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ChevronDown, ChevronUp} from "lucide-react";

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
    return (
        <footer className="bg-white border-t border-red-200 py-10 px-6 md:px-16 lg:px-20 mt-14">
            {/* Logo and Social Icons */}
            <div className="flex flex-col md:flex-row md:justify-between gap-10">
                <div className="flex flex-col gap-4">
                    <div className="relative w-28 h-10">
                        <Image src={'/icons/logo-2.svg'} alt="logo" fill className="absolute object-contain"/>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Grown with love, worn with pride</p>

                    <div className="flex gap-4">
                        {socialIcons.map((icon, index) => (
                            <img key={index} src={icon.src} alt={icon.alt} className="w-5 cursor-pointer"/>
                        ))}
                    </div>
                </div>

                {/* Footer Accordion Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-2 md:gap-12">
                    <FooterColumn title="COMPANY" links={companyLinks}/>
                    <FooterColumn title="INFORMATION" links={informationLinks}/>
                    <FooterColumn title="SERVICES" links={serviceLinks}/>
                    <FooterColumn title="CONTACT" links={supportLinks}/>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-destructive my-6"></div>

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

const FooterColumn = ({title, links}: { title: string; links: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Header with accordion behavior only on mobile */}
            <div
                className="flex justify-between items-center md:cursor-default cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-red-500 font-normal tracking-widest mb-3">{title}</h3>
                <span className="md:hidden">
          {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
        </span>
            </div>

            {/* Accordion Content */}
            <ul
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0 md:max-h-full"
                } flex flex-col gap-3 text-sm md:max-h-full`}
            >
                {links.map((link, index) => (
                    <li key={index} className="cursor-pointer hover:underline tracking-widest text-muted-foreground">
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;
