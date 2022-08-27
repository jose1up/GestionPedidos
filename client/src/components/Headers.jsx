import { Box, Flex, Stack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Headers() {
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
      <Box m={2}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon color="while" />}
        <Switch colorScheme="telegram" size="lg" onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
}
