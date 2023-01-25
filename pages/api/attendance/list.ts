import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'
type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    // const user = await db.one('SELECT * FROM "user"."User" WHERE id=$1', '_veronica')
    const user = await db.one('SELECT * FROM "public"."employee"')
    res.status(200).json(user)
  } catch (e) {
    console.dir(e)
    res.status(500).end()
  }
}