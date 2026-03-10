import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee, getEmployeeByName } from "../../services/Employee/employeeService";
import { Employee } from "../../types/employee";

export const useEmployee = (id: number) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchEmployee = async () => {
    const data = await getEmployeeById(id);
    setEmployee(data);
    setLoading(false);
  };

  /*const fetchEmployeeByName = async () => {
    const data = await getEmployeeByName(name);
    setEmployee(data);
    setLoading(false);
  };*/

  const saveEmployee = async (data: Employee) => {
    await updateEmployee(data.id, data);
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  return {
    employee,
    loading,
    saveEmployee
  };
};