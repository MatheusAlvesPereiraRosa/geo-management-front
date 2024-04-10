import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { LanguageState } from '../interfaces'

const initialState: LanguageState = {
    lang: 'pt'
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

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer