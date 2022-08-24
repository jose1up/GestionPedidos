import { Category } from "../models/Category"
import axios from 'axios'
import { Product } from "../models/Product";

export const dbReloadProducts = async () => {
    const cat = await Category.findAll();
    const prod = cat.map(async (e) => {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + e.name)
        await data.meals.map((meal) => Product.findOrCreate({
            where: {
                name: meal.strMeal,
                img: meal.strMealThumb,
                Category_id: e.id
            }
        }))
    })
}

