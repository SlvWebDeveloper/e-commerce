import all_product from '@/assets/all_product';
import { createSlice } from '@reduxjs/toolkit';

const defaultCart = () => {
  let cart = {};
  for ( let i = 0; i < all_product.length + 1; i++ ) {
    cart[i] = 0;
  }
  return cart;
};

const initialState = {
  sidebarIsOpen: false,
  cart: defaultCart(),
  promoCodeIsOpen: false,
  subtotal: 0,
  productToCart: []

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
    },
    addedToCart: ( state, action ) => {
      state.cart = { ...state.cart, [action.payload]: state.cart[action.payload] + 1 };
    },
    removedToCart: ( state, action ) => {
      state.cart = { ...state.cart, [action.payload]: state.cart[action.payload] - 1 };
    },
    promoCodeShow: ( state ) => {
      state.promoCodeIsOpen = !state.promoCodeIsOpen;
    },
    getTotalAmount: ( state ) => {
      let totalItem = [];
      for ( let item in state.cart ) {
        if ( state.cart[item] > 0 ) {
          let product = all_product.find( ( el ) => el.id === Number( item ) );
          totalItem.push( { ...product, qty: state.cart[item] } );
        }
      }
      state.subtotal = totalItem.reduce( ( acc, el ) => {
        return acc += el.new_price * el.qty;
      }, 0 );
    }
  }
} );



export const { openSidebar, closeSidebar, addedToCart, removedToCart, promoCodeShow, getTotalAmount } = shopSlice.actions;