import { Flex } from "@chakra-ui/react";
import background from "../../assets/background-santo-brilho.png";

export const HomeCard = () => {
  return (
    <>
      <Flex
        as="section"
        w="100%"
        h="80vh"
        direction="column"
        bgImage={`url(${background})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
      />
    </>
  );
};
