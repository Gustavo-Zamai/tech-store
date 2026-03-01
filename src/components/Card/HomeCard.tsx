import { Flex } from "@chakra-ui/react";
import background from "../../assets/background.png";

export const HomeCard = () => {
  return (
    <>
      <Flex
        as="section"
        w="100%"
        h="80vh"
        direction="column"
        bgImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
      />
    </>
  );
};
