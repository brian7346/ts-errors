// TypeScript должен показать ошибку
// потому что в типе User не описано свойство age
type User = {
    name: string
    email: string
}

export const user: User = {
    name: "John",
    email: "john@example.com",
    age: 25
} 