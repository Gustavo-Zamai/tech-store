import { useEffect, useState } from "react";
import { getCustomerById, updateCustomer } from "../../services/Customer/customerService";
import { Customer } from "../../types/customer";

export const useCustomer = (id: number) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCustomer = async () => {
    const data = await getCustomerById(id);
    setCustomer(data);
    setLoading(false);
  };

  const saveCustomer = async (id:number, data: Customer) => {
    await updateCustomer(data.id, data);
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  return {
    customer,
    loading,
    saveCustomer
  };
};