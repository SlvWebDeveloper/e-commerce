import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarIsOpen: false
};

export const shopSlice = createSlice( {
  initialState,
  name: "Shop Slice",
  reducers: {
    openSidebar: state => {
      state.sidebarIsOpen = true;
    },
    closeSidebar: state => {
      state.sidebarIsOpen = false;
    }
  }
} );

export const { openSidebar, closeSidebar } = shopSlice.actions;