import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";

export default function NewCustomerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    console.log({ name, email });
    navigate("/clientes");
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Layout showMenu={true} />
      <Box p={8} bgColor="lightGray" h="80vh">
        <Heading mb={6}>Novo Cliente</Heading>

        <VStack>
          <Input
            placeholder="Nome"
            border="1px solid black"
            borderRadius="10px"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            border="1px solid black"
            borderRadius="10px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            border="1px solid black"
            borderRadius="10px"
            bgColor="darkGreen"
            _hover={{ bgColor: "green" }}
            onClick={handleSave}
          >
            Salvar
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
