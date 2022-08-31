import React from "react";
import { Box, Flex, HStack, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/Cart";

export default function ProductContainer({
  id,
  img,
  name,
  price,
  description,
  handleOnclick,
}) {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p="4"
      w="100%"
      alignItems="stretch"
      justifyContent="normal"
    >
      <Flex
        maxW="md"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></Box>

        <Box
          w={2 / 3}
          p={{
            base: 4,
            md: 4,
          }}
        >
          {name.length < 30 ? (
            <chakra.h1
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              {name}
            </chakra.h1>
          ) : (
            <chakra.h3
              fontSize="1xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              {name}
            </chakra.h3>
          )}

          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p>

          <HStack spacing={1} display="flex" alignItems="center" mt={2}>
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon
              color="gray.700"
              _dark={{
                color: "gray.300",
              }}
            />
            <StarIcon color="gray.500" />
            <StarIcon color="gray.500" />
          </HStack>

          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              fontWeight="bold"
              fontSize="lg"
            >
              ${price}
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={() => handleOnclick(id)}
            >
              Add to orders
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
