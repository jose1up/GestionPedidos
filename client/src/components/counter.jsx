import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/actions/category";
import { createProduct, getAllProduct } from "../redux/actions/products";
import {
    FormControl,
    FormLabel,
    Button,
    Radio,
    RadioGroup,
    Stack,
    Box
} from '@chakra-ui/react'

export const NewProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.allProduct);
    const categorys = useSelector((state) => state.category.allCategory);


    const [input, setinput] = useState({
        name: '',
        Category_id: '',
        price: '',
        img: ''
    });

    const [modify, setModify] = useState("1");
    const [newCat, setNewCat] = useState("1");

    useEffect(() => {
        dispatch(getAllProduct());
        dispatch(getAllCategory());
    }, []);

    const handleInputChange = (e) => {
        e.preventDefault();
        setinput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        if (e.target.value !== "none") {
            let cat = categorys.find((element) => element.name === e.target.value)
            setinput({
                ...input,
                Category_id: cat.id
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(input));
        setinput("")
    }

    return (
        <FormControl alignItems='center' onSubmit={(e) => handleSubmit(e)}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <RadioGroup onChange={setModify} value={modify} >
                    <Stack direction="row">
                        <Radio value={"1"}>Create new product</Radio>
                        <Radio value={"2"}>Modify existing product</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <RadioGroup onChange={setNewCat} value={newCat} >
                    <Stack direction="row">
                        <Radio value={"1"}>Use existing category</Radio>
                        <Radio value={"2"}>Create new category</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <FormLabel >Product</FormLabel>
            {modify === "1"
                ? <input placeholder="product" type={"Text"} name="name" onChange={(e) => handleInputChange(e)} />
                : <select name="productName" placeholder="Select product" onChange={(e) => handleSelectChange(e)}>
                    <option key={0} value="Select Product"></option>
                    {products && products.map((prod) => {
                        return (
                            <option
                                key={prod.id}
                                value={prod.name}>{prod.name}
                            </option>)
                    })}
                </select>
            }
            {/* <input placeholder="product" type={"Text"} name="name" onChange={(e) => handleInputChange(e)} /> */}
            <FormLabel >Category</FormLabel>
            <select placeholder="Select one" name="Category_id" onChange={(e) => handleSelectChange(e)}>
                <option key={0} value="Select Category"></option>
                {categorys && categorys.map((cat) => {
                    return (
                        <option
                            key={cat.id}
                            value={cat.name}>{cat.name}
                        </option>
                    )
                })}
            </select>
            <FormLabel >Description</FormLabel>
            <input placeholder="Description" type={"text"} name="description" onChange={(e) => handleInputChange(e)} />
            <FormLabel >Price</FormLabel>
            <input placeholder="Price" type={"number"} name="price" onChange={(e) => handleInputChange(e)} />
            <FormLabel >Image</FormLabel>
            <input placeholder="Image" type={"url"} name="img" onChange={(e) => handleInputChange(e)} />
            <Button type="submit">Submit</Button>
        </FormControl >
    )
}
