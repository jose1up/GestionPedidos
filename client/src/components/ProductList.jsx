import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  VStack,
  Stack,
  Box,
  Container,
  Skeleton,
} from "@chakra-ui/react";
import { getAllProduct } from "../redux/actions/products";
import ProductContainer from "./ProductContainer";
import { useState } from "react";

export const ProductList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProduct);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <Box>
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
};
