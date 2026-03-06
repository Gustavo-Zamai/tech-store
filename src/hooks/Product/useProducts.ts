import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { getProducts, deleteProduct } from "../../services/Product/productService";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const fetchProducts = async () => {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    const removeProduct = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };

    const filteredProducts = products.filter((p) =>
        (p.description||"").toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        filteredProducts,
        loading,
        search,
        setSearch,
        removeProduct
    };
};