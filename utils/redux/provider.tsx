'use client';

import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { loadUserFromStorage } from '@/utils/redux/Slices/authSlice';

export default function Providers({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (storeRef.current) {
            storeRef.current.dispatch(loadUserFromStorage());
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
