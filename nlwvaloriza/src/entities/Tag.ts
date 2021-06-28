import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid} from "uuid";

@Entity("tags")
class Tag{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_it: Date;

    @CreateDateColumn()
    updated_it: Date;

    constructor() {
        if (!this.id){
            this.id = uuid();
        }
    }
}

export { Tag }