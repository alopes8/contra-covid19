const { RegraNegocioErro } = require('../lib/erros');
const models = require('../models');
const repos = require('../repositories/repository-factory');
const dataEvolucaoNotificacaoEnum = require('../enums/data-evolucao-notificacao-enum');

const getCampoDataEvolucao = (tpEvolucao) => dataEvolucaoNotificacaoEnum.values[tpEvolucao];

exports.handle = async (notificacaoId, notificacaoEvolucaoId, tenant) => {
  const notificacao = await repos.notificacaoRepository
    .getEvolucoesPorNotificacaoId(notificacaoId, tenant);

  if (!notificacao) {
    throw new RegraNegocioErro('Evolução não encontrada.');
  }
  if (notificacao.NotificacaoEvolucaos.length === 1) {
    throw new RegraNegocioErro('Não é permitido remover a primeira evolução.');
  }

  const evolucoesSort = notificacao.NotificacaoEvolucaos.sort((a, b) => {
    const dataEvolucaoItemA = new Date(a.dtEvolucao);
    const dataEvolucaoItemB = new Date(b.dtEvolucao);
    return dataEvolucaoItemA - dataEvolucaoItemB;
  });

  const ultimaEvolucao = evolucoesSort[evolucoesSort.length - 1];
  if (ultimaEvolucao.id !== notificacaoEvolucaoId) {
    throw new RegraNegocioErro('Somente é permitido remover a última ocorrência de evolução.');
  }

  const dtTpEvolucao = getCampoDataEvolucao(ultimaEvolucao.tpEvolucao);

  await models.sequelize.transaction(async (transaction) => {
    await repos.notificacaoRepository.deletarEvolucaoPorId(notificacaoEvolucaoId, transaction);
    await models.Notificacao.update(
      { status: 'ABERTA', [dtTpEvolucao]: null },
      {
        where: { id: notificacaoId },
        transaction,
      },
    );
    await repos.notificacaoCovid19Repository
      .atualizarTpTransmissaoPendenteAtualizacao(notificacaoId, transaction);
  });
};
