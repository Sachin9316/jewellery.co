import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

function SubscribeSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-16 w-full">
            <div className="font-light tracking-[0.1em] uppercase text-2xl text-center">
                become a member and get exclusive deals
            </div>

            <div className="flex flex-col items-center justify-start mt-8 w-full">
                <div
                    className="relative flex flex-col items-center w-1/4 rounded-md overflow-hidden shadow-sm justify-start">
                    <div className="text-muted-foreground mb-1 text-start w-full">
                        Subscribe to our newsletter to stay in the loop.
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Your Email here."
                        className="w-full p-4 focus:outline-none text-sm border-2 border-muted-foreground rounded-md"
                    />

                    <button
                        className="bg-red-600 h-14 absolute bottom-0 right-0 px-5 rounded-sm flex items-center justify-center hover:bg-red-700 transition-all">
                        <Image
                            src="/icons/send.svg"
                            alt="Send"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscribeSection;
