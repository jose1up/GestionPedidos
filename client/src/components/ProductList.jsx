import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  VStack,
  Stack,
  Box,
  Container,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import { getAllProduct } from "../redux/actions/products";
import ProductContainer from "./ProductContainer";
import { useState } from "react";
import { addToCart } from "../redux/actions/Cart";
import { getAllCategorys } from "../redux/actions/Categorys";

export const ProductList = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const allProducts = useSelector((state) => state.product.allProduct);
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategorys());
  }, []);

  function handleOnclick(id) {
    toast({
      title: "Add to list.",
      description: "Added to your wish list.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    dispatch(addToCart(id));
  }
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
              handleOnclick={handleOnclick}
            />
          );
        })}
    </Box>
  );
};
