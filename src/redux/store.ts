import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import languageReducer from "./language/languageSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        language: languageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;