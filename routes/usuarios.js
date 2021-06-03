//Realizar un desestructuracion para sacar Router de express
const {Router} =require('express');
const { check } = require('express-validator');


const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controller/usuarios.controlador');
const { validarCampos, validarCorreo } = require('../middlewares/validar-campos');
const { rolValido } = require('../helpers/validadores-db');

const rutas=Router();

rutas.get('/',usuariosGet);
rutas.put('/:id',usuariosPut);

rutas.post('/',[
    check('nombre','EL NOMBRE ES OBLIGATORIO').not().isEmpty(),
    check('password','LA PASSWORD ES OBLIGATORIO Y MINIMO 6 CARACTERES').isLength({min:6}),    
    // check('correo','EL CORREO NO ES VALIDO').isEmail(),
    check('correo').custom(validarCorreo),
    // check('rol','ROL NO PERMITIDO').isIn(['ROL_ADMIN','ROL_USUARIO']),
    check('rol').custom(rolValido),
    validarCampos
],usuariosPost);

rutas.delete('/:id',usuariosDelete);

module.exports=rutas;