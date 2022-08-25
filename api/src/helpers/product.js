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
    let findProduct = await Product.findAll({
      include: [Category],
      include: [OrderDetail_id],
      where: { name: props },
    });
    if (findProduct) {
      return findProduct;
    }
  } catch (error) {
    console.error(error);
  }
};

export const allProducto = async () => {
  try {
    const allProduct = await Product.findAll({
      include: [Category],
      includes: [OrderDetail],
    });
    return allProduct;
  } catch (error) {
    console.error(error);
  }
};
