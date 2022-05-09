import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/counter/cartSlice";


export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		cart: cartReducer,
	},
});
