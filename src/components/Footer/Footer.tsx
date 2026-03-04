import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box bg='#0F172A' 
        minH='45px' 
        h='auto'
        w='100%' 
        color='white' 
        fontSize='sm' 
        fontFamily='Arial sans-serif' 
        position='fixed' bottom={0} left={0} 
        textAlign='center'
        padding='0.75rem 0px'>
            <Text>&copy; {new Date().getFullYear()} Tech Store. All rights reserved.</Text>
            <Text><p style={{flexWrap:'wrap'}}>Desenvolvido por <strong>Gustavo Simão Zamai</strong></p></Text>
        </Box>
    )
}