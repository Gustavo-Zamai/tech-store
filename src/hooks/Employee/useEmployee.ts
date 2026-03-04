import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../../services/Employee/employeeService";
import { Employee } from "../../types/employee";

export const useEmployee = (id: number) => {
  const [employee, setEmplpoyee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCustomer = async () => {
    const data = await getEmployeeById(id);
    setEmplpoyee(data);
    setLoading(false);
  };

  const saveCustomer = async (): Promise<Employee | any> => {
    await updateEmployee(id);
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  return {
    employee,
    loading,
    saveCustomer
  };
};