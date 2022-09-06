import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, creatCategory } from "../redux/actions/category";
import { createProduct, getAllProduct } from "../redux/actions/products";
import backImg from "../assets/diseno-cubiertos.jpg"
import {
    FormControl,
    FormLabel,
    Button,
    Radio,
    RadioGroup,
    Stack,
    Box,
    Textarea,
    Input,
    Image
} from '@chakra-ui/react'

export const NewProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.allProduct);
    const categorys = useSelector((state) => state.category.allCategory);


    const [input, setinput] = useState({
        name: '',
        Category_id: '',
        Cat_name: '',
        price: '',
        img: '',
        description: ''
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
        console.log(input.Cat_name)
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        if (e.target.name === "productName") {
            if (e.target.value !== "none") {
                let prod = products.find((element) => element.name === e.target.value)
                setinput({
                    name: prod.name,
                    Category_id: prod.Category_id,
                    price: prod.price,
                    img: prod.img,
                    description: prod.description,
                    Cat_name: prod.Category.name
                })
            }
        } else {
            if (e.target.value !== "none") {
                let cat = categorys.find((element) => element.name === e.target.value)
                setinput({
                    ...input,
                    Category_id: cat.id,
                    Cat_name: cat.name
                });
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit ", e.target.value)
        newCat==="2"
            ?dispatch(creatCategory(input)) //dispatch to new category creation
            :modify==="1"
                ?dispatch(createProduct(input)) // dispatch to product creation
                :dispatch() // dispatch to product modification
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
                ? <Input placeholder="product" type={"Text"} name="name" onChange={(e) => handleInputChange(e)} />
                : <select name="productName" placeholder="Select product" onChange={(e) => handleSelectChange(e)}>
                    <option key={0} value="none"></option>
                    {products && products.map((prod) => {
                        return (
                            <option
                                key={prod.id}
                                value={prod.name}>{prod.name}
                            </option>)
                    })}
                </select>
            }
            <FormLabel >Category</FormLabel>
            {newCat === "2"
                ? <Input placeholder={input.Cat_name || 'New category'} type={"Text"} name="Cat_name" onChange={(e) => handleInputChange(e)} />
                : <select placeholder="Select one" name="Category_id" onChange={(e) => handleSelectChange(e)} value={input.Cat_name} >
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
            }
            <FormLabel >Description</FormLabel>
            <Textarea placeholder="Description" type={"text"} name="description" onChange={(e) => handleInputChange(e)} value={input.description || ''} />
            <FormLabel >Price</FormLabel>
            <Input placeholder="Price" type={"number"} name="price" onChange={(e) => handleInputChange(e)} value={input.price} />
            <FormLabel >Image</FormLabel>
            <Input placeholder="Image" type={"url"} name="img" onChange={(e) => handleInputChange(e)} value={input.img} />
            <Image src={input.img} objectFit="cover" alt={input.name} fallbackSrc={backImg} boxSize="10em" borderRadius="1em"/>
            <Button type="submit">Submit</Button>
        </FormControl >
    )
}
