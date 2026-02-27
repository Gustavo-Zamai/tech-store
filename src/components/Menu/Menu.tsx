import { Button, Menu, Portal } from "@chakra-ui/react"
import { MenuProps } from "../../utils/utils"


export const IMenu = (props: MenuProps) => {
  return (
    <div 
        style={{ backgroundColor: '#1E293B', padding: '0.5rem 2rem', borderTop: '1px solid #334155' }}
    >
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="solid">{props.text}</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Styles</Menu.ItemGroupLabel>
              <Menu.Item value="bold">Bold</Menu.Item>
              <Menu.Item value="underline">Underline</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Align</Menu.ItemGroupLabel>
              <Menu.Item value="left">Left</Menu.Item>
              <Menu.Item value="middle">Middle</Menu.Item>
              <Menu.Item value="right">Right</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </div>

  )
}
