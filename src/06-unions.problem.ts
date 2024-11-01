interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * Как обеспечить, чтобы должность могла быть только одной из:
   * - 'менеджер'
   * - 'разработчик'
   * - 'дизайнер'
   * - 'аналитик'
   */
  position: string;
}

export const newEmployee: Employee = {
  id: 1,
  firstName: "Анна",
  lastName: "Иванова",
  // @ts-expect-error
  position: "неправильная_должность",
};