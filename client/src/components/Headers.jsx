import {
  Box,
  Flex,
  Switch,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Headers() {
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg="gray.400"
      _dark={{
        bg: "gray.800",
      }}
      h="20"
      align="center"
      direction="row-reverse"
      borderEndEndRadius="lg"
    >
      <Menu>
        <MenuButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IconButton icon={open ? <CloseIcon /> : <HamburgerIcon />} m="8" />
        </MenuButton>
        <MenuList
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuItem>menu 1</MenuItem>
        </MenuList>
      </Menu>
      <Box m={2}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon color="while" />}
        <Switch colorScheme="telegram" size="lg" onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
}
