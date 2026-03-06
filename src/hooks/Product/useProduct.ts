import { useEffect, useState } from "react";
import { getProductById, getProductByName, updateProduct} from "../../services/Product/productService";
import { Product } from "../../types/product";

export const useProduct = (id: number) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async () => {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
    };

    const saveProduct = async (data: Product) => {
        await updateProduct(data.id, data);
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return {
        product,
        loading,
        saveProduct
    };
};
