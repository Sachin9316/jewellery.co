"use client";
import {useAppSelector} from "@/redux/hooks";
import {RootState} from "@/redux/store";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function ProtectedRoute({children}: { children: React.ReactNode }) {
    const {isAuthenticated} = useAppSelector((state: RootState) => state.auth);
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isAuthenticated) {
                router.replace("/");
            }
            setIsChecking(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [isAuthenticated, router]);

    if (isChecking) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return <>{children}</>;
}
