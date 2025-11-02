import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductType {
    id: number;
    label: string; // ✅ Should be string, not number
    price: number;
    icon: string;
}

interface InitialState {
    products: ProductType[];
}

const initialState: InitialState = {
    products: [],
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
            } else {
                state.products.push(action.payload);
                localStorage.setItem("products", JSON.stringify(state.products));
            }
        },

        loadProducts: (state) => {
            const products = localStorage.getItem("products");
            if (products) {
                state.products = JSON.parse(products) as ProductType[];
            }
        }
    },
});

export const {addToWishList, loadProducts} = productSlice.actions;
export default productSlice.reducer;
