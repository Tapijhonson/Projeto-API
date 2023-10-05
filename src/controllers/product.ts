import { Request, Response } from "express";
import { products } from "../entities/product";
import { AppDataSource } from "../database/data-source";


class ProductController {
    async createProduct (req: Request, res: Response) {
        const { title, price, color, size} = req.body

        try {
            const product = await AppDataSource.getRepository(products).save({
                title,
                price,
                color,
                size
            })
        }






    }
}