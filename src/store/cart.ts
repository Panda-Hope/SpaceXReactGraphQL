import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  id: string,
  productName: string,
  inventory: number,
  price: number,
  quantity: number,
  unit: number,
  cover: string,
  description: string
}

export interface CartInfo {
  cartLists: CartItem[],
  totalPrice: number
}

const cartReducer = createSlice({
  name: 'cartInfo',
  initialState: () => {
    const cartLists: CartItem[] = []
    return {
      cartLists,
      totalPrice: 0
    }
  },
  reducers: {
    setCartLists(state, action) {

    }
  }
})

export const { setCartLists } = cartReducer.actions

export default cartReducer.reducer