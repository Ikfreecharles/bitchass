import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

// Define a type for the slice state
interface INav {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: INav = {
  isOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = navSlice.actions;

export const isOpen = (state: RootState) => state.nav.isOpen;

export default navSlice.reducer;
