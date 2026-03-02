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
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";
import { Customer } from "../../types/types";

export default function CustomersListPage() {
  const navigate = useNavigate();

  const client = [
    { id: "1", name: "João", email: "joao@email.com" },
    { id: "2", name: "Maria", email: "maria@email.com" },
  ];

  const [customer, setCustomer] = useState<Customer[]> ([]);
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState (null);

  /*  const filteredClients = customer.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );*/

  return (
    <ChakraProvider value={defaultSystem}>
      <Layout showMenu={true} />
      <Box p={8} bgColor='lightGray' h='80vh'>
        <Heading mb={6} >Clientes</Heading>

        <HStack mb={4}>
          <Input 
            
            onChange={(e) => setSearch(e.target.value)}
            border='1px solid black'
            borderRadius='10px'
            placeholder="Buscar cliente..." />
          <Button
            bgColor="darkGreen"
            borderRadius="10px"
            border="1px solid black"
            _hover={{ bgColor: "green" }}
            onClick={() => navigate("/clientes/novo")}
          >
            + Novo Cliente
          </Button>
        </HStack>

        <VStack align="stretch">
          {customer.map((customer) => (
            <Grid
              key={customer.id}
              templateColumns="1fr 1fr auto"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              alignItems="center"
              border='1px solid black'
            >
              <GridItem>
                <Text fontWeight="bold">{customer.name}</Text>
                <Text fontSize="sm">{customer.email}</Text>
              </GridItem>

              <GridItem />

              <GridItem>
                <HStack>
                  <Button
                    bgColor="darkBlue"
                    borderRadius="10px"
                    border="1px solid black"
                    _hover={{ bgColor: "blue" }}
                    size="sm"
                    onClick={() => navigate(`/clientes/${customer.id}`)}
                  >
                    Editar
                  </Button>
                  <Button 
                    bgColor="darkRed"
                    borderRadius="10px"
                    border="1px solid black"
                    _hover={{ bgColor: "red" }}
                    size="sm" 
                    >
                    Excluir
                  </Button>
                </HStack>
              </GridItem>
            </Grid>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
