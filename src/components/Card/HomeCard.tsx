import { Flex } from "@chakra-ui/react"
import { IMenu } from "../Menu/Menu"

export const HomeCard = () => {
    return (
        <Flex 
            w='100%' 
            bg='#0F172A' 
            color='white'
            >
            <IMenu text='Geral'/>
            <IMenu text='Clientes'/>
            <IMenu text='Produtos'/>
            <IMenu text='Geral'/>
            <IMenu text='Geral'/>
            <IMenu text='Geral'/> 
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