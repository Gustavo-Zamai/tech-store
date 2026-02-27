import { Button, 
        Box, 
        Center } 
    from "@chakra-ui/react";
import { ButtonProps } from "../../utils/utils";

export const IButton = (props: ButtonProps) => {
    return (
        <Box>
            <Center h='100px' w='100%' color='blue' fontSize='2xl' marginTop='1rem'>
                <Button
                bg='#3B82F6' 
                color='#FFFFFF' 
                w='40%' 
                h='3.5rem'
                borderRadius='25px'
                _hover={{bg: '#1D4ED8', color: '#FFFFFF', shadow: 'md'}}
                onClick={props.event}
                >{props.text}</Button>
            </Center>
        </Box>
    );
}