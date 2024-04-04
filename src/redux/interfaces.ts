import { User, Path, UserForm, Coordinates } from "../interfaces"

export interface UserState {
    users: User[]
    isLoading: boolean
    path: Path
}

export interface LanguageState {
    lang: string
}



