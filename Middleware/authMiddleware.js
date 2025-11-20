import { UnauthenticatedError, UnauthorizedError } from '../Errors/customErrors.js'
import { verifyJWT } from '../Utils/tokenUtils.js'

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies
    if(!token) throw new UnauthenticatedError('authentication invalid')
    try {
        const {userId, role} = verifyJWT(token);
        req.user = { userId, role };
        next();
    
    } catch (error){
        throw new UnauthenticatedError('Unexpected authentication invalid error')
    }
}


export const authorizePermissions = (...roles) => {

    return (req, res, next) =>{
        if(!roles.includes(req.user.role)){
            throw new UnauthorizedError('Unauthorized to access this route')
        }
        next();
    }
}