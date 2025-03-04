// TypeScript должен показать ошибку
// потому что мы пытаемся изменить readonly свойство
type Config = {
    readonly apiUrl: string
    readonly timeout: number
}

const config: Config = {
    apiUrl: "https://api.example.com",
    timeout: 3000
}

config.timeout = 5000 