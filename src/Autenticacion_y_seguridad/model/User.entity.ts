import { UserModel } from "./User.model";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({tableName: 'usuarios'})
export class UserEntity extends Model implements UserModel {
    
    @PrimaryKey
    @Column({autoIncrement: true})
    id: number;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}
