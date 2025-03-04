// TypeScript должен показать ошибку
// потому что реализация функции не соответствует её объявленным сигнатурам
function combine(a: number, b: number): number
function combine(a: string, b: string): string

function combine(a: any, b: any) {
    return a + b
}

export const result = combine(true, false) 