export interface IAuthService {
    signup()
    validateUser(email : string , password : string)
}