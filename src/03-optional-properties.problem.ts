export const printFullName = (params) => {
  if (params.middleName) {
    return `${params.firstName} ${params.middleName} ${params.lastName}`;
  }
  return `${params.firstName} ${params.lastName}`;
};

printFullName({ firstName: "John", lastName: "Doe" });
printFullName({ firstName: "John", lastName: "Doe", middleName: "Smith" });

// @ts-expect-error
printFullName({ firstName: "John", lastName: "Doe", middleName: 30 });

// @ts-expect-error
printFullName({ firstName: "John", middleName: "Smith" });
