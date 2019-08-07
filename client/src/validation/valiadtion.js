import * as yup from 'yup';
import schema from "./yupValidation";

import { ROLE } from '../utils/consts'

export const validate = async (values) => {
    const errors = {};

    try{

        const firstName = await yup.reach(schema, 'firstName').isValid(values.firstName);
        const lastName = await yup.reach(schema, 'lastName').isValid(values.lastName);
        const displayName = await yup.reach(schema, 'displayName').isValid(values.displayName);
        const email = await yup.reach(schema, 'email').isValid(values.email);
        const role = await yup.reach(schema, 'role').isValid(values.role);
        const password = await yup.reach(schema, 'password').isValid(values.password);

        if(!firstName || !lastName || !displayName) {
            errors.firstName = 'Required'
        }
        if(!email) {
            errors.email = 'Required'
        }
        if(!password) {
            errors.password = 'Required'
        }
        if(!role || !(ROLE.includes(values.role))) {
            errors.role = 'Required'
        }

    }catch (e) {
        console.log(e)
    }

    return errors
};