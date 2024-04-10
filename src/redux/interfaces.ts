import { User, Path, UserForm, Coordinates } from "../interfaces"

interface FetchRes {
    type: string
    errBR?: string
    errEN?: string
}

export interface UserState {
    users: User[]
    isLoading: boolean
    path: Path
    message: FetchRes
}

export interface LanguageState {
    lang: string
}



