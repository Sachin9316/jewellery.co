import React, {useCallback, useState} from 'react';
import Image from "next/image";
import {ProductProps} from "@/components/Products/ProductSection";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {addToWishList, handleAddToCart, handleRemoveFromCart} from "@/redux/Slices/productSlice";
import {RootState} from "@/redux/store";
import {Minus, Plus} from "lucide-react";

interface CardProps extends ProductProps {
    convertedPrice: number;
    currency: string | null;
    qty: number;
}

function ProductCard({label, price, icon, id, convertedPrice, currency}: CardProps) {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const isWishlisted: boolean = useAppSelector((state: RootState) =>
        state.product.products.some((product) => product.id === id)
    );
    const cartQty: number = useAppSelector(
        (state: RootState) =>
            state.product?.cart?.find((product) => product.id === id)?.qty || 0
    );

    const handleWishListClick = useCallback(() => {
        dispatch(addToWishList({id, label, price: convertedPrice, icon, qty: 0}));
    }, [dispatch, id, label, convertedPrice, icon]);

    const handleIncrease = useCallback(() => {
        dispatch(handleAddToCart({id, label, price: convertedPrice, icon, qty: cartQty || 1}));
    }, [dispatch, id, label, convertedPrice, icon, cartQty]);

    const handleDecrease = useCallback(() => {
        dispatch(handleRemoveFromCart({id, label, price: convertedPrice, icon, qty: cartQty || 0}));
    }, [dispatch, id, label, convertedPrice, icon, cartQty]);

    return (
        <div className="h-70 min-w-[170px] sm:h-70 sm:w-50 md:w-76 md:h-100 cursor-pointer transition-all duration-700"
             onMouseEnter={() => setShow(true)}
             onMouseLeave={() => setShow(false)}
        >
            <div className="relative w-full h-full">
                <div
                    onClick={handleWishListClick}
                    className="absolute top-3 right-4 w-[30px] h-[30px] bg-muted rounded-full flex items-center justify-center z-10"
                >
                    <Image
                        src={isWishlisted ? "/icons/heart-red-svg.svg" : "/icons/heart-icon-gray.svg"}
                        alt="heart"
                        width={20}
                        height={20}
                    />
                </div>

                <Image src={icon} alt={label} fill
                       className={`object-cover ${show ? "opacity-0" : "opacity-100"} transition-opacity`}/>
                <Image src="/images/rings.jpg" alt={label} fill
                       className={`object-cover ${show ? "opacity-100" : "opacity-0"} transition-opacity`}/>

                <div className="absolute bottom-10 left-5 text-white">
                    <div className="text-sm sm:text-lg text-destructive tracking-widest">
                        {currency ? `${currency} ${convertedPrice.toFixed(2)}` : `$ ${price.toFixed(2)}`}
                    </div>
                    <div className="text-sm md:text-xl text-muted-foreground tracking-widest">{label}</div>
                </div>

                <div
                    className="absolute bottom-0 w-full bg-destructive flex flex-col items-center justify-center py-2 z-10">

                    {cartQty === 0 ? (
                        <button
                            onClick={handleIncrease}
                            className="text-white font-medium w-full cursor-pointer h-4 flex items-center justify-center"
                        >
                            Add To Cart
                        </button>
                    ) : (
                        <div className="flex items-center gap-4 h-4 w-full">
                            <button
                                onClick={handleDecrease}
                                className="text-white cursor-pointer w-full py-1 rounded-none flex justify-center items-center bg-destructive"
                            >
                                <Minus/>
                            </button>
                            <span className="text-white">{cartQty}</span>
                            <button
                                onClick={handleIncrease}
                                className="text-white cursor-pointer w-full py-1 rounded-none flex justify-center items-center bg-destructive"
                            >
                                <Plus/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProductCard);
