import { VoteModel } from "./Vote.model";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: 'voto' })
export class VoteEntity extends Model implements VoteModel {

    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number;

    @Column
    dniVotante: number;

    @Column
    partidoPolitico: string;

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}
