import { Category } from "../../db/models/Category";
import { allCategorys, findCategoryName } from "../../helpers/category"

// use this controller to extract either one or all categorys, depending if the petition has a name in it's body

export const getCategorys = async (req, res) => {
    try {
        const { name } = req.body;
        if (name) {
            let category = await findCategoryName(name);
            category
                ? res.send(category)
                : res.status(404).send({ message: "Category not found" });
        } else {
            let allCategory = await allCategorys();
            allCategorys.length
                ? res.send(allCategory)
                : res.status(404).send({ message: "Category table empty" });
        }
    } catch (error) {
        console.log(error);
    }
};

export const createNewCategory = async (req, res) => {
    try {
        let newName = req.body.name;
        console.log(newName)
        if (!newName) return res.send("name is required");
        try {
            await Category.create({ name: newName })
            return res.send("category correctly created")
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error);
    }
}