import { CandidatoEntity } from "../../Votacion/model/Candidato.entity";
import { UserModel } from "./User.model";
import { Table, Column, Model, PrimaryKey, HasOne } from "sequelize-typescript";

@Table({tableName: 'usuario'})
export class UserEntity extends Model implements UserModel {
    
    @PrimaryKey
    @Column
    dni: number;

    @Column
    nombre: string;

    @Column
    email: string;

    @Column
    rol: string

    @HasOne(() => CandidatoEntity)
    candidato: CandidatoEntity
}
