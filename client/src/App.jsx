import { Flex, VStack, Stack, Box } from "@chakra-ui/react";
import Headers from "./components/Headers";
import { useEffect } from "react";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <Stack display="contents" >
      <Headers />
      <ProductList />
    </Stack>
  );
}

export default App;
