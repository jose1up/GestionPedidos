import { Flex, VStack, Stack, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductContainer from "./components/ProductContainer";
import { getAllProduct } from "./redux/actions/products";

function App() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProduct);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <Box w="-webkit-max-content">
      {allProducts &&
        allProducts.map((product) => {
          return (
            <ProductContainer
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              description={product.description}
            />
          );
        })}
    </Box>
  );
}

export default App;
