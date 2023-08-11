import { VotanteRepository } from "./Votante.repository";
import { VotanteEntity } from "./Votante.entity";

// aqui con SQL (SET GET)
export class Votante implements VotanteRepository {
    
    selectAll(): Promise<VotanteEntity[]> {
        return VotanteEntity.findAll();
    }

    select(dni: number): Promise<VotanteEntity | null> {
        return VotanteEntity.findOne({where:{dni}});
    }

    add(dni: number): void {
        VotanteEntity.create({dni: dni})
    }

    async delete(dni: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}