import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Skill } from "./skill.entity";

@Entity({
    name: 'duacoders'
})
export class Duacoder {

    @PrimaryColumn('varchar', {
        length: 255
    })
    nif: string;
    
    @Column('boolean', {
        default: true,
    })
    isTeamOnion: boolean;
    
    @Column('varchar', {
        length: 255
    })
    name: string;
    
    @Column('varchar', {
        length: 500
    })
    bio?: string;
    
    @Column('varchar', {
        length: 255
    })
    department: string;
    
    @Column('varchar', {
        length: 255
    })
    departmentPosition: string;
    
    @Column('varchar', {
        length: 255,
        nullable: true
    })
    photo?: string;
    
    @Column('datetime', {
        nullable: true
    })
    birthdate?: Date;
    
    @ManyToMany(
        () => Skill,
        skill => skill.name,
        { onDelete: 'CASCADE', cascade: true, eager: true }
    )
    @JoinTable({name: 'duacoder_skills'})  // Tabla relación Duacoder - Skill
    skills?: Skill[];
    
}
