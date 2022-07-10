import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const noteId = req.query.id;

  try {
    if(req.method === 'DELETE') {
      const note = await prisma.note.delete({
        where: {id: Number(noteId)}
      })
      res.json(note)
    } else {
      console.log("Note could not be created");
    }
    res.status(200).json({message: "Note Deleted successfully"});
  } catch (error) {
    console.log("Failure");
    res.status(400).send("Failure at backend");

  }
}