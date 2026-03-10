import { useEffect, useState } from "react";
import { Employee } from "../../types/employee";
import { getEmployees, deleteEmployee } from "../../services/Employee/employeeService";

export const useEmployees = () => {
  const [employees, setEmployess] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    setLoading(true);
    const data = await getEmployees();
    setEmployess(data);
    setLoading(false);
  };

  const removeEmployee = async (id: number) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const filteredEmployees = employees.filter((e) =>
    (e.name||"").toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    filteredEmployees,
    loading,
    search,
    setSearch,
    removeEmployee,
  };
};