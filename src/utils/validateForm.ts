import * as yup from 'yup';
import React from "react";

export const LoginValidate = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("El username es requerido"),
    password: yup
        .string()
        .trim()
        .required("El password es requerido")
        .min(4, 'El minimo deben ser 4 caracteres.')
        .max(20, 'El maximo deben ser 20 caracteres.')

})