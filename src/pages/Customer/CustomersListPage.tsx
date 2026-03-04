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

export default function CustomersListPage() {
  const navigate = useNavigate();
  const {
    filteredCustomers,
    loading,
    search,
    setSearch,
    removeCustomer,
  } = useCustomers();

  return (
    <MainLayout> 
      <Box p={8} bgColor="gray.300">
        <Heading mb={6}>Clientes</Heading>

        <HStack mb={4}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar cliente..."
          />

          <Button
            colorScheme="green"
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
              >
                <GridItem>
                  <Text fontWeight="bold">{customer.name}</Text>
                  <Text fontSize="sm">{customer.email}</Text>
                  <Text fontSize="sm">{customer.cpf}</Text>
                </GridItem>

                <GridItem>
                  <HStack>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() =>
                        navigate(`/clientes/${customer.id}`)
                      }
                    >
                      Editar
                    </Button>

                    <Button
                      size="sm"
                      colorScheme="red"
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
    </MainLayout>
  );
}