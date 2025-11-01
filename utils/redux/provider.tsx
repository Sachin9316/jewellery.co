'use client';

import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { loadUserFromStorage } from '@/utils/redux/Slices/authSlice';

export default function Providers({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null);
    const [isAuthLoaded, setIsAuthLoaded] = useState(false);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (storeRef.current) {
            storeRef.current.dispatch(loadUserFromStorage());
        }

        setTimeout(() => {
            setIsAuthLoaded(true);
        }, 300);
    }, []);

    if (!isAuthLoaded) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="text-lg font-medium animate-pulse">Loading...</span>
            </div>
        );
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
