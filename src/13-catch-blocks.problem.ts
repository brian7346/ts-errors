// Создайте функцию для проверки доступности сервера
const checkServerStatus = (serverUrl: string) => {
  try {
    // Имитация проверки сервера
    if (serverUrl.includes("error")) {
      throw new Error("Сервер недоступен");
    }
  } catch (e) {
    return e.message;
  }
};