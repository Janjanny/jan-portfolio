import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: { darkMode: false } },

  // functions
  reducers: {
    switchMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// export the function
export const { switchMode } = themeSlice.actions;

// export the reducer
export default themeSlice.reducer;
