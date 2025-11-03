"use client";

import React, {useEffect, useState} from "react";
import CommonTitleHeader from "@/components/Common/CommonTitleHeader";
import ProductCard from "@/components/Products/ProductCard";
import {useAppDispatch, useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
import {useSearchParams, useRouter} from "next/navigation";
import {getConversionRate} from "@/utils/currency";
import {ShoppingCart} from "lucide-react";
import CheckOutSplashScreen from "@/components/Common/CheckOutSplashScreen";
import { clearCart } from "@/utils/redux/Slices/productSlice";

function Page() {
    const {cart} = useAppSelector((state: RootState) => state.product);
    const searchParams = useSearchParams();
    const [currency, setCurrency] = useState<string>("INR");
    const [conversionRate, setConversionRate] = useState<number>(1);
    const [showSplash, setShowSplash] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleCheckout = () => {
        localStorage.removeItem("cart");
        dispatch(clearCart());
        setShowSplash(true);
    };

    useEffect(() => {
        const queryCurrency = searchParams.get("currency");
        const storedCurrency =
            typeof window !== "undefined" ? localStorage.getItem("currency") : null;

        const finalCurrency = queryCurrency || storedCurrency || "INR";
        setCurrency(finalCurrency);

        if (finalCurrency === "INR") {
            setConversionRate(1);
        } else {
            getConversionRate("INR", finalCurrency)
                .then((rate) => setConversionRate(rate))
                .catch(() => setConversionRate(1));
        }
    }, [searchParams]);

    if (showSplash) {
        return <CheckOutSplashScreen setShowSplash={setShowSplash}/>;
    }

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="flex bg-chart-1 w-full p-4 justify-center">
                <CommonTitleHeader
                    title="Your Cart"
                    description="Your favorite pieces are waiting—checkout when you're ready to make them yours."
                />
            </div>

            {cart && cart.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 m-8 mx-auto p-4">
                    {cart.map((product, index) => (
                        <ProductCard
                            key={index}
                            {...product}
                            currency={currency}
                            convertedPrice={product.price * conversionRate}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-[50vh] text-gray-500 text-lg">
                    No products available
                </div>
            )}

            {cart && cart.length > 0 && (
                <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-center">
                    <button
                        onClick={handleCheckout}
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
                    >
                        <ShoppingCart size={20}/>
                        Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default Page;
