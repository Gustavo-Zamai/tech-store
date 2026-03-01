import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  defaultSystem,
  ChakraProvider
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";

export default function EditClientPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");

  useEffect(() => {
    // Buscar pelo ID da API
    setName("Cliente Exemplo");
    setEmail("cliente@email.com");
    setCpfCnpj("38884953855")
  }, [id]);

  const handleUpdate = () => {
    console.log({ id, name, email });
    navigate("/clientes");
  };

  return (
    <ChakraProvider value={defaultSystem}>
        <Layout showMenu={true} />
        <Box p={8} bgColor='lightGray' h='80vh'>
        <Heading mb={6}>Editar Cliente</Heading>

        <VStack>
            <Input
            border='1px solid black'
            borderRadius='10px'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <Input
            border='1px solid black'
            borderRadius='10px'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            border='1px solid black'
            borderRadius='10px'
            value={cpfCnpj}
            onChange={(e) => setName(e.target.value)}
            />

            <Button 
            bgColor='darkBlue'
            border='1px solid black'
            borderRadius='10px'
            _hover={{bgColor:'blue'}}
            onClick={handleUpdate}>
            Atualizar
            </Button>
        </VStack>
        </Box>
    </ChakraProvider>
  );
}