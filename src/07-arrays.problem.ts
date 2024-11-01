interface Order {
  id: number;
  clientName: string;
  items: OrderItem;
  status: "новый" | "в_обработке" | "доставляется" | "выполнен";
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export const sampleOrder: Order = {
  id: 1,
  clientName: "Петров Иван",
  status: "новый",
  items: [
    {
      id: 1,
      name: "Ноутбук",
      quantity: 1,
      price: 69990
    },
    {
      id: 2,
      name: "Мышь",
      quantity: 1,
      price: 1990
    }
  ]
};