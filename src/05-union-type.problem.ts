// TypeScript должен показать ошибку
// потому что значение 'pending' не входит в допустимый набор значений
type Status = 'loading' | 'success' | 'error'

export const status: Status = 'pending' 