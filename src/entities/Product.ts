import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("product")
class Product {
    @PrimaryColumn()
    readonly id_product: string;

    @Column()
    name_product: string;

    @Column()
    category:string;

    @Column()
    image:string;

    @Column()
    selected:boolean;

    @Column()
    price:Number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id_product){
            this.id_product = uuid();
        }
    }
}

export { Product }
