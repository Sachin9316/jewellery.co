import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{ user: User; token: string, checked: boolean }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            const checked = action.payload.checked;
            if (checked) {
                state.isAuthenticated = true;
            }
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        loadUserFromStorage: (state) => {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");
            const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
            const isLoggedIn: boolean = storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;

            if (token && user && isLoggedIn) {
                state.isAuthenticated = true;
                state.token = token;
                state.user = JSON.parse(user);
            }
        },
    },
});

export const { loginSuccess, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
