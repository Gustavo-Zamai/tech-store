interface InputProps {
    id: string
    type: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

interface ButtonProps {
    text: string
    event: () => void
}

interface HeaderProps {
  showMenu?: boolean; // Prop para decidir se mostra o menu ou não
  menuContent?: React.ReactNode; // Slot para o conteúdo do menu
}

interface MenuProps {
    text: string
    onClick: () => void
}


export type { InputProps, ButtonProps, HeaderProps, MenuProps }