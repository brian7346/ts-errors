// TypeScript должен показать ошибку
// потому что мы пытаемся использовать возможно отсутствующее свойство
type UserProfile = {
    name: string
    age?: number
}

const profile: UserProfile = { name: "Alice" }
export const ageInTenYears = profile.age + 10 