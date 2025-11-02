'use client'

import React from 'react';
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";
import ProductCard from "@/components/Products/ProductCard";
import {useAppSelector} from '@/utils/redux/hooks';
import {RootState} from "@/utils/redux/store";

function Page() {
    const {products} = useAppSelector((state: RootState) => state.product);

    return (
        <div className="flex flex-col w-full">
            <div className="flex bg-chart-1 w-full p-4 justify-center">
                <CommonTitleHeader
                    title="Your Wishlist"
                    description="Save the pieces you love—come back to shop them anytime!"
                />
            </div>

            <div className={`grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 m-8 mx-auto p-4`}>
                {
                    products?.map((product, index) => (
                        <ProductCard key={index} {...product}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Page;