
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity('products')
export class products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    color: string;

    @Column()
    size: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updater_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

}