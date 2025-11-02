import Image from "next/image";
import {Button} from "@/components/ui/button";
import NavBar from "@/components/Common/NavBar";

function HeroSection() {

    return (
        <section className="relative w-full flex-1 min-h-screen">
            <Image src="/images/hero-image.jpg" alt="Hero" fill priority className="object-cover"/>

            <NavBar/>

            <div className="absolute bottom-3 p-2 space-y-14 sm:left-20 left-10 md:w-2/7">
                <div className="space-y-10">
                    <div className="sm:text-[50px] text-3xl font-light tracking-widest">GIFT THE GLOW</div>
                    <div className="sm:text-[24px] text-md uppercase leading-7 tracking-widest">
                        fresh designs that sparkle as bright as you do.
                    </div>
                </div>
                <div className="w-full gap-2 flex justify-between pr-5">
                    <Button className="bg-destructive rounded-xs flex-1 font-normal py-5 cursor-pointer">SHOP
                        NOW</Button>
                    <Button
                        className="bg-transparent border-destructive text-destructive border rounded-xs flex-1 font-normal py-5 hover:text-white cursor-pointer tracking-widest">
                        CUSTOMIZE
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
