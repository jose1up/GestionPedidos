import { Category } from "../db/models/Category";

export const findCategoryName = async (props) => {
    try {
        let findCategory = await Category.findOne({
            where: { name: props },
        });
        if (findCategory) {
            return findCategory;
        }
    } catch (error) {
        console.error(error);
    }
}

export const allCategorys = async (props) => {
    try {
        const categorys = await Category.findAll();
        return categorys;
    } catch (error) {
        console.error(error);
    }
}
