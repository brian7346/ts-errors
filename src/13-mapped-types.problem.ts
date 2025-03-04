// TypeScript должен показать ошибку
// потому что мы пытаемся изменить readonly поля
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

interface User {
    name: string
    age: number
}

const user: Readonly<User> = {
    name: "John",
    age: 30
}

user.age = 31 