//Los enum pueden ser numericos o textos
enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
    Superadmin = 'SUPERADMIN',
}

/* enum Roles {
    User = 1,
    Admin = 2,
    Superadmin = 3,
} */

//////////////

//Objets
// Language: typescript
//Los objets son una coleccion de propiedades
const usuario = {
    nombre: 'Juan',
    edad: 30,
    rol: Roles.User,
}

/* const roles = {
    [Roles.User]: 'Usuario',
    [Roles.Admin]: 'Administrador',
    [Roles.Superadmin]: 'Super administrador',
} */

/* const roles = {
    User: 0,
    Admin: 1,
    Superadmin: 2,
} */
