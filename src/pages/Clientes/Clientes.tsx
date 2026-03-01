import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { ClientesCard } from "../../components/Card/ClientesCard";
import { HomeCard } from "../../components/Card/HomeCard";

export const Clientes = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box>
                <Layout showMenu={true} />
                <ClientesCard />
            </Box>
        </ChakraProvider>
    );
}