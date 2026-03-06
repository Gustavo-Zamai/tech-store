import {
  Box,
  Heading,
  Input,
  Button,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainLayout } from "../../components/Layout/MainLayout";
import { createProduct } from "../../services/Product/productService";

export default function NewProductPage () {
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [salePrice, setSalePrice] = useState<number>(0);
    const [purchasePrice, setPurchasePrice] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [barCode, setBarCode] = useState("");
    const [supplierId, setSupplierId] = useState<number>(0);

    const handleSave = async () => {
        try{
            await createProduct({
                description,
                salePrice,
                purchasePrice,
                amount,
                barCode,
                supplierId
            });
            navigate("/produtos");
        }catch (error) {
            console.error("Erro ao salvar produto:", error);
        }
    };
    return(
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" h="80vh">
        <Heading mb={6} fontWeight="bold">Novo Produto</Heading>

        <VStack>
          <Input
            placeholder="Produto" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            placeholder="Preço de Venda"
            //type="number"
            value={salePrice} 
            onChange={(e) => setSalePrice(parseFloat(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            placeholder="Preço de Compra"
            //type="number"
            value={purchasePrice} 
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            placeholder="Quantidade"
            //type="number"
            value={amount} 
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            border="0.8px solid gray"
          />
          <Input 
            placeholder="Código de Barras"
            value={barCode} 
            onChange={(e) => setBarCode(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            placeholder="Código do Fornecedor"
            //type="number"
            value={supplierId} 
            onChange={(e) => setSupplierId(parseFloat(e.target.value))}
            border="0.8px solid gray"
          />


          <Button
            border="1px solid black"
            borderRadius="10px"
            bgColor="green"
            _hover={{ bgColor: "green.500" }}
            onClick={handleSave}
            //disabled={!name || !email || !cpf }
          >
            Salvar
          </Button>
        </VStack>
      </Box>
    </MainLayout>        
    );
}