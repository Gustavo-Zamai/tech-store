import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { LoginCard } from "../../components/Card/LoginCard";

export const Login = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box bg='#0F172A' minHeight='100vh'>
                <Layout>
                    <LoginCard />
                </Layout>
            </Box>
        </ChakraProvider>
    );
}