// Создайте функцию для форматирования адреса, где номер квартиры опционален
export const formatAddress = (params: { street: string; house: string; apartment: string }) => {
  if (params.apartment) {
    return `ул. ${params.street}, д. ${params.house}, кв. ${params.apartment}`;
  }
  return `ул. ${params.street}, д. ${params.house}`;
};