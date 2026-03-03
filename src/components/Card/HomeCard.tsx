import { Flex } from "@chakra-ui/react";
import background from "../../assets/background.png";
import { MainLayout } from "../Layout/MainLayout";

export const HomeCard = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};
