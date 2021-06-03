//Extraer el Esquema y el modelo 
const { Schema,model } = require("mongoose");
//Crear una constante llamda UsuarioSchema
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatorio'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        enum:['ROL_ADMIN','ROL_USUARIO']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});
module.exports=model('Usuario',UsuarioSchema);