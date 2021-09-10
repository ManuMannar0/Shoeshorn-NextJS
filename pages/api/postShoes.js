import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { tipo, genere, nome, retail, outlet } = req.body;

  const postShoes = await prisma.amertabella.create({
    data: {
      tipo: tipo,
      genere: genere,
      nome: nome,
      retail: retail,
      outlet: outlet,
    },
  });
  res.json(postShoes);
}
