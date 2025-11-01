"use client";

import {useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import TopBar from "@/components/HomePage/TopBar";
import ShopByCategory from "@/components/Catgeory/ShopByCategory";
import ShopByShape from "@/components/Shape/ShopByShape";
import ProductSection from "@/components/Products/ProductSection";
import LabSection from "@/components/LabSection/LabSection";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import RecentBlogSection from "@/components/RecentBlogs/RecentBlogSection";
import SubscribeSection from "@/components/Subscribe/SubscribeSection";
import FooterSection from "@/components/Footer/FooterSection";

export default function Home() {
    const router = useRouter();
    const {isAuthenticated} = useAppSelector((state: RootState) => state.auth);
    const [checkingAuth, setCheckingAuth] = useState(true);

    console.log({
        isAuthenticated
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setCheckingAuth(false);

            if (!isAuthenticated) {
                router.push("/login");
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [isAuthenticated, router]);

    if (checkingAuth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="animate-pulse text-lg">Checking auth...</span>
            </div>
        );
    }

    return (
        <div className={'flex flex-col gap-10'}>
            <div className="flex flex-col h-screen">
                <TopBar/>
                <HeroSection/>
            </div>

            <ShopByCategory/>

            <ShopByShape/>

            <ProductSection/>

            <LabSection/>

            <CustomerReview/>

            <RecentBlogSection/>

            <SubscribeSection/>

            <FooterSection/>

        </div>
    )
}
