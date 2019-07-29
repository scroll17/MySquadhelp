import * as yup from 'yup';
import ROLE from '../utils/consts';

const schema = yup.object().shape({
    firstName : yup
        .string()
        .min(2, "Must be longer than 2 characters")
        .required("Required"),
    lastNameN : yup
        .string()
        .min(2, "Must be longer than 2 characters")
        .required("Required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Required"),
    password: yup
        .string()
        .min(8, 'At least 8 chars')
        .matches(/^[a-z]|[0-9]|[A-Z]$/, 'Password must have a number and a capital letter'),
    role: yup
        .string()
/*        .oneOf(ROLE)*/
        .required("Required"),
});

export default schema;
