import { api } from "../api";

export const login = async (email: string, password: string) => {
  const response = await api.get(`/employees?email=${email}`);

  const user = response.data[0];

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
};