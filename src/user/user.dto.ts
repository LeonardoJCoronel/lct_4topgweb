/* eslint-disable prettier/prettier */
export class CreateUserDto{
    id_usuario : number
    nombre_usuario: string;
    apellido_usuario: string;
    fecha_nacimiento: Date;
    fecha_registro: Date
    contrasenia: string
    correo: string
    estado: boolean
    cedula: string
}

export class UpdateUserDto{
    id_usuario : number
    nombre_usuario: string;
    apellido_usuario: string;
    fecha_nacimiento: Date;
    fecha_registro: Date
    contrasenia: string
    correo: string
    estado: boolean
    cedula: string
}