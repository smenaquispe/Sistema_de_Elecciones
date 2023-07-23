namespace Dominio.AutenticacionYseguridad.entities {
    export class Usuario {
      protected nombre: string;
      protected email: string;
      protected rol: string;
      protected dni: string;
  
      /**
       * Default constructor
       */
      protected constructor() {
        // ...
      }
  
      // Setter methods
      // Implement setter methods here
  
      // Getter methods
      // Implement getter methods here
    }

}

const Usuario = Dominio.AutenticacionYseguridad.entities.Usuario;