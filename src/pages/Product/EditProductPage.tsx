import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Spinner
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useProduct } from "../../hooks/Product/useProduct";
import { useState, useEffect } from "react";

export default function EditProductPage() {
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

    return(
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" minH="80vh">
        <Heading mb={6} fontWeight="bold">Editar Produto</Heading>

        <VStack gap={4}>
          <Input 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            //type="number"
            value={salePrice} 
            onChange={(e) => setSalePrice(Number(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            //type="number"
            value={purchasePrice} 
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            //type="number"
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            value={barCode} 
            onChange={(e) => setBarCode(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            //type="number"
            value={supplierId} 
            onChange={(e) => setSupplierId(Number(e.target.value))}
            border="0.8px solid gray"
          />

          <Button 
           bgColor="blue"
           _hover={{bgColor:"blue.500"}}
           border="1px solid black"
           onClick={handleUpdate}>
            Atualizar
          </Button>
        </VStack>
      </Box>
    </MainLayout>
    );
}