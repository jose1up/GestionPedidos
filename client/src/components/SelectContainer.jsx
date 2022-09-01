import { Box, Container, Select } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterCategory, getAllProduct } from "../redux/actions/products";

export default function SelectContainer({ data, name }) {
  const dispatch = useDispatch();
  function handleOnclick(e) {
    if (!e.target.value) {
      dispatch(getAllProduct());
    } else {
      dispatch(filterCategory(e.target.value));
    }
  }

  return (
    <Select
      placeholder={`Filter for ${name}`}
      onClick={(e) => {
        handleOnclick(e);
      }}
      defaultValue=""
    >
      <option value="">All</option>
      {data &&
        data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
    </Select>
  );
}
