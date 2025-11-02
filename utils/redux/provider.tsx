'use client';

import {useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {makeStore, AppStore} from './store';
import {loadUserFromStorage} from '@/utils/redux/Slices/authSlice';
import {loadProducts} from "@/utils/redux/Slices/productSlice";

export default function Providers({children}: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (storeRef.current) {
            storeRef.current.dispatch(loadUserFromStorage());
            storeRef.current.dispatch(loadProducts());
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
