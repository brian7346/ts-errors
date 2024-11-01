interface OrderDetails {
  id: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  deliveryAddress: string;
  totalAmount: number;
}

// Создайте типизированную функцию для создания заказа
// и получения его деталей
const processOrder = async (
  createOrder: unknown,
  getOrderDetails: unknown,
): Promise<OrderDetails> => {
  const orderId: string = await createOrder();
  const orderDetails = await getOrderDetails(orderId);
  return orderDetails;
};