import { Op } from "sequelize";
import { Category } from "../db/models/Category";
import { OrderDetail } from "../db/models/OrderDetail";
import { Product } from "../db/models/Product";

export const createProduct = async (props) => {
  try {
    await Product.create(props);
  } catch (error) {
    console.error(error);
  }
};

export const findProductName = async (props) => {
  try {
    console.log(props);
    let findProduct = await Product.findAll({
      include: [Category, OrderDetail],
      where: { name: { [Op.iLike]: `%${props}%` } },
    });
    if (findProduct) {
      return findProduct;
    }
  } catch (error) {
    console.error(error);
  }
};

export const allProducts = async () => {
  try {
    const allProduct = await Product.findAll({
      include: [Category, OrderDetail],
    });
    return allProduct;
  } catch (error) {
    console.error(error);
  }
};
