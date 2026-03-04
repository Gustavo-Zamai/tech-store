import { useEffect, useState } from "react";
import { getCompany } from "../../services/Company/companyService";
import { Company } from "../../types/company";

export const useCompany = () => {
  const [company, setCompany] = useState<Company>();

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getCompany();
      setCompany(data);
    };

    fetchCompany();
  }, []);

  return { company };
};