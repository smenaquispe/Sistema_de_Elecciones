import { Router, Request, Response } from "express";
import { join } from "path";
import { VoteController } from "./controllers/Vote.controller";
import { CandidatoController } from "../Votacion/controllers/Candidato.controllers";

const controller = new VoteController;
const candidatoController = new CandidatoController

const router = Router();
const viewPath = join(__dirname, 'views', 'resultados')

router.get('/resultados', (req: Request, res: Response) => {
    
    candidatoController.getAll()
    .then(data => {
        if (!(data instanceof Error)) {
            const partidos = data.map(p => p.partidoPolitico);
            const countsArray: number[] = [];

            partidos.forEach(p => {
                const counts = controller.getNumVotesByP(p); // Suponiendo que este método devuelve el número de votos por partido
                counts.then(c => {
                    if(!(c instanceof Error))
                        countsArray.push(c);
                })
                
            });

            // Ahora tienes un array con los counts correspondientes a cada partido

            // Luego puedes renderizar la vista con los dos arrays
            res.render(viewPath, { partidos, countsArray }); // Ajusta 'tu-vista' al nombre de tu plantilla Handlebars
        }
    })
    .catch(error => {
        // Maneja el error si es necesario
        console.error('Error al obtener los datos:', error);
    });


})


export default router