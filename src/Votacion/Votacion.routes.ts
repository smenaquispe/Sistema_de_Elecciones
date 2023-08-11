import { Router, Request, Response } from "express";
import { join } from "path";
import { VotanteController } from "./controllers/Votante.controller";
import { CandidatoController } from "./controllers/Candidato.controllers";

const votanteController = new VotanteController;
const candidatoController = new CandidatoController

const router = Router();
const votacionPath = join(__dirname, 'views', 'votacion')

router.get('/candidato', (req: Request, res: Response) => {
    candidatoController
    .getAll()
    .then(resp => JSON.stringify(resp))
    .then(data => res.send(data))
})

router.get('/votacion', (req: Request, res: Response) => {
    candidatoController
    .getAll()
    .then(resp => {
        if(!(resp instanceof Error)) {
            res.render(votacionPath, {candidatos: resp})
        }
    })
    .catch(err => res.render(votacionPath, {mensaje: 'No se pudo recuperar datos'}))
})

export default router