import { body, param, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError, UnauthorizedError } from '../Errors/customErrors.js'

const withValidationErrors = (validateValues) =>{
    return [validateValues, (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error) => error.msg);
            if(errorMessages[0].startsWith('no product')){
                throw new NotFoundError(errorMessages)
            }
            if(errorMessages[0].startsWith('not authorized')){
                throw new UnauthorizedError('not authorized to access this route')
            }
            throw new BadRequestError(errorMessages);
        }
        next();
    }]
}

// Validaciones para el historial del paciente
export const validateHistoryInput = withValidationErrors([
   //Ejemplo: body('nombrePaciente').notEmpty().withMessage('Se requiere el nombre del paciente')
   // .isLength({max: 30}).withMessage('Maximo de caracteres alcanzado'),
]);



// Validaciones del registro de usuarios
  export const validateRegisterInput = withValidationErrors([

    body('name').notEmpty().withMessage('Se requiere el nombre del usuario'),
    body('username').notEmpty().withMessage('username is required'),
    body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format').custom(async(email) => {
      const user = await User.findOne({email})
      if(user){
        throw new BadRequestError('email already exists')
      }
  
    }),
    body('password').notEmpty().withMessage('password is required')
    .isLength({min:8}).withMessage('password must be at least 8 characters long '),
    body('address').notEmpty().withMessage('address is required'),
    body('lastName').notEmpty().withMessage('last name is required')
  ])

  //Validacion del inicio de sesion
  export const validateLoginInput = withValidationErrors([

    body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required')
  ])

  //Validacion para la actualizacion de datos del usuario
  export const validateUpdateUserInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format').custom(async(email, { req }) => {
      const user = await User.findOne({email})
      if(user && user._id.toString() !== req.user.userId){
        throw new BadRequestError('email already exists')
      }
  
    }),
   
    body('location').notEmpty().withMessage('location is required'),
    body('lastName').notEmpty().withMessage('last name is required')
  ])
  

