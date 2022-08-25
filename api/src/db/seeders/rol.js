import { Rol } from "../models/Rol";

export const dbReloadRol = async () => {
    await Rol.create(
        { name: "ADMIN" })
    await Rol.create(
        { name: "MOZO" })
    await Rol.create(
        { name: "CAJA" })
}