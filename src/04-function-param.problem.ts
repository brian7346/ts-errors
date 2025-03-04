// TypeScript должен показать ошибку
// потому что функция ожидает строку, а мы передаем число
function greeting(name: string) {
    return `Hello, ${name}!`
}

greeting(42) 