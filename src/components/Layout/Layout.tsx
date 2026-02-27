import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Box } from '@chakra-ui/react';

export const Layout = ({ children, showMenu }: any) => {
    return (
        <>
        <Header showMenu={showMenu}/>
        <Box as="main">
            {children}
        </Box>
        <Footer />
        </>
    );
}