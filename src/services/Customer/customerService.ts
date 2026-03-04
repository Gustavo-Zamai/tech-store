import { api } from "../api";
import { Customer } from "../../types/customer";

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await api.get("/customers");
  return response.data;
};

export const getCustomerById = async (id: number): Promise<Customer> => {
  const response = await api.get(`/customers/${id}`);
  return response.data;
};

export const createCustomer = async (data: Omit<Customer, "id">) => {
  const response = await api.post("/customers", data);
  return response.data;
};

export const updateCustomer = async (id: number) => {
  const response = await api.put(`/customers/${id}`)
  return response.data;
};

export const deleteCustomer = async (id: number) => {
  return api.delete(`/customers/${id}`);
};