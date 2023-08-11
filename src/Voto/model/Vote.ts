import { VoteRepository } from "./Vote.repository";
import { VoteEntity } from "./Vote.entity";
import { VoteModel } from "./Vote.model";

// aqui con SQL (SET GET)
export class Vote implements VoteRepository {

    async selectAll(): Promise<VoteEntity[]> {
        return await VoteEntity.findAll();
    }

    async select(dni: string): Promise<VoteEntity | null> {
        return VoteEntity.findOne({ where: { id: dni } });
    }

    async count(partido: string): Promise<number> {
        return VoteEntity.count({
            where: {
                partidoPolitico: partido
            }
        });
    }

    async add(dniVotante: number, partidoPolitico: string): Promise<void> {
        try {
            await VoteEntity.create({dniVotante, partidoPolitico});
        } catch (error) {
            console.error('Error al agregar el voto:', error);
            throw error;
        }
    }

    async delete(dni: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}