import { DataSource } from "typeorm"
import { User } from "../entities/user"
import { products } from "../entities/product"

export const AppDataSource = new DataSource({
 type: "postgres",
 host: "localhost",
 port: 5432,
 username: "tapioca",
 password: "123asd",
 database: "apisoftex",
 entities: [User,products ],
 synchronize: true,
})

