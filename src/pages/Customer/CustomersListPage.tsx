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
  Spinner
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useCustomers } from "../../hooks/Customer/useClients";
import { useState } from "react";
import { ConfirmDialog } from "../../components/ConfirmDialog/confirmDialog";

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
      await removeCustomer(selectedId);
    }
    setOpen(false);
  };

  const {
    filteredCustomers,
    loading,
    search,
    setSearch,
    removeCustomer,
  } = useCustomers();

  return (
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100">
        <Heading mb={6} fontWeight="bold">Clientes</Heading>

        <HStack mb={4}>
          <Input
            border="0.8px solid gray"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar cliente..."
          />

          <Button
            bgColor='green'
            _hover={{ bgColor: 'green.500' }}
            border="1px solid black"
            onClick={() => navigate("/clientes/novo")}
          >
            + Novo Cliente
          </Button>
        </HStack>

        {loading ? (
          <Spinner />
        ) : (
          <VStack align="stretch">
            {filteredCustomers.map((customer) => (
              <Grid
                key={customer.id}
                templateColumns="1fr auto"
                p={4}
                borderWidth="1px"
                borderRadius="md"
                alignItems="center"
                border="0.8px solid gray"
              >

                <GridItem>
                  <Text fontWeight="bold">{customer.name}</Text>
                  <Text fontSize="sm" fontWeight="bold">CPF: {customer.cpf}</Text>
                  <Text fontSize="sm" fontWeight="bold">E-mail: {customer.email}</Text>
                </GridItem>

                <GridItem>
                  <HStack>
                    <Button
                      size="sm"
                      bgColor='blue'
                      _hover={{ bgColor: 'blue.500' }}
                      border="1px solid black"
                      onClick={() =>
                        navigate(`/clientes/${customer.id}`)
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
                        handleDeleteClick(customer.id)
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
        title="Excluir cliente"
        message="Tem certeza que deseja excluir este cliente?"
      />
    </MainLayout>
  );
}