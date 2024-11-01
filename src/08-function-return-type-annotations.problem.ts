interface BankAccount {
  id: number;
  owner: string;
  balance: number;
  currency: "RUB" | "USD" | "EUR";
  transactions: Transaction[];
}

interface Transaction {
  id: number;
  amount: number;
  type: "пополнение" | "списание";
  date: string;
}

/**
 * Как обеспечить, чтобы функция всегда возвращала
 * объект типа BankAccount?
 */
const createBankAccount = () => {
  return {};
};