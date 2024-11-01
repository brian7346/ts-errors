interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  salary: number;
  bankDetails: {
    accountNumber: string;
    bik: string;
  };
}

/**
 * Создайте тип PublicEmployeeInfo, который содержит только
 * публичную информацию о сотруднике (без банковских данных и зарплаты)
 */

type PublicEmployeeInfo = unknown;