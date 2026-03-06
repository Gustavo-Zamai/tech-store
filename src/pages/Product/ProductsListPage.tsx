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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/Product/useProducts";
import { MainLayout } from "../../components/Layout/MainLayout";
import { ConfirmDialog } from "../../components/ConfirmDialog/confirmDialog";

export default function ProductsListPage() {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const navigate = useNavigate();

    //abrir modal para confirmação de exclusão
    const handleDeleteClick = (id: number) => {
        setSelectedId(id);
        setOpen(true);
    };

      const {
        filteredProducts,
        loading,
        search,
        setSearch,
        removeProduct,
      } = useProducts();

    //chamado para usar no botão de exclusão
    const confirmDelete = async () => {
        if (selectedId) {
            await removeProduct(selectedId);
        }
        setOpen(false);
    };

    return(
        <MainLayout>
                  <Box p={8} mb={10} bgColor="gray.100">
                    <Heading mb={6} fontWeight="bold">Produtos</Heading>
            
                    <HStack mb={4}>
                      <Input
                        border="0.8px solid gray"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar produto..."
                      />
            
                      <Button
                        bgColor='green'
                        _hover={{ bgColor: 'green.500' }}
                        border="1px solid black"
                        onClick={() => navigate("/produtos/novo")}
                      >
                        + Novo Produto
                      </Button>
                    </HStack>
            
                    {loading ? (
                      <Spinner />
                    ) : (
                      <VStack align="stretch">
                        {filteredProducts.map((product) => (
                          <Grid
                            key={product.id}
                            templateColumns="1fr auto"
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            alignItems="center"
                            border="0.8px solid gray"
                          >
            
                            <GridItem>
                              <Text fontWeight="bold">{product.description}</Text>
                              <Text fontSize="sm" fontWeight="bold">Preço de Venda R$: {product.salePrice.toFixed(2)}</Text>
                              <Text fontSize="sm" fontWeight="bold">Quantidade em Estoque: {product.amount}</Text>
                            </GridItem>
            
                            <GridItem>
                              <HStack>
                                <Button
                                  size="sm"
                                  bgColor='blue'
                                  _hover={{ bgColor: 'blue.500' }}
                                  border="1px solid black"
                                  onClick={() =>
                                    navigate(`/produtos/${product.id}`)
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
                                    handleDeleteClick(product.id)
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
                    title="Excluir produto"
                    message="Tem certeza que deseja excluir este produto ?"
                  />
        </MainLayout>
    );
}