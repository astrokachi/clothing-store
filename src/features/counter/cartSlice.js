import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	quantity: 0,
	mutated: {},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,

	reducers: {
		addToCart(state, action) {
			state.items.push(action.payload);
			state.quantity++;
		},

		removeFromCart(state, action) {
			state.quantity--;
			state.items.splice(action.payload, 1);
		},

		replace(state, action) {
			state.items[action.payload] = state.mutated;
		},

		setMutated(state, action) {
			state.mutated = action.payload;
		},
	},
});

export const { addToCart, removeFromCart, replace, setMutated } =
	cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotal = (state) =>
	state.cart.items.reduce((total, item) => (total += item.price), 0);
export default cartSlice.reducer;
