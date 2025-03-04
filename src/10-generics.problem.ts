// TypeScript должен показать ошибку
// потому что мы передаем строку в массив чисел
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

export const num = firstElement<number>(['1', '2', '3']) 