import dbConnect from '../../../utils/dbConnect'
import Documento from '../../../models/Segredo'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const documentos = await Documento.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: documentos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const documento = await Documento.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: documento })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
