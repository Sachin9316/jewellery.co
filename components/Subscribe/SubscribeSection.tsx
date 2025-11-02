import React from 'react';
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/utils/redux/store";

function SubscribeSection() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 bg-chart-1 py-10">
            <div className="font-light tracking-[0.1em] uppercase text-xl sm:text-2xl text-center">
                become a member and get exclusive deals
            </div>

            <div className="flex flex-col items-center justify-start mt-8 w-full">
                <div
                    className="relative flex flex-col gap-3 items-center sm:items-start w-full sm:w-3/4 md:w-1/2 lg:w-1/3">

                    <div className="text-muted-foreground text-center sm:text-start text-sm">
                        Subscribe to our newsletter to stay in the loop.
                    </div>

                    <div className="relative w-3/4">
                        <input
                            type="email"
                            placeholder="Enter your email here."
                            className="w-full p-4 pr-16 focus:outline-none text-sm border-2 border-muted-foreground rounded-md"
                        />

                        <button
                            className={`${isAuthenticated ? 'bg-destructive' : 'bg-primary'} h-13 w-14 absolute top-1/2 -translate-y-1/2 right-0 rounded-md flex items-center justify-center hover:bg-red-700 transition-all`}>
                            <Image
                                src="/icons/send.svg"
                                alt="Send"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeSection;
