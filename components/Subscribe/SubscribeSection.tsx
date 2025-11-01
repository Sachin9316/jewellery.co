import React from 'react';
import Image from "next/image";

function SubscribeSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-16 w-full px-4">
            {/* Title */}
            <div className="font-light tracking-[0.1em] uppercase text-xl sm:text-2xl text-center">
                become a member and get exclusive deals
            </div>

            {/* Input Section */}
            <div className="flex flex-col items-center justify-start mt-8 w-full">
                <div
                    className="relative flex flex-col gap-3 items-center sm:items-start w-full sm:w-3/4 md:w-1/2 lg:w-1/3">

                    {/* Description */}
                    <div className="text-muted-foreground text-center sm:text-start text-sm">
                        Subscribe to our newsletter to stay in the loop.
                    </div>

                    {/* Input Wrapper */}
                    <div className="relative w-full">
                        <input
                            type="email"
                            placeholder="Enter your email here."
                            className="w-full p-4 pr-16 focus:outline-none text-sm border-2 border-muted-foreground rounded-md"
                        />

                        {/* Send Button */}
                        <button
                            className="bg-red-600 h-13 w-14 absolute top-1/2 -translate-y-1/2 right-0 rounded-md flex items-center justify-center hover:bg-red-700 transition-all">
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
