import { api } from "../api";
import { Product } from "../../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductByName = async (description: string): Promise<Product> => {
  const response = await api.get(`/products/${description}`);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (data: Omit<Product, "id">) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const updateProduct = async (id:number ,data: Product) => {
  const response = await api.patch(`/products/${data.id}`, data)
  return response.data;
};

export const deleteProduct = async (id: number) => {
  return api.delete(`/products/${id}`);
};