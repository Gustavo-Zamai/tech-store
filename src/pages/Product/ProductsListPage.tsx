import {
  Box,
  Heading,
  Button,
  Input,
  SimpleGrid,
  HStack,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/Product/useProducts";
import { MainLayout } from "../../components/Layout/MainLayout";
import { ConfirmDialog } from "../../components/ConfirmDialog/confirmDialog";
import { ProductCard } from "../../components/Product/ProductCard";
import { Pagination } from "../../components/Pagination/Pagination";

export default function ProductsListPage() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const itemsPerPage = 9;

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // calcular produtos da pagina atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <MainLayout>
      <Box 
        p={8} 
        mb={10} 
        bgColor="gray.100"
        h="75vh"
        display="flex"
        flexDirection="column"
        >
        <Heading mb={6} fontWeight="bold">Produtos</Heading>

        <HStack mb={4}>
          <Input
            border="0.8px solid gray"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}

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
          <Box flex="1">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDeleteClick}
                />
              ))}
            </SimpleGrid>
          </Box>
          )}
          <Box mt="auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Box>
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