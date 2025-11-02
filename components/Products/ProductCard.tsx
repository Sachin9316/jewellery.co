import React, {useState} from 'react';
import Image from "next/image";
import {ProductProps} from "@/components/Products/ProductSection";
import {useAppDispatch, useAppSelector} from "@/utils/redux/hooks";
import {addToWishList} from "@/utils/redux/Slices/productSlice";
import {RootState} from "@/utils/redux/store";

function ProductCard({label, price, icon, id}: ProductProps) {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const {products} = useAppSelector((state: RootState) => state.product);
    const itemId = products?.find((product) => product.id === id);

    const handleMouseHoverIn = () => {
        setShow(true);
    }

    const handleMouseHoverOut = () => {
        setShow(false);
    }

    const handleWishListClick = () => {
        const payload = {
            id,
            label,
            price,
            icon,
        }
        dispatch(addToWishList(payload));
    }

    return (
        <div className="h-70 min-w-[170px] sm:h-70 sm:w-50 md:w-76 md:h-100 cursor-pointer transition-all duration-700"
             onMouseEnter={handleMouseHoverIn} onMouseLeave={handleMouseHoverOut}>
            <div className="relative w-full h-full border-2">
                <div
                    onClick={handleWishListClick}
                    className="absolute top-3 right-4 pt-0.5 w-[30px] h-[30px] bg-muted rounded-full flex items-center justify-center z-10">
                    <Image
                        src={itemId?.id === id ? "/icons/heart-red-svg.svg" : "/icons/heart-icon-gray.svg"}
                        alt="heart"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </div>

                <Image
                    src={icon}
                    alt={label}
                    fill
                    className={`object-cover transition-opacity duration-700 ${show ? "opacity-0" : "opacity-100"}`}
                />

                <Image
                    src="/images/rings.jpg"
                    alt={label}
                    fill
                    className={`object-cover transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}
                />

                <div className="absolute bottom-5 left-5 text-white font-sans">
                    <div className="text-lg tracking-widest text-destructive">$ {price}</div>
                    <div className="text-sm md:text-xl font-light tracking-widest text-muted-foreground">{label}</div>
                </div>

            </div>
        </div>


    );
}

export default ProductCard;