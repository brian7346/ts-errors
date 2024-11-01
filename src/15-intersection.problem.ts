interface Company {
  id: string;
  name: string;
  address: string;
}

interface TaxInfo {
  inn: string;
  kpp: string;
  ogrn: string;
}

/**
 * Создайте тип, который объединяет информацию о компании
 * и её налоговых данных
 */
export const getCompanyInfo = (): unknown => {
  return {
    id: "1",
    name: "ООО Рога и Копыта",
    address: "ул. Пушкина, д. Колотушкина",
    inn: "7712345678",
    kpp: "771001001",
    ogrn: "1234567890123",
  };
};