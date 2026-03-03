import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';

export const MainLayout = ({ children, showMenu }: any) => {
    return (
    <Flex direction="column" minH="100vh">
      <Header showMenu={true} />
        <Box flex="1">
            {children}
        </Box>
      <Footer />
    </Flex>
    );
}