import React, {useState} from 'react';
import Image from "next/image";
import {ProductProps} from "@/components/Products/ProductSection";
import {useAppDispatch, useAppSelector} from "@/utils/redux/hooks";
import {addToWishList} from "@/utils/redux/Slices/productSlice";
import {RootState} from "@/utils/redux/store";

interface CardProps extends ProductProps {
    convertedPrice: number;
    currency: string | null;
}

function ProductCard({label, price, icon, id, convertedPrice, currency}: CardProps) {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const {products} = useAppSelector((state: RootState) => state.product);
    const itemId = products?.find((product) => product.id === id);

    const handleWishListClick = () => {
        dispatch(addToWishList({id, label, price, icon}));
    };

    return (
        <div
            className="h-70 min-w-[170px] cursor-pointer transition-all duration-700"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="relative w-full h-full">
                <div
                    onClick={handleWishListClick}
                    className="absolute top-3 right-4 w-[30px] h-[30px] bg-muted rounded-full flex items-center justify-center z-10"
                >
                    <Image
                        src={itemId ? "/icons/heart-red-svg.svg" : "/icons/heart-icon-gray.svg"}
                        alt="heart"
                        width={20}
                        height={20}
                    />
                </div>

                <Image src={icon} alt={label} fill
                       className={`object-cover ${show ? "opacity-0" : "opacity-100"} transition-opacity`}/>
                <Image src="/images/rings.jpg" alt={label} fill
                       className={`object-cover ${show ? "opacity-100" : "opacity-0"} transition-opacity`}/>

                <div className="absolute bottom-5 left-5 text-white">
                    <div className="text-sm sm:text-lg text-destructive tracking-widest">
                        {currency ? `${currency} ${convertedPrice.toFixed(2)}` : `$ ${price.toFixed(2)}`}
                    </div>
                    <div className="text-sm md:text-xl text-muted-foreground tracking-widest">{label}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
