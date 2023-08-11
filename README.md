# SISTEMA DE ELECCIONES

## Integrantes:

- Sergio Sebastian Santos Mena Quispe
- Diego Francisco Apaza Andaluz
- Jesus Bruno Chancayauri Soncco
- Christian Pardavé Espinoza
- Saul Arturo Condori Machaca
- Paolo Daniel Benavente Aguirre
  

# Propósito del Proyecto: Sistema de Elecciones Virtuales

El objetivo del proyecto es desarrollar una plataforma de votación en línea que permita a los usuarios participar en elecciones de manera virtual. El sistema proporcionará una interfaz intuitiva y segura para emitir votos, contabilizar los resultados y gestionar el proceso electoral en su conjunto.

## Características y Componentes:

### Interfaz gráfica de usuario (UI):

- Diseñar una interfaz de usuario amigable y accesible para que los votantes puedan emitir sus votos de manera fácil y rápida.
- Utilizar tecnologías web o móviles para crear una experiencia de usuario moderna y receptiva.

### Conexión a Base de datos:

- Seleccionar una base de datos (como MySQL o MongoDB) para almacenar los datos de los votantes, candidatos y resultados electorales.
- Garantizar la seguridad y privacidad de los datos almacenados.

### Uso de patrones/Estilos de arquitectura:

- Implementar una arquitectura escalable y modular que permita agregar nuevas funcionalidades en el futuro.

### Uso de prácticas de desarrollo de software:

- Estilos de codificación: Mantener un código limpio y legible mediante estándares de codificación coherentes.
- Codificación Limpia (Clean Code): Escribir código claro y comprensible, siguiendo prácticas como nombres significativos y funciones bien estructuradas.
- Principios SOLID: Diseñar el sistema de manera modular, respetando los principios SOLID para facilitar la extensibilidad y la adaptabilidad.
- Domain-driven Design (DDD): Aplicar conceptos de DDD para modelar las entidades del sistema y las reglas de negocio involucradas en el proceso electoral.


### Funcionalidades: Diagrama de Casos de Uso y Prototipo (o GUI). <br>
-Vista de Usuario: Diagrama de Casos de Uso UML <br>
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/2f381db8-3ced-4081-8578-a00fb0b36a8b)


### Modelo de Dominio: Diagrama de Clases y Módulos. <br>
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/84b6fb74-cf7f-422d-946a-f6660c30d76a)


### Arquitectura y Patrones: Diagrama de Componentes o Paquetes. <br>

![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/115afbbd-89f0-414d-8907-f669402b4afb)
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/81613b18-5861-45e5-9cae-e543014605c2)


Prácticas de codificación limpia aplicadas: Descripción y Fragmento de Código (evidencia). <br>

![Imagen de WhatsApp 2023-08-10 a las 22 58 39](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/c7bb82f4-91ae-449b-91ff-24272645d07d)

-Se encontraron code smells cuya severidad maxima es Minor , paquetes y variables sin usar.<br>
![Imagen de WhatsApp 2023-08-10 a las 22 59 46](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/93f9de4e-bd7c-463c-a118-1a21dabe183a) 
![Imagen de WhatsApp 2023-08-10 a las 23 00 13](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/93efde8c-e4e3-4191-9a3a-e89c84b904a0)



Estilos de Programación aplicados: Descripción y Fragmento de Código (evidencia) <br>
### Principios SOLID aplicados: Descripción y Fragmento de Código (evidencia) <br>

### Principio O: <br>
#### Principio de Abierto/Cerrado (Open/Closed Principle):
El principio abierto/cerrado postula que las entidades de software, como clases, módulos y funciones, deben estar abiertas para su extensión pero cerradas para su modificación. Esto significa que deberías poder agregar nuevas funcionalidades sin modificar el código existente.<br>
![Imagen de WhatsApp 2023-08-11 a las 00 49 24](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/fcd0a9f1-8d6c-48a9-9564-f417fcb34123)
![Imagen de WhatsApp 2023-08-11 a las 00 49 05](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/f06e81b9-d444-4491-86a9-2b825c52d4ec)

### Principio I: <br>
#### Principio de Segregación de Interfaces (Interface Segregation Principle):

![Imagen de WhatsApp 2023-08-11 a las 00 53 54](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/54b16043-3983-4945-b36f-d0b4f133c15b)
![Imagen de WhatsApp 2023-08-11 a las 00 54 57](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/584bb225-4447-4628-9724-8fd41e4cf29e)
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/8bcb0ab4-7ea9-4102-a9d7-b480d71c4301)
-En esta ultima imagen se muestra una interfaz sencilla para el usuario. <br>


Conceptos DDD aplicados: Descripción y Fragmento de Código (evidencia) <br>
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/7926aca7-c9df-4b85-9446-156e34b00308)

## Entidades, Objetos de Valor, [Servicios de Dominio,].<br>
###Agregados y Módulos. <br>
-Modulo ejemplo: <br>
   ![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/11b5f720-ccf2-416e-bfbf-c634f9d17345)
   ![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/65c6ae28-ef36-4d96-a6eb-a346ba8ce7c8)


## Repositorios
![image](https://github.com/smenaquispe/Sistema_de_Elecciones/assets/104391441/68100ea8-bdea-4cc1-913a-324231b9f3a3)

