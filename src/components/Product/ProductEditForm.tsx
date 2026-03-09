import {
    Input,
    Button,
    VStack,
    Spinner,
    Field
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../hooks/Product/useProduct";
import { useState, useEffect } from "react";

export default function ProductForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { product, loading, saveProduct } = useProduct(Number(id!));

    const [description, setDescription] = useState("");
    const [salePrice, setSalePrice] = useState<number>(0);
    const [purchasePrice, setPurchasePrice] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [barCode, setBarCode] = useState("");
    const [supplierId, setSupplierId] = useState<number>(0);

    useEffect(() => {
        if (product) {
            setDescription(product.description);
            setSalePrice(product.salePrice);
            setPurchasePrice(product.purchasePrice);
            setAmount(product.amount);
            setBarCode(product.barCode);
            setSupplierId(product.supplierId);
        }
    }, [product]);

    const handleUpdate = async () => {
        if (!product) return;

        const updatedProduct = {
            id: Number(id),
            description,
            salePrice,
            purchasePrice,
            amount,
            barCode,
            supplierId
        };

        await saveProduct(updatedProduct);

        navigate("/produtos");
    };

    if (loading) return <Spinner />;

    return (


        <VStack gap={4}>

            <Field.Root>
                <Field.Label>Descrição</Field.Label>
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Field.Root>
                <Field.Label>Preço de Venda</Field.Label>
                <Input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(parseFloat(e.target.value))}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Field.Root>
                <Field.Label>Preço de Compra</Field.Label>
                <Input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Field.Root>
                <Field.Label>Quantidade</Field.Label>
                <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Field.Root>
                <Field.Label>Código de Barras</Field.Label>
                <Input
                    value={barCode}
                    onChange={(e) => setBarCode(e.target.value)}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Field.Root>
                <Field.Label>Fornecedor</Field.Label>
                <Input
                    value={supplierId}
                    onChange={(e) => setSupplierId(Number(e.target.value))}
                    border="0.8px solid gray"
                />

            </Field.Root>

            <Button
                bgColor="blue"
                _hover={{ bgColor: "blue.500" }}
                border="1px solid black"
                onClick={handleUpdate}>
                Atualizar
            </Button>
        </VStack>


    );
}