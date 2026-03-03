import { useEffect, useState } from "react";
import { Customer } from "../types/customer";
import { getCustomers, deleteCustomer } from "../services/Customer/customerService";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchCustomers = async () => {
    setLoading(true);
    const data = await getCustomers();
    setCustomers(data);
    setLoading(false);
  };

  const removeCustomer = async (id: number) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  const filteredCustomers = customers.filter((c) =>
    (c.name||"").toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchCustomers();
  }, []);

  return {
    filteredCustomers,
    loading,
    search,
    setSearch,
    removeCustomer,
  };
};