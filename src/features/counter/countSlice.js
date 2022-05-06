import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 1,
};

export const countSlice = createSlice({
	name: "count",
	initialState,
	reducers: {
		increase(state) {
			state.count++;
		},
		decrease(state) {
			if (state.count > 1) {
				state.count--;
			}
		},
	},
});

export const { increase, decrease } = countSlice.actions;
export const selectCount = (state) => state.count.count;
export default countSlice.reducer;
