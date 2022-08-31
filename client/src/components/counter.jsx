import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/actions/category";
import { createProduct, getAllProduct } from "../redux/actions/products";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    ButtonGroup,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'

export const NewProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.allProduct);
    const categorys = useSelector((state) => state.category.allCategorys);

    const [input, setinput] = useState({
        name: '',
        Category_id: '',
        price: '',
        img: ''
    });

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
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>New Product</Tab>
                <Tab>New Category</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <FormControl onSubmit={(e) => handleSubmit(e)}>
                        <FormLabel >Product</FormLabel>
                        <input placeholder="product" type={"Text"} name="name" onChange={(e) => handleInputChange(e)} />
                        <FormLabel >Category</FormLabel>
                        <select placeholder="Select one" name="Category_id" onChange={(e) => handleSelectChange(e)}>
                            <option key={0} value="none"></option>
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
                    </FormControl>
                </TabPanel>
                <TabPanel>
                    <h2>Not available yet</h2>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
