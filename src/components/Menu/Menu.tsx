import { Button } from "@chakra-ui/react";
import { MenuProps } from "../../types/utils";

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
          <Button
            variant="solid"
            w='80%'
            borderRadius='10px'
            onClick={onClick}
            _hover={{bg:'#000000'}}
          >
            {text}
          </Button>
    </div>
  );
};