interface Path {
    distance: number
    points: PathCoord[]
}

interface Points {
    points: Coordinates[]
}

interface Coordinates {
    x: string | number
    y: string | number
}

interface PathCoord extends Coordinates {
    user: string 
}

interface UserForm {
    name: string
    email: string
    phoneNumber: string
    coordinates: Coordinates
}

interface User {
    name: string
    email: string
    phoneNumber: string
    coordinatesX: string
    coordinatesY: string
}

export type { Coordinates, Points, UserForm, User, Path }