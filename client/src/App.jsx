import { Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./components/productDetail";
import { getAllProduct } from "./redux/actions/products";

function App() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProduct);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <VStack>
      {allProducts &&
        allProducts.map((product) => {
          return (
            <ProductDetail
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              description={product.description}
            />
          );
        })}
    </VStack>
  );
}

export default App;
