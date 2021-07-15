import jwt_decode from "jwt-decode"

import { TokenPayload, User } from "../interfaces"

const parseTokenToUser = (token: string): User => {
  const payload = jwt_decode<TokenPayload>(token)

  const user: User = {
    id: payload._id.$oid,
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
    isPro: payload.isPro,
    created: new Date(payload.created.$date),
    lastLogin: new Date(payload.lastLogin.$date),
    documentIds: [],
    settingsId: ""
  }

  return user
}

export default parseTokenToUser