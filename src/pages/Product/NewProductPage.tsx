import {
  Box,
  Heading
} from "@chakra-ui/react";

import { MainLayout } from "../../components/Layout/MainLayout";
import NewProductForm from "../../components/Product/ProductNewForm";

export default function NewProductPage () {


    return(
    <MainLayout>
      <Box p={8} mb={10} bgColor="gray.100" h="75vh">
        <Heading mb={6} fontWeight="bold">Novo Produto</Heading>

        <NewProductForm />
      </Box>
    </MainLayout>        
    );
}