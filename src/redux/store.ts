import { configureStore } from '@reduxjs/toolkit'

import userSlice from "./slices/user-slice"

const store = configureStore({
    reducer: {
        users: userSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>