import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		incremented(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		amountAdded(state, action) {
			state.value += action.payload;
		},
	},
});

export const { incremented, decrement, amountAdded } = counterSlice.actions;
export const selectValue = (state) => state.counter.value;
export default counterSlice.reducer;
