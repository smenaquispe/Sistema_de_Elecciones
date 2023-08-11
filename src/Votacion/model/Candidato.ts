import { CandidatoRepository } from "./Candidato.repository";
import { CandidatoEntity } from "./Candidato.entity";
import { UserEntity } from "../../Autenticacion_y_seguridad/models/User.entity";

// aqui con SQL (SET GET)
export class Candidato implements CandidatoRepository {
    
    async selectAll(): Promise<CandidatoEntity[]> {
        return await CandidatoEntity.findAll({
            include: [UserEntity]
        });
    }

    async select(dni: string): Promise<CandidatoEntity| null> {
        return CandidatoEntity.findOne({where:{dni: dni}});
    }

    async add(candidato: CandidatoEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(dni: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}