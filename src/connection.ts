import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from './Autenticacion_y_seguridad/models/User.entity';

// seuqlize
const sequelize = new Sequelize({
    database: 'sistema_elecciones',
    username: 'root',
    password: '',
    host:'localhost',
    dialect: 'mysql'
})

sequelize.addModels([UserEntity]);

export default sequelize