import { api } from "../api";
import { Company } from "../../types/company";

export const getCompany = async (): Promise<Company> => {
  const response = await api.get("/company");
  return response.data;
};