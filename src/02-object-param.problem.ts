// Создайте типизированную функцию для расчета итоговой стоимости заказа
export const calculateOrderTotal = (orderDetails) => {
  return orderDetails.price * orderDetails.quantity + orderDetails.deliveryPrice;
};