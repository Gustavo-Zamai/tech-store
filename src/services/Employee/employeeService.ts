import { api } from "../api";
import { Employee } from "../../types/employee";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get("/employees");
  return response.data;
};

export const getEmployeeById = async (id: number): Promise<Employee> => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

export const createEmployee = async (data: Employee) => {
  return api.post("/employees", data);
};

export const updateEmployee = async (id: number) => {
  return api.put(`/employees/${id}`);
};

export const deleteEmployee = async (id: number) => {
  return api.delete(`/employees/${id}`);
};