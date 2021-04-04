
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/utils/dbConnect'
import Segredo from '@/models/Segredo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const results = await Segredo.find({}).sort({ dataAt: -1 }).limit(88); /* find all the data in our database */
        res.status(200).json(results)

      } catch (error) {
        res.status(400).json({ error: 'Wrong request method' });
        console.log(error)
      } 
      break
    case 'POST':
      try {
        const response = await Segredo.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json(response)
      } catch (error) {
        res.status(400).json({ error: 'Wrong request method' });
      }
      break
    default:
      res.status(400).json({ error: 'Wrong request method' });
      break
  }
}

export default handler