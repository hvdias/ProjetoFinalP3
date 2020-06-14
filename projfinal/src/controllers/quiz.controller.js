const Quiz = require("../models/quiz.models");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /quizs
controllers.quiz_list = async (req, res) => {
  //opção 1) retorna todos os quizs
  const dados = await Quiz.findAll()
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos quizs.",
      });
    });
      

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quiz_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await Quiz.findAll({ where: { id_quiz: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do quiz.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quiz_create = async (req, res) => {
  const { titulo } = req.body;
  const dados = await Quiz.create({
    titulo: titulo,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o quiz.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.quiz_update = async (req, res) => {
  const { id } = req.params;
  const { titulo} = req.body;
  const dados = await Quiz.update(
    {
      titulo: titulo,
    },
    {
      where: { id_quiz: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do quiz.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.quiz_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await Quiz.destroy({ where: { id_quiz: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o quiz.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;