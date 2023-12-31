import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

export class Base {


    @PrimaryGeneratedColumn('uuid')
    id: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}