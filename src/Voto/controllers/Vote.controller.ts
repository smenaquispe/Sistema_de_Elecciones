import { Vote } from "../model/Vote";
import { VoteModel } from "../model/Vote.model";
import { VoteService } from "../service/Vote.service";

export class VoteController {

    private service: VoteService;
    private vote: Vote;

    constructor() {
        this.vote = new Vote
        this.service = new VoteService(this.vote)
    }

    // aqui implementamos ruta
    getAll() {
        return this.service.getAllVotes()
    }

    getNumVotesByP(partido: string) {
        return this.service.getVotesByCandidate(partido)
    }

    setVote(dniVotante: number, partidoPolitico: string) {
        return this.service.setVoto(dniVotante, partidoPolitico)
    }
}