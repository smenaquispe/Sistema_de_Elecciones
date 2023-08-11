import { CandidatoModel } from "./Candidato.model"

export interface CandidatoRepository {
    selectAll(): Promise<CandidatoModel[]>
    select(dni: string): Promise<CandidatoModel| null>
    add(user: CandidatoModel): Promise<void>
    delete(dni: string): Promise<void>
}
