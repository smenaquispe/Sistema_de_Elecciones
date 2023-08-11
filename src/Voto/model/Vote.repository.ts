import { VoteModel } from "./Vote.model"

export interface VoteRepository {
    selectAll(): Promise<VoteModel[]>
    select(dni: string): Promise<VoteModel | null>
    count(partido: string): Promise<number>
    add(vote: VoteModel): Promise<void>
    delete(dni: string): Promise<void>
}

// aqui solo FRIMA SQL