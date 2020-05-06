const Sequelize = require('sequelize');
const models = require('../models');

const { Op } = Sequelize;

exports.consultaPorNome = async (req, res) => {
  const { nome } = req.query;
  const unidadesSaude = await models.UnidadeSaude.findAll({
    where: {
      nome: {
        [Op.like]: `%${nome}%`,
      },
    },
    limit: 10,
  });

  return res.json({ data: unidadesSaude });
};

exports.consultarPorUserEmail = async (request, response) => {
  const { email } = request.params;

  // const unidadesSaude = await models.UnidadeSaude.findAll({
  //   include: [
  //     {
  //       model: models.UserUnidadeSaude,
  //       where: {
  //         email: email
  //       }
  //     },
  //     {
  //       model: models.UnidadeSaude
  //     }
  //   ]
  // });

  const userUnidadesSaude = await models.UserUnidadeSaude.findAll({
    include: [
      {
        model: models.User,
        where: {
          email,
        },
      },
      {
        model: models.UnidadeSaude,
      },
    ],
  });

  if (userUnidadesSaude === null) return response.status(404).json({ error: 'Unidade de saúde não encontrada.' });

  const data = userUnidadesSaude.map((userUnidadeSaude) => userUnidadeSaude.UnidadeSaude);

  return response.json({ data });
};
