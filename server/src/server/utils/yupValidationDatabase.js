const yup = require('yup');

module.exports.createUser = yup.object().shape({
    fisrtName: yup
        .string()
        .required(),
    lastName: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(8)
        .matches(/^[a-z]|[0-9]|[A-Z]$/)
        .required(),
    gender: yup
        .string()
        .required(),
});

module.exports.loginUser = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(8)
        .required()
});