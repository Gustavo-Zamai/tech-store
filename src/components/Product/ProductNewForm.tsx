import {
    Input,
    Button,
    VStack,
    Field,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "../../components/Layout/MainLayout";
import { createProduct } from "../../services/Product/productService";

export default function NewProductForm() {
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [salePrice, setSalePrice] = useState<number>(0);
    const [purchasePrice, setPurchasePrice] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [barCode, setBarCode] = useState("");
    const [supplierId, setSupplierId] = useState<number>(0);

    const handleSave = async () => {
        try {
            await createProduct({
                description,
                salePrice,
                purchasePrice,
                amount,
                barCode,
                supplierId
            });
            navigate("/produtos");
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
        }
    };
    return (
        <VStack>
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
                onChange={(e) => setAmount(parseFloat(e.target.value))}
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
                //type="number"
                value={supplierId}
                onChange={(e) => setSupplierId(parseFloat(e.target.value))}
                border="0.8px solid gray"
            />
            </Field.Root>

            <Button
                border="1px solid black"
                borderRadius="10px"
                bgColor="green"
                _hover={{ bgColor: "green.500" }}
                onClick={handleSave}
                disabled={!description || !salePrice || !purchasePrice}
            >
                Salvar
            </Button>
        </VStack>
    );
}