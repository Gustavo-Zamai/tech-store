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

export default function NewCustomerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    navigate("/clientes");
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
}
