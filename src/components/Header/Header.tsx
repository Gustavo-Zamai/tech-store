import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { HeaderProps } from "../../utils/utils";

export const Header = ({ showMenu, menuContent }: HeaderProps) => {
  return (
    <Box as="header" bg='#0F172A' color='white' w='100%'>
      {/* Faixa Superior (Logo e Título) - Agora mais fina */}
      <Flex 
        align='center' 
        p='1rem 2rem' 
        justifyContent={showMenu ? 'space-between' : 'center'}
      >
        <Flex align='center'>
          <Image 
            src='https://placehold.co/100x100' 
            alt='Tech Store Logo' 
            w='50px' // Diminuímos o logo
            h='50px' 
            borderRadius='50%' 
            marginRight='1rem'
          />
          <Text as="h1" fontSize='2xl' fontWeight="bold">
            Tech Store
          </Text>
        </Flex>
        {/* Faixa do Menu com avatar, saudação e botão de logout */}
        <Flex align='center' gap={4}>
            {showMenu && <Image src='https://placehold.co/50x50' alt='User Avatar' w='40px' h='40px' borderRadius='50%' marginLeft='1rem'/>}
            {showMenu && <Text fontSize='sm'>Bem Vindo, Usuário</Text>} {/* TODO Substituir "User" pelo nome real do usuário logado */}
            {showMenu && <Button bg='#3B82F6' size="sm" _hover={{ bg: '#1D4ED8' }}>Sair</Button>}
        </Flex>    
      </Flex>

      {/* Faixa do Menu (Só aparece se showMenu for true) */}
   
    </Box>
  );
}
