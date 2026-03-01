import {
  Box,
  Heading,
  Button,
  HStack,
  Input,
  VStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SalesListPage() {
  const navigate = useNavigate();

  // Mock temporário
  const sales = [
    {
      id: "1",
      client: "João",
      date: "2025-02-20",
      total: 199,
    },
    {
      id: "2",
      client: "Maria",
      date: "2025-02-21",
      total: 350,
    },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Vendas</Heading>

      <HStack mb={4}>
        <Input type="date" />
        <Input type="date" />
        <Button>Filtrar</Button>
        <Button colorScheme="blue" onClick={() => navigate("/vendas/nova")}>
          + Nova Venda
        </Button>
      </HStack>

      <VStack align="stretch">
        {sales.map((sale) => (
          <Grid
            key={sale.id}
            templateColumns="1fr 1fr 1fr 1fr auto"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            alignItems="center"
          >
            <GridItem>{sale.id}</GridItem>
            <GridItem>{sale.client}</GridItem>
            <GridItem>{sale.date}</GridItem>
            <GridItem>R$ {sale.total}</GridItem>
            <GridItem>
              <Button
                size="sm"
                onClick={() => navigate(`/vendas/${sale.id}`)}
              >
                Ver
              </Button>
            </GridItem>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
}