import { UserEntity } from "../../Autenticacion_y_seguridad/models/User.entity";
import { CandidatoModel } from "./Candidato.model";
import { Table, Column, Model, PrimaryKey, ForeignKey } from "sequelize-typescript";

@Table({tableName: 'candidato'})
export class CandidatoEntity extends Model implements CandidatoModel {
    
    @PrimaryKey
    @Column
    dni: number;

    @Column
    partidoPolitico: string;

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}