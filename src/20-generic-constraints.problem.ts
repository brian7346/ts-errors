// TypeScript должен показать ошибку
// потому что тип не удовлетворяет ограничению
interface HasLength {
    length: number
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length
}

getLength(42) 