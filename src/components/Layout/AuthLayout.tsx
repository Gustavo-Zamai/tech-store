import { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh">
      <Header showMenu={false} />
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}