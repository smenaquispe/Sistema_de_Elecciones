import { VotanteModel } from "./Votante.model"

export interface VotanteRepository {
    selectAll(): Promise<VotanteModel[]>
    select(dni: number): Promise<VotanteModel | null>
    add(dni: number): void
    delete(dni: number): Promise<void>
}