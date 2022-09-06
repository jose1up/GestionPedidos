import { Flex, VStack, Stack, Box } from "@chakra-ui/react";
import Headers from "./components/Headers";
import { useEffect } from "react";
import { ProductList } from "./components/ProductList";
import Scaner from "./components/scaner";
import { NewProduct } from "./components/counter";

function App() {
  return (
    <Stack display="contents">
      <Headers />
      {/* <Scaner /> */}
      <NewProduct/>
      {/* <ProductList /> */}
    </Stack>
  );
}

export default App;
