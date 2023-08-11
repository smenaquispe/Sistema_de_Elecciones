import express, { Application, Request, Response } from 'express'
import { create } from 'express-handlebars'
import { join } from 'path'
import AuthRouter from './Autenticacion_y_seguridad/Autenticacion.routes'
import sequelize from './connection'
import session from 'express-session';
import cookieParser from 'cookie-parser';
import VotacionRouter from './Votacion/Votacion.routes'
import VoteRouter from './Voto/Vote.routes'


const port: number = 3000
const app: Application = express()

const hbs = create({
    extname: '.hbs',
    layoutsDir: join(__dirname, 'views', 'layouts')
})

declare module 'express-session' {
  interface Session {
    dni: number | null;
    nombre: string | null;
  }
}

// Configurar Express Session
app.use(cookieParser());
app.use(
  session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true,
  })
);

app.engine('.hbs', hbs.engine )
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, 'public')))
// routes
app.use(AuthRouter)
app.use(VotacionRouter)
app.use(VoteRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('main')
})

app.listen(port, function () {
    // database
    (async () => {
        try {
          await sequelize.sync();
          console.log('Conexión a la base de datos establecida y modelos sincronizados.');
        } catch (error) {
          console.error('Error al sincronizar modelos:', error);
        }
      })();
    console.log(`App is listening on port ${port} !`)
})