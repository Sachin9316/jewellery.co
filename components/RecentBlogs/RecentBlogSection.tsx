import React from 'react';
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";
import Image from "next/image";
import RecentBlogCard from "@/components/RecentBlogs/RecentBlogCard";
import ProcessCard from "@/components/RecentBlogs/ProcessCard";

const blogs = [
    {
        id: 1,
        image: "/images/blog-1.jpg",
        label: 'Know our story',
        date: '07 Jun, 2025',
    },
    {
        id: 2,
        image: "/images/blog-2.jpg",
        label: 'behind the designs',
        date: '12 June, 2025',
    },
]

const process = [
    {
        id: 1,
        image: "/icons/certificate.svg",
        label: 'IGI/GIA certified',
    },
    {
        id: 2,
        image: "/icons/car.svg",
        label: 'free & fast worldwide shippinG',
    },
    {
        id: 3,
        image: "/icons/hand.svg",
        label: "ethically sourced materials",
    },
    {
        id: 4,
        image: "/icons/shield.png",
        label: "lifetime warranty and support",
    },
]

function RecentBlogSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <CommonTitleHeader title="recent blogs" description=""/>

            <div className="flex items-center justify-center w-full gap-10 mt-4">
                {
                    blogs.map((blog, index) => (
                        <RecentBlogCard key={index} {...blog} />
                    ))
                }
            </div>

            <div className={'mt-24 flex gap-5'}>
                {
                    process.map((item, index) => (
                        <ProcessCard key={index} {...item} />
                    ))
                }
            </div>
        </div>
    );
}

export default RecentBlogSection;