import { Button, Menu } from "@chakra-ui/react";
import { MenuProps } from "../../utils/utils";

export const IMenu = ({ text, onClick }: MenuProps) => {
  return (
    <div
      style={{
        backgroundColor: "#1E293B",
        padding: "0.5rem 2rem",
        borderTop: "1px solid #334155",
        width: "100%",
      }}
    >
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="solid"
            w='80%'
            borderRadius='10px'
            onClick={onClick}
            _hover={{bg:'#334155'}}
          >
            {text}
          </Button>
        </Menu.Trigger>
      </Menu.Root>
    </div>
  );
};