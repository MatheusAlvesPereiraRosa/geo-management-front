import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit/react"
import { UserState } from "../interfaces"
import { User, UserForm, Coordinates, Path } from "../../interfaces"

import axios from "axios"
import { extractedPoints } from "../../utils"


/* Initial State */
const initialState: UserState = {
    users: [],
    isLoading: false,
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
export const fetchUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(getUsersStart())
        const response = await axios
            .get('http://localhost:3000/users')
        dispatch(getUsersSucess(response.data))
    } catch (error: any) {
        dispatch(getUsersFailure(error.message))
    }
}

export const fetchPath = (users: User[]) => async (dispatch: Dispatch) => {

    console.log(users)

    try {
        const points = extractedPoints(users)

        console.log(points)

        const response = await axios
            .post("http://localhost:3000/users/calculateDistanceSolution", { points: points })

        console.log(response.data)

        dispatch(calcPathSucess(response.data))
    } catch (error: any) {
        dispatch(getUsersFailure())
    }
};

export const { getUsersStart, getUsersSucess, getUsersFailure, calcPathSucess } = userSlice.actions

export default userSlice.reducer;