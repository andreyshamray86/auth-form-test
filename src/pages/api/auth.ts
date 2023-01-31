// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { isEmailValid, isShort } from '@/validation/validate'

type Response = {
  email: string
  token: string
}

type ErrorResponse = {
  error: string
}

export default function authHandler(
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorResponse>
) {
  const { email, password } = req.body

  if (
    !isEmailValid(email) ||
    isShort(password) ||
    email !== 'test@mars-mail.ma' ||
    password !== '123'
  ) {
    res.status(400).json({ error: 'Error. Check your credentials' })
    return
  }

  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5hbWUgU3VybmFtZSIsImlhdCI6MTUxNjIzOTAyMn0.DmpGSPfH0aQHbG_jtW9TLcsKgX052q6rL5GbVSdOXwU'
  res.status(200).json({ email, token: mockToken })
}
