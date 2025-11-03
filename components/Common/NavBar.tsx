import React, {useState} from 'react';
import {Menu, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {DropdownMenu, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import {DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {useAppDispatch, useAppSelector} from "@/utils/redux/hooks";
import {RootState} from "@/utils/redux/store";
import {loggInToggle, logout} from "@/utils/redux/Slices/authSlice";
import SearchAutocomplete from "@/components/Common/SearchAutocomplete";
import {useRouter} from "next/navigation";

const nav: string[] = ["NEW ARRIVAL", "CUSTOM JEWELLERY", "TRY AT HOME", "EDUCATION HUB", "ABOUT US"];

const icons = [
    {id: 1, icon: "/icons/search-icon.svg"},
    {id: 2, icon: "/icons/heart-icon.svg"},
    {id: 3, icon: "/icons/user-icon.svg"},
    {id: 4, icon: "/icons/bag-icon.svg"},
];

function NavBar({invert = false}: { invert?: boolean }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const {isAuthenticated, showLoggedIn} = useAppSelector((state: RootState) => state.auth);
    const {products} = useAppSelector((state: RootState) => state.product);
    const dispatch = useAppDispatch();
    const count: number = products?.length;
    const router = useRouter();
    const cartQty: number = useAppSelector((state: RootState) => state?.product?.cart?.length);

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleUserClick = () => {
        if (!isAuthenticated) {
            dispatch(loggInToggle(!showLoggedIn));
        }
    };


    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setMenuOpen(false);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setShowSearch(false);
    }

    const handleWishlistClick = () => {
        console.log('wishlist')
        router.push('/wishlist');
    }

    const handleMyCart = () => {
        console.log('cart')
        router.push('/cart');
    }

    const handleClick = (index: number) => {
        if (index === 0) {
            setShowSearch(!showSearch)
        } else if (index === 1) {
            handleWishlistClick()
        } else if (index === 2) {
            handleLogout();
        } else if (index === 3) {
            handleMyCart();
        }
    }

    return (
        <div className={`absolute top-0 z-20 w-full px-5 py-3 lg:px-50 md:px-10 ${invert ? 'invert-100' : 'invert-0'}`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>

                    <div className="relative w-[22px] h-[22px]" onClick={toggleSearch}>
                        <Image src={icons[0].icon} alt="search-icon" fill priority className="object-contain"/>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-white">
                    <div className="relative w-[20px] h-[20px]">
                        <Image src="/icons/contact-icon.svg" alt="contact" fill priority
                               className="object-contain"/>
                    </div>
                    <span className="text-[14px] tracking-widest">CONTACT</span>
                </div>

                <div className="relative w-24 h-10 md:w-32 md:h-12">
                    <Image src="/icons/logo.svg" alt="logo" fill priority className="object-contain"
                           fetchPriority={'high'}/>
                </div>

                <div className="flex gap-3">
                    {icons.map(({id, icon}, index) => {
                        if (id !== 3) {
                            return (
                                <div
                                    key={id}
                                    onClick={() => handleClick(index)}
                                    className={`relative w-[22px] h-[22px] md:w-[24px] md:h-[24px] cursor-pointer ${
                                        index === 0 ? "hidden md:block" : ""
                                    }`}
                                >
                                    <Image src={icon} alt={`icon-${id}`} fill className="object-contain"/>

                                    {id === 2 && products.length > 0 && (
                                        <span
                                            className="
                                            absolute -top-1 -right-1
                                            w-4 h-4
                                            bg-red-600 text-white
                                            text-[10px]
                                            flex items-center justify-center
                                            rounded-full
                                        "
                                        >
                                        {count}
                                    </span>
                                    )}

                                    {id === 4 && cartQty > 0 && (
                                        <span
                                            className="
                                            absolute -top-1 -right-1
                                            w-4 h-4
                                            bg-red-600 text-white
                                            text-[10px]
                                            flex items-center justify-center
                                            rounded-full
                                        "
                                        >
                                        {cartQty}
                                    </span>
                                    )}
                                </div>
                            );
                        }

                        if (id === 3 && isAuthenticated) {
                            return (
                                <DropdownMenu key={id}>
                                    <DropdownMenuTrigger
                                        className="relative w-[22px] h-[22px] md:w-[24px] md:h-[24px] cursor-pointer">
                                        <Image src={icon} alt="user-icon" fill className="object-contain"/>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white text-black mt-2">
                                        <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                                            Sign Out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        return (
                            <div
                                key={id}
                                onClick={handleUserClick}
                                className="relative w-[22px] h-[22px] md:w-[24px] md:h-[24px] cursor-pointer"
                            >
                                <Image src={icon} alt="user-login" fill className="object-contain"/>
                            </div>
                        );
                    })}
                </div>
            </div>

            {showSearch && (
                <div
                    className="
                        absolute md:static top-14 left-0 w-full
                        bg-black z-30
                        flex justify-center px-6 py-3 md:px-0 md:py-0
                        shadow-md md:shadow-none
                        text-white
                        !invert-100
                        border-1
                        border-black
                    "
                >
                    <SearchAutocomplete/>
                </div>
            )}


            {
                !showSearch && (
                    <div
                        className={`
                            w-full
                            ${menuOpen ? "block" : "hidden"}
                            md:flex md:justify-center
                            py-3 pt-6
                            mt-3
                            
                            bg-gradient-to-b from-black/90 to-black/50
                            md:bg-none
                            transition-all duration-300
                        `}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-24">
                            {nav.map((item, index) => (
                                <Link href="#" key={index} onClick={toggleMenu}>
                                <span
                                    className="text-white lg:text-[14px] text-[12px] lg:truncate font-sans font-light tracking-widest hover:text-destructive transition">
                                  {item}
                                </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default NavBar;