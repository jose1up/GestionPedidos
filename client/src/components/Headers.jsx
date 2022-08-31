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
  Center,
  useBoolean,
  chakra,
} from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from "react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";

export default function Headers() {
  const countCart = useSelector((state) => state.product.cart.length);
  const [open, setOpen] = useBoolean();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg="gray.400"
      _dark={{
        bg: "gray.800",
      }}
      h="20"
      alignItems="center"
      justifyContent="space-between"
      borderEndEndRadius="lg"
    >
      <Menu>
        <MenuButton onClick={setOpen.toggle}>
          <IconButton icon={open ? <CloseIcon /> : <HamburgerIcon />} m="8" />
        </MenuButton>
        <MenuList onClick={setOpen.toggle}>
          <MenuItem alignItems="center">
            menu 1
          </MenuItem>
        </MenuList>
      </Menu>
      
      <IconButton
        aria-label="label"
        size="md"
        icon={
          <>
            <AiOutlineShoppingCart />
            {countCart > 0 ? (
              <chakra.span
                pos="absolute"
                top="-1px"
                right="-1px"
                p="4px"
                fontSize="sm"
                fontWeight="bold"
                lineHeight="none"
                color="red.100"
                transform="translate(50%,-50%)"
                bg="red.600"
                rounded="full"
              >
                {countCart}
              </chakra.span>
            ) : (
              <chakra.span
                pos="absolute"
                top="-1px"
                right="-1px"
                p="4px"
                fontSize="xs"
                fontWeight="bold"
                lineHeight="none"
                color="red.100"
                transform="translate(50%,-50%)"
              />
            )}
          </>
        }
      />
      <Searchbar />
      <Box m={3}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon color="while" />}
        <Switch colorScheme="telegram" size="lg" onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
}
