import axios from 'axios'
import { Category } from '../models/Category'

/* load types from api and charge them in the DB */

export const dbReloadCategory = async () => {
    const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    // console.log(data.meals[0].strCategory)
    await data.meals.map((e) => Category.findOrCreate({
        where: { name: e.strCategory }
    })
    )
}
