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
import { useCustomer } from "../../hooks/Customer/useClient";
import { useState, useEffect } from "react";

export default function EditCustomerPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { customer, loading, saveCustomer } = useCustomer(Number(id!));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
      setCpf(customer.cpf);
      setPhone(customer.phone);
    }
  }, [customer]);


const handleUpdate = async () => {
  if (!customer) return;

  const updatedCustomer = {
    id: Number(id),
    name,
    email,
    cpf,
    phone
  };

  await saveCustomer(updatedCustomer);

  navigate("/clientes");
};

  if (loading) return <Spinner />;

  return (
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" minH="80vh">
        <Heading mb={6}>Editar Cliente</Heading>

        <VStack gap={4}>
          <Input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
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