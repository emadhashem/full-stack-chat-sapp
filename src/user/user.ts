import { CreateUserBody } from "src/utils/types";

export interface IUserService {
    createUser(createUserbody: CreateUserBody)
}