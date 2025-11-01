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
        <div className="w-full flex flex-col items-center">
            <CommonTitleHeader title="recent blogs" description=""/>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-6 mt-4 w-full justify-center">
                {blogs.map((blog) => (
                    <RecentBlogCard key={blog.id} {...blog} />
                ))}
            </div>

            {/* Process Icons */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {process.map((item) => (
                    <ProcessCard key={item.id} {...item} />
                ))}
            </div>
        </div>

    );
}

export default RecentBlogSection;