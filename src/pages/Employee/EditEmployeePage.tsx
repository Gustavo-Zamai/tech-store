import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Spinner,
  HStack
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useEmployee } from "../../hooks/Employee/useEmployee";
import { useState, useEffect } from "react";

export default function EditEmployeePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { employee, loading, saveEmployee } = useEmployee(Number(id!));

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setRole(employee.role);
      setEmail(employee.email);
      setPassword(employee.password);
    }
  }, [employee]);


const handleUpdate = async () => {
  if (!employee) return;

  const updatedEmployee = {
    id: Number(id),
    name,
    role,
    email,
    password
  };

  await saveEmployee(updatedEmployee);

  navigate("/funcionarios");
};

const handleBack = () => {
    navigate("/funcionarios");
};

  if (loading) return <Spinner />;

  return (
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" minH="75vh">
        <Heading mb={6}>Editar Funcionário</Heading>

        <VStack gap={4}>

          <Input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            border="0.8px solid gray"
          />
          <Input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            border="0.8px solid gray"
          />

        <HStack 
            gap={8}
            mt={6}
        >
            <Button 
            variant="outline"
            _hover={{bgColor:"gray.200"}}
            border="1px solid black"
            onClick={handleBack}
            >
                Voltar
            </Button>
            
            <Button 
            bgColor="blue"
            _hover={{bgColor:"blue.500"}}
            border="1px solid black"
            onClick={handleUpdate}>
                Atualizar
            </Button>

        </HStack>
        </VStack>
      </Box>
    </MainLayout>
  );
}