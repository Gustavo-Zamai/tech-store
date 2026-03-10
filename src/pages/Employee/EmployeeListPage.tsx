import {
  Box,
  Heading,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
  Spinner,
  Image
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useEmployees } from "../../hooks/Employee/useEmployees";
import { useState } from "react";
import { ConfirmDialog } from "../../components/ConfirmDialog/confirmDialog";
import { Pagination } from "../../components/Pagination/Pagination";

export default function CustomersListPage() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  // abrir modal para confirmação
  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  // chamado no botão de exclusão
  const confirmDelete = async () => {
    if (selectedId) {
      await removeEmployee(selectedId);
    }
    setOpen(false);
  };

  const {
    filteredEmployees,
    loading,
    search,
    setSearch,
    removeEmployee,
  } = useEmployees();

  return (
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100">
        <Heading mb={6} fontWeight="bold">Funcionários</Heading>

        <HStack mb={4}>
          <Input
            border="0.8px solid gray"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar funcionário..."
          />

          <Button
            bgColor='green'
            _hover={{ bgColor: 'green.500' }}
            border="1px solid black"
            onClick={() => navigate("/funcionarios/novo")}
          >
            + Novo Funcionário
          </Button>
        </HStack>

        {loading ? (
          <Spinner />
        ) : (
          <VStack align="stretch">
            {filteredEmployees.map((employee) => (
              <Grid
                key={employee.id}
                templateColumns="1fr auto"
                p={4}
                borderWidth="1px"
                borderRadius="md"
                alignItems="center"
                border="0.8px solid gray"
              >


                <GridItem>
                  <Text fontWeight="bold">{employee.name}</Text>
                  <Text fontSize="sm" fontWeight="bold">Cargo: {employee.role}</Text>
                  <Text fontSize="sm" fontWeight="bold">E-mail: {employee.email}</Text>
                </GridItem>

                <GridItem>
                  <HStack>
                    <Button
                      size="sm"
                      bgColor='blue'
                      _hover={{ bgColor: 'blue.500' }}
                      border="1px solid black"
                      onClick={() =>
                        navigate(`/funcionarios/${employee.id}`)
                      }
                    >
                      Editar
                    </Button>

                    <Button
                      size="sm"
                      bgColor='red'
                      _hover={{ bgColor: 'red.500' }}
                      border="1px solid black"
                      onClick={() =>
                        handleDeleteClick(employee.id)
                      }
                    >
                      Excluir
                    </Button>
                  </HStack>
                </GridItem>
              </Grid>
            ))}
          </VStack>
        )}
      </Box>
        
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={confirmDelete}
        title="Excluir Funcionário"
        message="Tem certeza que deseja excluir este funcionário?"
      />
    </MainLayout>
  );
}