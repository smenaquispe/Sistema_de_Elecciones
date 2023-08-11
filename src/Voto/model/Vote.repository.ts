import { VoteModel } from "./Vote.model"

export interface VoteRepository {
    selectAll(): Promise<VoteModel[]>
    select(dni: string): Promise<VoteModel | null>
    count(partido: string): Promise<number>
    add(dniVotante: number, partidoPolitico: string): Promise<void>
    delete(dni: string): Promise<void>
}