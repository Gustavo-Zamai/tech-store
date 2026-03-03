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
import { useCustomer } from "../../hooks/useClient";
import { useState, useEffect } from "react";

export default function EditCustomerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { customer, loading, saveCustomer } = useCustomer(Number(id!));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
      setCpf(customer.cpf);
    }
  }, [customer]);

  const handleUpdate = async () => {
    await saveCustomer();

    navigate("/clientes");
  };

  if (loading) return <Spinner />;

  return (
    <MainLayout>
      <Box p={8} bgColor="gray.100" minH="80vh">
        <Heading mb={6}>Editar Cliente</Heading>

        <VStack gap={4}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input value={cpf} onChange={(e) => setCpf(e.target.value)} />

          <Button colorScheme="blue" onClick={handleUpdate}>
            Atualizar
          </Button>
        </VStack>
      </Box>
    </MainLayout>
  );
}