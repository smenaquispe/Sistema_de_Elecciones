import { Router, Request, Response } from "express";
import { join } from "path";
import { UserController } from "./controllers/User.controller";


const constoller = new UserController;

const router = Router();
const viewPath = join(__dirname, 'views', 'user')
const loginPath = join(__dirname, 'views', 'login')
const dashboardPath = join(__dirname, 'views', 'dashboard')

/**
 * rutas de usuario
 */
router.get('/user', (req: Request, res: Response) => {
    constoller
        .getAll()
        .then(res => JSON.stringify(res))
        .then(data => res.render(viewPath, {data}))
})

router.get('/user/:id', (req: Request, res: Response) => {
    constoller
        .getByDni(req.params.id)
        .then(res => JSON.stringify(res))
        .then(data => res.render(viewPath, {data}))    
})

/**
 * rutas de login
 */
router.get('/login', (req: Request, res: Response) => {
    res.render(loginPath)
})

router.get('/dashboard', (req: Request, res: Response) => {
    res.render(dashboardPath)
})

router.post('/login', (req: Request, res: Response) => {
    const { dni, nombre } = req.body
    constoller
        .login(dni, nombre)
        .then(data => {
            if(data instanceof Error) {
                res.render(loginPath, {mensaje: data})
                return
            }

            else if(data.status == 'DENIED') {
                res.render(loginPath, {mensaje: data.message})
                return
            } 

            else {
                res.redirect('/dashboard')
                return
            }
        } );
})


export default router