const Joi = require('@hapi/joi');

const schemas = {
  cadastrar: Joi.object().keys({
    dataHoraNotificacao: Joi.date().iso().required(),
    unidadeSaudeId: Joi.string().guid({ version: 'uuidv4' }).required(),
    notificadorId: Joi.string().guid({ version: 'uuidv4' }).required(),
    sintomatico: Joi.bool().required(),
    realizouExamesImagem: Joi.bool(),
    dataInicioDosSintomas: Joi.date().iso(),
    userId: Joi.string().guid({ version: 'uuidv4' }).required(),
    nomeNotificador: Joi.string().required().min(3).max(80),
    profissaoId: Joi.string().guid({ version: 'uuidv4' }).required(),
    tipoDeContatoComCaso: Joi.string()
      .allow('', null)
      .pattern(/SUSPEITO|CONFIRMADO|SEM_CONTATO/),
    tipoDeLocalDoCaso: Joi.string()
      .allow('', null)
      .pattern(/DOMICILIO|UNIDADE_SAUDE|LOCAL_TRABALHO/),
    descricaoDoLocalDoCaso: Joi.string().allow('', null),
    nomeDoCaso: Joi.string().allow('', null).max(120),
    observacoes: Joi.string().allow('', null),
    suspeito: Joi.object(),
    sintomas: Joi.object(),
    comorbidades: Joi.object(),
    examesImagem: Joi.object(),
    informacaoComplementar: Joi.object(),
    vinculoEpidemiologico: Joi.object(),
    conclusaoAtendimento: Joi.object(),
  }),
};
module.exports = schemas;
