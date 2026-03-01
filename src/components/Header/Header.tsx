import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { HeaderProps } from "../../utils/utils";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";
import { useNavigate } from "react-router-dom";
import { IMenu } from "../Menu/Menu"

export const Header = ({ showMenu }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoutClick = (route: string) => {
    navigate(route);
  };

    const handleMenuClick = (route: string) => {
    navigate(route);
  };

    // Adicionar mais menus conforme necessário
  const menus = [
    { label: "Geral", route: "/" },
    { label: "Clientes", route: "/clientes" },
    { label: "Produtos", route: "/produtos" },
    { label: "Fornecedores", route: "/fornecedores"},
    { label: "Estoque", route: "/estoque"},
    { label: "Categorias", route: "/categorias"},
    { label: "Vendas", route: "/vendas"},
    { label: "Relatórios", route: "/relatorios"}
  ];

  return (
    <Box as="header" bg="#0F172A" color="white" w="100%">
      {/* Faixa Superior (Logo e Título) - Agora mais fina */}
      <Flex
        align="center"
        p="1rem 2rem"
        justifyContent={showMenu ? "space-between" : "center"}
      >
        <Flex align="center">
          <Image
            src={logo}
            alt="Tech Store Logo"
            w="100px" // Diminuímos o logo
            h="100px"
            borderRadius="50%"
            marginRight="1rem"
          />
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Tech Store
          </Text>
        </Flex>
        {/* Faixa do Menu com avatar, saudação e botão de logout */}
        <Flex align="center" gap={4}>
          {showMenu && (
            <Image
              src={avatar}
              alt="User Avatar"
              w="40px"
              h="40px"
              borderRadius="50%"
              marginLeft="1rem"
            />
          )}
          {showMenu && <Text fontSize="sm">Bem Vindo, Usuário</Text>}{" "}
          {/* TODO Substituir "User" pelo nome real do usuário logado */}
          {showMenu && (
            <Button
              bg="#3B82F6"
              size="sm"
              _hover={{ bg: "#1D4ED8" }}
              onClick={() => handleLogoutClick("/")}
            >
              Sair
            </Button>
          )}
        </Flex>
      </Flex>

      {/* Faixa do Menu (Só aparece se showMenu for true) */}
      {showMenu && (
              <Flex w="100%" bg="#0F172A" color="white">
        {menus.map((item) => (
          <IMenu
            key={item.label}
            text={item.label}
            onClick={() => handleMenuClick(item.route)}
          />
        ))}
      </Flex>
      )}
    </Box>
  );
};
