import {
  Box,
  Heading,
  Spinner
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/Layout/MainLayout";
import { useProduct } from "../../hooks/Product/useProduct";
import ProductForm from "../../components/Product/ProductEditForm";

export default function EditProductPage() {
    const { id } = useParams<{ id: string }>();
    //const navigate = useNavigate();

    const {  loading } = useProduct(Number(id!));

    if (loading) return <Spinner />;

    return(
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" minH="75vh">
        <Heading mb={6} fontWeight="bold">Editar Produto</Heading>
          <ProductForm />
       
      </Box>
    </MainLayout>
    );
}