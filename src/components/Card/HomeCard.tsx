import { Flex } from "@chakra-ui/react"
import { IMenu } from "../Menu/Menu"

export const HomeCard = () => {
    return (
        <Flex 
            w='100%' 
            bg='#0F172A' 
            color='white'
            >
            <IMenu text='Geral' value="teste"/>
            <IMenu text='Clientes' value="teste"/>
            <IMenu text='Produtos' value="teste"/>
            <IMenu text='Geral' value="teste"/>
            <IMenu text='Geral' value="teste"/>
            <IMenu text='Geral' value="teste"/> 
        </Flex>       
        /*<Flex
            as="section"
            w="100%"
            h="600px"    
            color="white"
            direction="column"
            align="center"
            justify="center"
            bgImage="url('https://placehold.co/1200x600')"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
        
        </Flex>*/
    );
}