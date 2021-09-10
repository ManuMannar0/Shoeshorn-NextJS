import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { shoeIndex } = req.body;
  const deleteShoe = await prisma.amertabella.delete({
    where: {
      indice: Number(shoeIndex),
    },
  });
  res.json(deleteShoe);
}
