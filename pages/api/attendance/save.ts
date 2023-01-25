import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'
type Data = {
  inDatetime: Date,
  outDatetime: Date,
  date: Date
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    console.dir(req)
    // const user = await db.one('SELECT * FROM "user"."User" WHERE id=$1', '_veronica')
    const user = await db.one('SELECT * FROM "public"."attendance" where 1=1')
    res.status(200).json(user)
  } catch (e) {
    console.dir(e)
    res.status(500).end()
  }
}