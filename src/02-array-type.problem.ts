// TypeScript должен показать ошибку
// потому что мы объявили массив чисел, но пытаемся положить в него строки
const ages: number[] = []
ages.push(25)
ages.push("30")
ages.push(35) 