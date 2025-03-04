// TypeScript должен показать ошибку
// потому что мы пытаемся получить доступ к необязательному полю
interface User {
    name: string
    email?: string
    phone?: string
}

type RequiredUser = Required<User>

export const user: RequiredUser = {
    name: "John"
} 