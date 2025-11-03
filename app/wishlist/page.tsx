"use client";

import React, {useEffect, useState} from "react";
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";
import ProductCard from "@/components/Products/ProductCard";
import {useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
import {useSearchParams} from "next/navigation";
import {getConversionRate} from "@/utils/currency";

function Page() {
    const {products} = useAppSelector((state: RootState) => state.product);

    const searchParams = useSearchParams();
    const [currency, setCurrency] = useState<string>("INR");
    const [conversionRate, setConversionRate] = useState<number>(1);

    useEffect(() => {
        const queryCurrency = searchParams.get("currency");
        const storedCurrency =
            typeof window !== "undefined" ? localStorage.getItem("currency") : null;

        const finalCurrency = queryCurrency || storedCurrency || "INR";

        setCurrency(finalCurrency);

        if (finalCurrency !== "INR") {
            getConversionRate("INR", finalCurrency)
                .then((rate) => setConversionRate(rate))
                .catch(() => setConversionRate(1));
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex bg-chart-1 w-full p-4 justify-center">
                <CommonTitleHeader
                    title="Your Wishlist"
                    description="Save the pieces you love—come back to shop them anytime!"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 m-8 mx-auto p-4">
                {products?.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                        currency={currency}
                        convertedPrice={product.price * conversionRate}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
