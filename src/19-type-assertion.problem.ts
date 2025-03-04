// TypeScript должен показать ошибку
// потому что нельзя напрямую преобразовать один тип в другой без связи между ними
class Animal {
    name: string = "animal"
}

class Car {
    brand: string = "toyota"
}

const animal = new Animal()
export const car = animal as Car // Ошибка: типы не связаны между собой 