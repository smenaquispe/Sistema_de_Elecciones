import { UserEntity } from "../../Autenticacion_y_seguridad/models/User.entity";
import { CandidatoModel } from "./Candidato.model";
import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";

@Table({tableName: 'candidato'})
export class CandidatoEntity extends Model implements CandidatoModel {
    
    @PrimaryKey
    @ForeignKey(() => UserEntity)
    @Column
    dni: number;

    @Column
    partidoPolitico: string;

    @BelongsTo(() => UserEntity)
    user: UserEntity

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}