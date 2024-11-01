// Создайте функцию для расчета стоимости доставки 
// с учетом веса посылки и расстояния
export const calculateDeliveryPrice = (weight, distance) => {
  return weight * distance * 100;
};