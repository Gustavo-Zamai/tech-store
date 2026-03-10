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

export const getEmployeeByName = async (name: string): Promise<Employee> => {
  const response = await api.get(`/employees/${name}`);
  return response.data;
};

export const createEmployee = async (data: Employee) => {
  const response = await api.post("/employees", data);
  return response.data;
};

export const updateEmployee = async (id: number, data: Employee) => {
  const response = await api.put(`/employees/${data.id}`, data);
  return response.data
};

export const deleteEmployee = async (id: number) => {
  return api.delete(`/employees/${id}`);
};