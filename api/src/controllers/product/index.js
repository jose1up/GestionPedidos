import { Category } from "../../db/models/Category";
import { OrderDetail } from "../../db/models/OrderDetail";
import { Product } from "../../db/models/Product";
import {
  allProducts,
  createProduct,
  findProductName,
} from "../../helpers/product";

export const createNewProduct = async (req, res) => {
  try {
    const { name, price, img, description, Category_id, OrderDetail_id } =
      req.body;

    if (name && price && description) {
      let newProduct = {
        name,
        price,
        img,
        description,
        Category_id: parseInt(Category_id),
      };
      await createProduct(newProduct);

      res.status(201).send({ message: "Product created successfully" });
    } else {
      res.status(404).send({ message: "Product not Create" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let product = await findProductName(name);
      product
        ? res.send(product)
        : res.status(404).send({ message: "Product not found" });
    } else {
      let allProduct = await allProducts();
      allProduct.length
        ? res.send(allProduct)
        : res.status(404).send({ message: "empty tables products" });
    }
  } catch (error) {
    console.error(error);
  }
};
