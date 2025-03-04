// TypeScript должен показать ошибку
// потому что AdminUser не реализует все свойства User
interface User {
    id: number
    name: string
    email: string
}

interface AdminUser extends User {
    role: string
}

export const admin: AdminUser = {
    name: "Admin",
    role: "admin",
    email: "admin@example.com"
} 