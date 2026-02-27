import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { HomeCard } from "../../components/Card/HomeCard";

export const Home = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box>
                <Layout showMenu={true} />
                <HomeCard />
            </Box>
        </ChakraProvider>
    );
}