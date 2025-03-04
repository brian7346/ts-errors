// TypeScript должен показать ошибку
// потому что свойство не существует в типе
interface Car {
    brand: string
    model: string
    year: number
}

type CarKey = keyof Car

export const key: CarKey = "color" 