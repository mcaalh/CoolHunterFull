import { check } from 'express-validator'

export const userSignupValidator = [
    check('firstname')
        .notEmpty()
        .withMessage('firstname is required'),
    check('lastname')
        .notEmpty()
        .withMessage('lastname is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min: 6})
        .withMessage('password Must be at least 6 characters'),
]