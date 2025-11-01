'use client'
import React, {useEffect} from 'react';
import {useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
import {useRouter} from "next/navigation";

function Page() {
    const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
    const router = useRouter();
    useEffect(() => {
        if(isAuthenticated) {
            router.push("/");
        }
    },[isAuthenticated]);

    return (
        <div>Login screen</div>
    );
}

export default Page;