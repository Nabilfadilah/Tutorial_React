import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        }
    }
})

// store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
});
console.log("oncreate store : ", store.getState());

// subscribe, untuk cek perubahan
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}))
store.dispatch(cartSlice.actions.addToCart({id: 8, qty: 82}))
