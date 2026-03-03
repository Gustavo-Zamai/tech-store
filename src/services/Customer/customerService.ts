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

export const createCustomer = async (data: Customer) => {
  return api.post("/customers", data);
};

export const updateCustomer = async (id: number) => {
  return api.put(`/customers/${id}`);
};

export const deleteCustomer = async (id: number) => {
  return api.delete(`/customers/${id}`);
};