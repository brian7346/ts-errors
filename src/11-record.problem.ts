// Создайте типизированный кэш для хранения информации о товарах
const createProductCache = () => {
  const cache = {};

  const addProduct = (articleId: string, productInfo: string) => {
    cache[articleId] = productInfo;
  };

  const removeProduct = (articleId: string) => {
    delete cache[articleId];
  };

  return {
    cache,
    addProduct,
    removeProduct,
  };
};