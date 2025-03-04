// В этой функции TypeScript должен показать ошибку
// потому что нельзя складывать строку с числом не приведя их к одному типу
function calculateAge(year: number): number {
    const currentYear = "2024"
    return currentYear - year
} 