interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
}

/**
 * Как правильно типизировать defaultProduct,
 * чтобы он соответствовал интерфейсу Product?
 */
const defaultProduct = {};

const getProductPrice = (product: Product) => {
  return product.price;
};