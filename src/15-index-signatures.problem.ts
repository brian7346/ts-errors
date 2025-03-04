// TypeScript должен показать ошибку
// потому что мы пытаемся присвоить число там, где ожидается строка
interface StringDictionary {
    [key: string]: string
}

export const dict: StringDictionary = {
    name: "John",
    age: 25
} 