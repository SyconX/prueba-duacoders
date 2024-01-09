import { Column, Entity, Generated, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Duacoder } from "./duacoder.entity";

@Entity({
    name: 'skills'
})
export class Skill {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @ManyToMany(
        () => Duacoder,
        duacoder => duacoder.skills,
    )
    duacoders: Duacoder[];
}
