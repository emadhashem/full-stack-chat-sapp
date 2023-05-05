import { BeforeInsert, Column, Entity } from "typeorm";
import { Base } from "./Base.entity";
import { Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt';
const SALT = 12

@Entity('user')
export class User extends Base {

    @Column({
        unique: true
    })
    email: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    @Exclude()
    password: string

    @BeforeInsert()
    async hashPass() {
        this.password = await bcrypt.hash(this.password, SALT)
    }
}
