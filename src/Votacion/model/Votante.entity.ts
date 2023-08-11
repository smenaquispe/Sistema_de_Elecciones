import { VotanteModel } from "./Votante.model";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({tableName: 'votante'})
export class VotanteEntity extends Model implements VotanteModel {
    
    @PrimaryKey
    @Column({autoIncrement: true})
    dni: number;

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}
