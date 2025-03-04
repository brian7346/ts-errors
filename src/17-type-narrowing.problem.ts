// TypeScript должен показать ошибку
// потому что мы не сузили тип перед использованием метода
type StringOrNumber = string | number

export function processValue(value: StringOrNumber) {
    return value.toFixed(2)
} 