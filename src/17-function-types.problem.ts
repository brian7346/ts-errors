/**
 * Создайте типизированную функцию для отслеживания 
 * изменений корзины интернет-магазина
 */
const addCartListener = (onCartChange: unknown) => {
  document.addEventListener("cartUpdate", (e: CustomEvent) => {
    onCartChange(e.detail.items, e.detail.totalPrice);
  });
};