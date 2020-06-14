const PerguntaQuiz = require("../models/pergunta_quiz.models");
const OpcaoPergunta = require("../models/opcao_pergunta.models");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /opcoes
controllers.opcao_list = async (req, res) => {
  //opção 1) retorna todas as opcoes incluindo a pergunta e respetiva relação
  const dados = await OpcaoPergunta.findAll({include: [PerguntaQuiz]})
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados das opções.",
      });
    });
      

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.opcao_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await OpcaoPergunta.findAll({ where: { id_pergunta_quiz: id }, include: [PerguntaQuiz] })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da opção.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.opcao_create = async (req, res) => {
  const { id_pergunta_quiz, opcao, correto } = req.body;
  const dados = await OpcaoPergunta.create({
    id_pergunta_quiz: id_pergunta_quiz,
    opcao: opcao,
    correto: correto,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar a opção.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.opcao_update = async (req, res) => {
  const { id } = req.params;
  const { id_pergunta_quiz, opcao, correto } = req.body;
  const dados = await OpcaoPergunta.update(
    {
    id_pergunta_quiz: id_pergunta_quiz,
    opcao: opcao,
    correto: correto,
    },
    {
      where: { id_opcao: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados da opção.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.opcao_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await OpcaoPergunta.destroy({ where: { id_opcao: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a opção.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;