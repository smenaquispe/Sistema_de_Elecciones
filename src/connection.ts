import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from './Autenticacion_y_seguridad/models/User.entity';
import { VotanteEntity } from './Votacion/model/Votante.entity';
import { CandidatoEntity } from './Votacion/model/Candidato.entity';

// seuqlize
const sequelize = new Sequelize({
    database: 'sistema_elecciones',
    username: 'root',
    password: '',
    host:'localhost',
    dialect: 'mysql'
})

UserEntity.hasOne(CandidatoEntity)
CandidatoEntity.belongsTo(UserEntity)

sequelize.addModels([UserEntity, VotanteEntity, CandidatoEntity]);

export default sequelize