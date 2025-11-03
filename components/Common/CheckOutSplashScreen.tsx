import React, {useEffect, useState} from "react";
import {Check} from "lucide-react";
import {useRouter} from "next/navigation";

function CheckOutSplashScreen({setShowSplash}: any) {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    setShowSplash(false);
                    router.push("/");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
            <div className="relative">
                <div
                    className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center animate-[bounce_1.5s_infinite] shadow-lg">
                    <Check size={48} className="text-white" strokeWidth={3}/>
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-ping"></div>
            </div>

            <h1 className="text-2xl font-semibold mt-6 text-gray-800">
                Order Successful!
            </h1>
            <p className="text-gray-500 mt-2">
                Redirecting to home in <span className="font-bold">{countdown}s</span>...
            </p>
        </div>
    );
}

export default CheckOutSplashScreen;
