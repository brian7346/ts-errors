interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (
  createUser: unknown,
  getUser: unknown,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};