import { User } from "../interfaces";

export const extractedPoints = (users: User[]) => {
    const points = users.flatMap(user => {
        return { x: parseFloat(user.coordinatesX), y: parseFloat(user.coordinatesY) };
    });
    
    return points
};