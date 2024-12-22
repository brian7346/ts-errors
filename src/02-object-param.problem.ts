function printFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

printFullName({ firstName: "John", lastName: "Doe" });

// @ts-expect-error
printFullName({ firstName: "John", lastName: 30 });
