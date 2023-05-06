
import * as bycrpt from 'bcrypt'

export async function comparePassword(candidate: string, hash: string) {
    return await bycrpt.compare(candidate, hash)
}