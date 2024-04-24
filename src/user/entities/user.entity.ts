import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
     @PrimaryGeneratedColumn()
     id: number;
     @Column()
     firstName: string;
     @Column()
     lastName: string;
     @Column({ default: true })
     address: string;
     @Column({ default: true })
     phoneNumber: string;
     @Column({ default: true })
     email: string;
     @Column({ default: true })
     isActive: boolean;
  
}
