// TypeScript должен показать ошибку
// потому что в кортеж передаются значения неправильных типов
type Point = [number, number]

export const point: Point = ["10", 20] 