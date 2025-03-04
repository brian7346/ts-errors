// TypeScript должен показать ошибку
// потому что тип не соответствует условию
type IsString<T> = T extends string ? true : false

export const result: IsString<number> = true 