import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		username: "Kachi",
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUsername = (state) => state.user.username;
export default userSlice.reducer;
