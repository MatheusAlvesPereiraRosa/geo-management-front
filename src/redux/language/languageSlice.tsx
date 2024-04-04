import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: LanguageState = {
    lang: 'pt-br'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.lang = action.payload
        }
    }
})