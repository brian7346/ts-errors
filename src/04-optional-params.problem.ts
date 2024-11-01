// Создайте функцию для приветствия пользователя, 
// где отчество является опциональным параметром
export const formatGreeting = (firstName: string, lastName: string, middleName: string) => {
  if (middleName) {
    return `Здравствуйте, ${lastName} ${firstName} ${middleName}!`;
  }
  return `Здравствуйте, ${lastName} ${firstName}!`;
};