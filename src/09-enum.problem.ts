// TypeScript должен показать ошибку
// потому что такого значения нет в enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

export const myDirection: Direction = "FORWARD" 