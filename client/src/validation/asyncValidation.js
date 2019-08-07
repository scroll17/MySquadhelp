import * as yup from 'yup';
import schema from "./yupValidation";

import { ROLE } from '../utils/consts'


export const asyncValidation = async (values) => {
    const errors = {};

    try{

        const firstName = await yup.reach(schema, 'firstName').isValid(values.firstName);
        const lastName = await yup.reach(schema, 'lastName').isValid(values.lastName);
        const displayName = await yup.reach(schema, 'displayName').isValid(values.displayName);
        const email = await yup.reach(schema, 'email').isValid(values.email);
        const password = await yup.reach(schema, 'password').isValid(values.password);
        const passwordRepeat = await yup.reach(schema, 'password').isValid(values.passwordRepeat);


        const role = await yup.reach(schema, 'role').isValid(values.role);



        if(!firstName ) {
            errors.firstName = 'Field cannot be empty'
        }
        if(!lastName) {
            errors.lastName = 'Field cannot be empty'
        }
        if(!displayName) {
            errors.displayName = 'Display name should be more than 4 characters'
        }


        if(!email) {
            errors.email = 'Please check the format of email address'
        }


        if(
            (!values.password || !values.passwordRepeat)
            ||
            (values.password !== values.passwordRepeat)
            ||
            (!password || !passwordRepeat)
        ){
            errors.password = 'Password confirmation needs to match original password'
        }


        if(!role || !(ROLE.includes(values.role))) {
            errors.role = 'Required'
        }


    }catch (e) {
        return Promise.reject(errors)
    }


    if (Object.keys(errors).length === 0) {
        return Promise.resolve()
    }else {
        return Promise.reject(errors)
    }

};