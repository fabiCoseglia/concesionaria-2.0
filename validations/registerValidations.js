const {body} = require('express-validator');
const users = require('../data/nodeModules').loadUsers();

module.exports=[
    body('name')
        .notEmpty().withMessage('Debe ingresar un nombre').bail()
        .isAlpha('es-ES').withMessage('Solo se permite ingresar letras'),
    
    body('lastname')
        .notEmpty().withMessage('Debe ingresar un apellido').bail()
        .isAlpha('es-ES').withMessage('Solo se permite ingresar letras'),

    body('email')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe colocar un email validó')
        .custom((value, { req }) => {
            let user = users.find(user => user.email === value.trim())
            return !!!user;
        }).withMessage('El email ya se encuentra registrado'),
    
    body('password')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .isLength({ min: 6, max: 12 }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    
    body('city')
        .notEmpty().withMessage('Debe ingresar una provincia').bail(),

    body('ccp')
    .notEmpty().withMessage('Debe ingresar un código postal').bail()
]





