"use client";

import {useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
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
import AuthComponent from "@/components/Authentication/AuthComponent";

export default function Home() {
    const {isAuthenticated, showLoggedIn} = useAppSelector((state: RootState) => state.auth);

    return (
        <div className={`flex flex-col ${isAuthenticated ? 'gap-10' : 'gap-1'}`}>
            <div className="flex flex-col min-h-screen">
                <TopBar/>
                {showLoggedIn ? <HeroSection/> : <AuthComponent/>}
            </div>

            <div>
                {
                    showLoggedIn && (
                        <>
                            <ShopByCategory/>

                            <ShopByShape/>

                            <ProductSection/>

                            <LabSection/>

                            <CustomerReview/>

                            <RecentBlogSection/>
                        </>
                    )
                }
            </div>

            <SubscribeSection/>

            <FooterSection/>

        </div>
    )
}
