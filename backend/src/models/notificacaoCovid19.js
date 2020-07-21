const { validarMenorQueDataHoraAtual } = require('../lib/validacoes-comuns/data');

module.exports = (sequelize, DataTypes) => {
  const NotificacaoCovid19 = sequelize.define('NotificacaoCovid19', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    notificacaoId: DataTypes.UUID,
    sintomatico: DataTypes.BOOLEAN,
    dataInicioDosSintomas: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        naoEhMaiorQueDataAtual(value) {
          validarMenorQueDataHoraAtual(value, 'A', 'data do início dos sintomas');
        },
      },
    },
    dataHoraNotificacao: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        naoEhMaiorQueDataAtual(value) {
          validarMenorQueDataHoraAtual(value, 'A', 'data/hora da notificação');
        },
      },
    },
    coriza: DataTypes.BOOLEAN,
    tosse: DataTypes.BOOLEAN,
    dorDeGarganta: DataTypes.BOOLEAN,
    mialgia: DataTypes.BOOLEAN,
    escarro: DataTypes.BOOLEAN,
    sibilo: DataTypes.BOOLEAN,
    batimentoAsasNasais: DataTypes.BOOLEAN,
    dispneia: DataTypes.BOOLEAN,
    taquipneia: DataTypes.BOOLEAN,
    tiragemIntercostal: DataTypes.BOOLEAN,
    saturacaoDeOximetriaDePulso: DataTypes.BOOLEAN,
    cianoseCentral: DataTypes.BOOLEAN,
    febreAferidaReferida: DataTypes.BOOLEAN,
    temperaturaFebre: DataTypes.TEXT,
    congestaoNasal: DataTypes.BOOLEAN,
    diminuicaoDePulsoPeriferico: DataTypes.BOOLEAN,
    hipotensao: DataTypes.BOOLEAN,
    diarreia: DataTypes.BOOLEAN,
    adinamiaFraqueza: DataTypes.BOOLEAN,
    artralgia: DataTypes.BOOLEAN,
    calafrios: DataTypes.BOOLEAN,
    conjuntivite: DataTypes.BOOLEAN,
    dificuldadeDeglutir: DataTypes.BOOLEAN,
    gangliosLinfaticos: DataTypes.BOOLEAN,
    irritabilidadeConfusao: DataTypes.BOOLEAN,
    manchasVermelhas: DataTypes.BOOLEAN,
    cefaleia: DataTypes.BOOLEAN,
    nauseaVomito: DataTypes.BOOLEAN,
    outrosSintomas: DataTypes.TEXT,
    puerperaAte45DiasDoParto: DataTypes.BOOLEAN,
    sindromeDeDown: DataTypes.BOOLEAN,
    diabetesMellitus: DataTypes.BOOLEAN,
    imunodeficiencia: DataTypes.BOOLEAN,
    doencaCardioVascularCronica: DataTypes.BOOLEAN,
    doencaHepaticaCronica: DataTypes.BOOLEAN,
    doencaNeurologicaCronica: DataTypes.BOOLEAN,
    doencaRenalCronica: DataTypes.BOOLEAN,
    doencaHematologicaCronica: DataTypes.BOOLEAN,
    asma: DataTypes.BOOLEAN,
    hipertensao: DataTypes.BOOLEAN,
    infeccaoHIV: DataTypes.BOOLEAN,
    neoplasia: DataTypes.BOOLEAN,
    tabagismo: DataTypes.BOOLEAN,
    outraPneumopatiaCronica: DataTypes.BOOLEAN,
    obesidade: DataTypes.BOOLEAN,
    outrosComorbidades: DataTypes.TEXT,
    tamiflu: DataTypes.BOOLEAN,
    hidroxicloroquina: DataTypes.BOOLEAN,
    nomeMedicamento: DataTypes.STRING,
    historicoDeViagem: DataTypes.BOOLEAN,
    dataDaViagem: DataTypes.DATEONLY,
    localDaViagem: DataTypes.STRING,
    recebeuVacinaDaGripeNosUltimosDozeMeses: DataTypes.ENUM('SIM', 'NAO', 'NAO_SABE'),
    situacao1: DataTypes.BOOLEAN,
    situacao2: DataTypes.BOOLEAN,
    nomeTeveContato: DataTypes.STRING,
    coletaMaterialParaDiagnostico: DataTypes.BOOLEAN,
    tipoLaboratorio: DataTypes.ENUM('OFICIAL', 'PRIVADO'),
    nomeLaboratorioEnvioMaterial: DataTypes.STRING(30),
    dataDaColeta: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        naoEhMaiorQueDataAtual(value) {
          validarMenorQueDataHoraAtual(value, 'A', 'data da coleta do exame');
        },
      },
    },
    metodoDeExame: DataTypes.ENUM('RT-PCR', 'TESTE_RAPIDO', 'SOROLOGIA_OUTROS', 'ELISA', 'QUIMIOLUMINESCENCIA', 'IMUNOFLUORESCENCIA'),
    realizouExameDeImagem: DataTypes.BOOLEAN,
    raioXNormal: DataTypes.BOOLEAN,
    raioXInfiltrado: DataTypes.BOOLEAN,
    raioXConsolidacao: DataTypes.BOOLEAN,
    raioXMisto: DataTypes.BOOLEAN,
    raioXOutro: DataTypes.TEXT,
    tomografiaNormal: DataTypes.BOOLEAN,
    tomografiaVitro: DataTypes.BOOLEAN,
    tomografiaDerrame: DataTypes.BOOLEAN,
    tomografiaLinfonodo: DataTypes.BOOLEAN,
    tomografiaOutro: DataTypes.TEXT,
    observacoes: DataTypes.TEXT,
    contatoComSuspeito: DataTypes.ENUM('SUSPEITO', 'CONFIRMADO', 'SEM_CONTATO'),
    localDoContatoComSuspeito: DataTypes.ENUM('DOMICILIO', 'UNIDADE_SAUDE', 'LOCAL_TRABALHO'),
    localDoContatoComSuspeitoOutro: DataTypes.TEXT,
    nomeSuspeito: DataTypes.TEXT,
    situacaoNoMomentoDaNotificacao: DataTypes.ENUM('ALTA_ISOLAMENTO_DOMICILIAR', 'INTERNAMENTO_LEITO_COMUM', 'INTERNAMENTO_LEITO_UTI', 'EVOLUCAO_OBITO'),
    tpTransmissaoApiSecretaria: DataTypes.ENUM('PENDENTE_ENVIO', 'ENVIADA', 'PENDENTE_ATUALIZACAO'),
    apiSecretariaId: DataTypes.INTEGER,
    cloroquina: DataTypes.BOOLEAN,
    doencaPulmonar: DataTypes.BOOLEAN,
    perdaOlfatoPaladar: DataTypes.BOOLEAN,
    hospitalizado: DataTypes.BOOLEAN,
    cnesHospitalId: DataTypes.UUID,
    internacaoSus: DataTypes.BOOLEAN,
    tipoLeito: DataTypes.ENUM('ENFERMARIA', 'UTI'),
    dataInternamento: DataTypes.DATEONLY,
    dataIsolamento: DataTypes.DATEONLY,
    dataAlta: DataTypes.DATEONLY,
    codigoExame: DataTypes.STRING(18),
    exameId: DataTypes.UUID,
    requisicao: DataTypes.STRING(18),
    resultadoExameId: DataTypes.UUID,
    dataCadastroExame: DataTypes.DATEONLY,
    dataRecebimentoExame: DataTypes.DATEONLY,
    dataLiberacaoExame: DataTypes.DATEONLY,
    labAmostraId: DataTypes.UUID,
    pesquisaGal: DataTypes.STRING(18),
    numeroDo: DataTypes.STRING(18),
    frequentouUnidade: DataTypes.BOOLEAN,
    unidadeFrequentadaId: DataTypes.UUID,
    descritivoViagem: DataTypes.STRING,
    dataRetornoLocal: DataTypes.DATEONLY,
    dataChegadaBrasil: DataTypes.DATEONLY,
    dataChegadaUF: DataTypes.DATEONLY,
    descricaoLocal: DataTypes.STRING(255),
  }, {});
  NotificacaoCovid19.associate = (models) => {
    NotificacaoCovid19.belongsTo(models.Notificacao, { foreignKey: 'notificacaoId' });
    NotificacaoCovid19.belongsTo(models.Exame, { foreignKey: 'exameId' });
    NotificacaoCovid19.belongsTo(models.ResultadoExame, { foreignKey: 'resultadoExameId' });
    NotificacaoCovid19.belongsTo(models.UnidadeSaude, { foreignKey: 'cnesHospitalId', as: 'Hospital' });
    NotificacaoCovid19.belongsTo(models.UnidadeSaude, { foreignKey: 'labAmostraId', as: 'Laboratorio' });
    NotificacaoCovid19.belongsTo(models.UnidadeSaude, { foreignKey: 'unidadeFrequentadaId', as: 'UnidadeFrequentada' });
  };

  return NotificacaoCovid19;
};
