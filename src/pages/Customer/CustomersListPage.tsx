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
  Dialog,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useCustomers } from "../../hooks/Customer/useClients";
import { useState } from "react";

export default function CustomersListPage() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

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
        <Heading mb={6}>Clientes</Heading>

        <HStack mb={4}>
          <Input
            border="0.8px solid gray"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar cliente..."
          />

          <Button
            bgColor='green'
            _hover={{ bgColor: 'green.800' }}
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
                  <Text fontSize="sm">{customer.cpf}</Text>
                  <Text fontSize="sm">{customer.email}</Text>
                </GridItem>

                <GridItem>
                  <HStack>
                    <Button
                      size="sm"
                      bgColor='blue'
                      _hover={{ bgColor: 'blue.600' }}
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
                      _hover={{ bgColor: 'red.600' }}
                      border="1px solid black"
                      onClick={() =>
                        removeCustomer(customer.id)
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
      <Dialog open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogBackdrop />
        <DialogContent>

          <DialogHeader>
            <DialogTitle>Excluir cliente</DialogTitle>
          </DialogHeader>

          <DialogBody>
            Tem certeza que deseja excluir este cliente?
          </DialogBody>

          <DialogFooter>
            <Button onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button colorScheme="red" onClick={confirmDelete}>
              Excluir
            </Button>
          </DialogFooter>

        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}