import express, { Application, Request, Response } from 'express'
import { create } from 'express-handlebars'
import { join } from 'path'
import AuthRouter from './Autenticacion_y_seguridad/Autenticacion.routes'
import sequelize from './connection'

const port: number = 3000
const app: Application = express()

const hbs = create({
    extname: '.hbs',
    layoutsDir: join(__dirname, 'views', 'layouts')
})

app.engine('.hbs', hbs.engine )
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: false }));


// routes
app.use(AuthRouter)

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