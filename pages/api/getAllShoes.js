import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const shoesFromServer = await prisma.amertabella.findMany();
  res.json(shoesFromServer);
}
