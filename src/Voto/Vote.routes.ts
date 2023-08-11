import { Router, Request, Response } from "express";
import { join } from "path";
import { VoteController } from "./controllers/Vote.controller";

const constoller = new VoteController;

const router = Router();
const viewPath = join(__dirname, 'views', 'user')

router.get('/', (req: Request, res: Response) => {
    constoller
        .getAll()
        .then(res => JSON.stringify(res))
        .then(data => res.render(viewPath, { data }))
})

router.get('/:id', (req: Request, res: Response) => {
    constoller
        .getByDni(req.params.id)
        .then(res => JSON.stringify(res))
        .then(data => res.render(viewPath, { data }))
})

export default router