import { ISession } from "connect-typeorm";
import { Column, DeleteDateColumn, Entity, Index, PrimaryColumn } from "typeorm";

@Entity('session')
export class Session implements ISession {

    @Index()
    @Column('bigint')
    expiredAt: number = Date.now()

    @PrimaryColumn('varchar' , {length  :255})
    id: string;

    @DeleteDateColumn()
    destroyedAt?: Date;

    @Column('text')
    json: string;
  
    
}