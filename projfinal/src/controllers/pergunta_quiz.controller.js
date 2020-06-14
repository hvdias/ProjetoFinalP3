const PerguntaQuiz = require("../models/pergunta_quiz.models");
const Quiz = require("../models/quiz.models");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /perguntas
controllers.pergunta_list = async (req, res) => {
  //opção 1) retorna todas as perguntas incluindo o quiz e respetiva relação
  const dados = await PerguntaQuiz.findAll({include: [Quiz]})
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados das perguntas.",
      });
    });
      

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.pergunta_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await PerguntaQuiz.findAll({ where: { id_pergunta_quiz: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados da pergunta.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.pergunta_create = async (req, res) => {
  const { id_quiz, pergunta } = req.body;
  const dados = await PerguntaQuiz.create({
    id_quiz: id_quiz,
    pergunta: pergunta,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar a pergunta.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.pergunta_update = async (req, res) => {
  const { id } = req.params;
  const { id_quiz, pergunta } = req.body;
  const dados = await PerguntaQuiz.update(
    {
      id_quiz: id_quiz,
      pergunta: pergunta,
    },
    {
      where: { id_pergunta_quiz: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados da pergunta.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.pergunta_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await PerguntaQuiz.destroy({ where: { id_pergunta_quiz: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover a pergunta.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;