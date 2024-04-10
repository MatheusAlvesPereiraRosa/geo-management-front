import { createSlice, PayloadAction, Dispatch, ThunkAction, Action } from "@reduxjs/toolkit/react"
import { UserState } from "../interfaces"
import { User, Path } from "../../interfaces"

import { RootState } from "../store"

import axios from "axios"
import { extractedPoints } from "../../utils/functions"

/* Initial State */
const initialState: UserState = {
    users: [],
    isLoading: false,
    message: {
        type: ""
    },
    path: {
        distance: 0,
        points: []
    }
}

/* User Slice */
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUsersStart(state) {
            state.isLoading = true
        },
        getUsersSucess(state, action: PayloadAction<User[]>) {
            state.users = action.payload
            state.isLoading = false
        },
        getUsersFailure(state) {
            state.isLoading = false
        },
        calcPathStart(state) {
            state.isLoading = true
        },
        calcPathSucess(state, action: PayloadAction<Path>) {
            state.path = action.payload
        }
    }
})

/* Action Creator */
/** Responsaveis por realizar as ações por fora dos reducers */
export const fetchUsers = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        dispatch(getUsersStart());
        const response = await axios.get<User[]>('http://localhost:3000/users');
        dispatch(getUsersSucess(response.data));
    } catch (error: any) {
        dispatch(getUsersFailure(error.response.message));
    }
};

export const fetchPath = (users: User[]): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        const points = extractedPoints(users);
        const response = await axios.post<Path>('http://localhost:3000/users/calculateDistanceSolution', { points });
        dispatch(calcPathSucess(response.data));
    } catch (error: any) {
        dispatch(getUsersFailure()); // Should this be getUsersFailure or calcPathFailure?
    }
}

export const { getUsersStart, getUsersSucess, getUsersFailure, calcPathSucess } = userSlice.actions

export default userSlice.reducer;