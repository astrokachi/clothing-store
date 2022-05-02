import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		incremented(state) {
			state.value = true;
		},
		decrement(state) {
			state.value = false;
		},
	},
});

export const { incremented, decrement } = counterSlice.actions;
export const selectValue = (state) => state.counter.value;
export default counterSlice.reducer;
