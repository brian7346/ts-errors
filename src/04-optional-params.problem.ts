export const printFullName = (firstName, lastName) => {
  if (lastName) {
    return `Здравствуйте, ${lastName} ${firstName}!`;
  }
  return `Здравствуйте, ${firstName}!`;
};

printFullName("John", "Doe");
printFullName("John");

// @ts-expect-error
printFullName("John", "Doe", 30);
