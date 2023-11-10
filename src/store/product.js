import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    items:[],
    totalQuantity:0,
    changed:false,
    // totalAmount:0,
    
};

const productSlice = createSlice({
name: "products",
initialState: initialState,
reducers: {
    addProduct(state,action){
        state.product = action.payload;
    },
    replaceItem(state,action){
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
       // state.totalAmount = action.payload;
    },
    addItem(state,action){
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        state.totalQuantity++;
        
        state.changed = true;
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title,
            image:newItem.image,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        }
        // state.totalAmount = state.items.reduce((prev, curr) => {
        //     return prev + curr.totalPrice;
        // })
    },
    removeItem(state,action){
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalQuantity--;
        state.changed =true;
        if(existingItem.quantity === 1){
            state.items = state.items.filter((item) => item.id !== id);
        }else{
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice -existingItem.price;
        }
        // state.totalAmount = state.items.reduce((prev, curr) => {
        //     return prev + curr.totalPrice;
        // })
    }
}
})

export const productSliceAction = productSlice.actions;

export default productSlice.reducer;