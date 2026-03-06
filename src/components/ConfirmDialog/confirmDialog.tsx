import {
    Dialog,
    Button,
    Portal
} from "@chakra-ui/react";

interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

export function ConfirmDialog({
    open,
    onOpenChange,
    onConfirm,
    title,
    message
}: ConfirmDialogProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>

            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{title}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            {message}
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Button 
                                bgColor='blue.600'
                                onClick={() => onOpenChange(false)}>
                                Cancelar
                            </Button>
                            <Button 
                                bgColor="red.600" 
                                onClick={onConfirm}>
                                Confirmar
                            </Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>

        </Dialog.Root>
    );
}