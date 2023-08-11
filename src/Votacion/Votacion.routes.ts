import { Router, Request, Response } from "express";
import { join } from "path";
import { VotanteController } from "./controllers/Votante.controller";
import { CandidatoController } from "./controllers/Candidato.controllers";
import { VoteController } from "../Voto/controllers/Vote.controller";

const votanteController = new VotanteController;
const candidatoController = new CandidatoController
const voteController = new VoteController

const router = Router();
const votacionPath = join(__dirname, 'views', 'votacion')

router.get('/candidato', (req: Request, res: Response) => {
    candidatoController
    .getAll()
    .then(resp => JSON.stringify(resp))
    .then(data => res.send(data))
})

router.get('/votacion', (req: Request, res: Response) => {
    const dni = req.session.dni;
    const nombre = req.session.nombre;

    candidatoController
    .getAll()
    .then(resp => {
        if(!(resp instanceof Error)) {
            res.render(votacionPath, {candidatos: resp, dni: dni, nombre: nombre})
        }
    })
    .catch(err => res.render(votacionPath, {mensaje: 'No se pudo recuperar datos'}))
})


router.post('/votacion', (req: Request, res: Response) => {
    const dni = req.session.dni;
    const partido = req.body.partido

    if(dni) {
        votanteController.getByDni(dni)
        .then(response => {
            if(!(response instanceof Error)) {
                console.log(response)
                if(response === 'EXIST') {
                    res.render(votacionPath, {mensaje: 'Usted ya realizo la votacion'})
                }
                else {
                votanteController.addVotante(dni)
                voteController.setVote(dni,partido)
                res.redirect('/resultados')
                }
            }
        })

    }
    
})

export default router