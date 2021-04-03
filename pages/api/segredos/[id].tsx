import Segredo from '@/models/Segredo'
import dbConnect from '@/utils/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   _id: string,
//   segredo: string,
//   cor: string
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const response = Segredo.findById(id)
        if (!response) {
          // return res.status(400).json({ success: false })
          return res.status(400)
        }
        // res.status(200).json({ success: true, data: response })
        res.status(200).json(response)

      } catch (error) {
        // res.status(400).json({ success: false })
        res.status(400)
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const response = Segredo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!response) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: response })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const response = Segredo.deleteOne({ _id: id })
        if (!response) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
