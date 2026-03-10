import { Grid, GridItem, Text, Button, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/product";
import logo  from "../../assets/logo.png"

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

export function ProductCard({ product, onDelete }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <Grid
      templateColumns="1fr 2fr auto"
      p={3}
      borderWidth="1px"
      borderRadius="md"
      alignItems="center"
      border="0.8px solid gray"
    >

      <GridItem>
        <Image 
            src={logo} 
            alt={product.description} 
            boxSize="120px"
            borderRadius="md"
            />
      </GridItem>  
      
      <GridItem>
        <Text fontWeight="bold">{product.description}</Text>
        <Text fontSize="sm">
          Preço R$: {product.salePrice.toFixed(2)}
        </Text>
        <Text fontSize="sm">
          Estoque: {product.amount}
        </Text>
      </GridItem>

      <GridItem>
        <HStack>
          <Button
            size="sm"
            bgColor="blue"
            _hover={{ bgColor: "blue.500" }}
            border="1px solid black"
            onClick={() => navigate(`/produtos/${product.id}`)}
          >
            Editar
          </Button>

          <Button
            size="sm"
            bgColor="red"
            _hover={{ bgColor: "red.500" }}
            border="1px solid black"
            onClick={() => onDelete(product.id)}
          >
            Excluir
          </Button>
        </HStack>
      </GridItem>
    </Grid>
  );
}