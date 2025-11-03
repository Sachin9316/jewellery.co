import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductType {
    id: number;
    label: string;
    price: number;
    icon: string;
    qty: number;
}

interface InitialState {
    products: ProductType[];
    cart: ProductType[];
}

const initialState: InitialState = {
    products: [],
    cart: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<ProductType>) => {
            const {id} = action.payload;
            const exists = state.products.some((product) => product.id === id);

            if (exists) {
                state.products = state.products.filter((product) => product.id !== id);
                localStorage.setItem("products", JSON.stringify(state.products));
            } else {
                state.products.push(action.payload);
                localStorage.setItem("products", JSON.stringify(state.products));
            }
        },

        loadProducts: (state) => {
            const products = localStorage.getItem("products");
            const cart = localStorage.getItem("cart");

            if (cart) {
                state.cart = JSON.parse(cart) as ProductType[];
            }

            if (products) {
                state.products = JSON.parse(products) as ProductType[];
            }
        },

        handleAddToCart: (state, action) => {
            const {id} = action.payload;
            const exists = state?.cart?.find((product) => product.id === id);
            if (exists) {
                const data: ProductType[] = state.cart.map((product) => {
                    if (product.id === id) {
                        return {
                            ...product,
                            qty: product.qty + 1,
                        }
                    }
                    return product;
                })
                state.cart = data;
                localStorage.setItem("cart", JSON.stringify(data));
            } else {
                state.cart.push(action.payload);
                const data: ProductType[] = [...state.cart, action.payload];
                localStorage.setItem("cart", JSON.stringify(data));
            }
        },

        handleRemoveFromCart: (state, action) => {
            const {id} = action.payload;
            const data: ProductType[] = state.cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        qty: product.qty - 1,
                    }
                }
                return product;
            }).filter((product) => product.qty > 0);
            state.cart = data;
            localStorage.setItem("cart", JSON.stringify(data));
        },

        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const {addToWishList, loadProducts, handleAddToCart, handleRemoveFromCart, clearCart} = productSlice.actions;
export default productSlice.reducer;
