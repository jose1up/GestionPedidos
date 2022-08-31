import {
  InputGroup,
  InputLeftElement,
  Input,
  Tooltip,
  Center,
  Box,
  Container,
  color,
} from "@chakra-ui/react";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { findProduct } from "../redux/actions/products";
import { useDispatch, useSelector } from "react-redux";

export default function Searchbar() {
  const dispatch = useDispatch();

  function handleOnChange(e) {
    e.preventDefault();
    dispatch(findProduct(e.target.value));
  }

  return (
    <Container>
      <Tooltip
        hasArrow
        label="Search places"
        placement="left-start"
        bg="gray.300"
        color="black"
        
      >
        <InputGroup>
          <InputLeftElement>
            <Search2Icon />
          </InputLeftElement>
          <Input
            borderColor="gray.600"
            borderWidth="2.5px"
            type="tel"
            placeholder="Search..."
            onChange={(e) => handleOnChange(e)}
          />
        </InputGroup>
      </Tooltip>
    </Container>
  );
}
