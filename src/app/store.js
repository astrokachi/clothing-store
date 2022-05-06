import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
import counterReducer from "../features/counter/counterSlice";
import countReducer from "../features/counter/countSlice"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		count: countReducer,
	},
});
