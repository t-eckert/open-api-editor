interface TokenPayload {
  _id: {
    $oid: string
  }
  name: string
  email: string
  githubUid?: number
  picture?: string
  isPro: boolean
  created: {
    $date: number
  }
  lastLogin: {
    $date: number
  }
  documents: object[]
  exp: number
}

export default TokenPayload