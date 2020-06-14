const Utilizador = require("../models/utilizador.models");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /utilizadores
controllers.utilizador_list = async (req, res) => {
  //opção 1) retorna todos os utilizadores
  const dados = await Utilizador.findAll()
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos utilizadores.",
      });
    });


  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await Utilizador.findAll({ where: { id_utilizador: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do utilizador.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_create = async (req, res) => {
  const { nome, email, password } = req.body;
  const dados = await Utilizador.create({
    nome: nome,
    email: email,
    password: password,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o utilizador.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_update = async (req, res) => {
  const { id } = req.params;
  const { nome, email, password } = req.body;
  const dados = await Utilizador.update(
    {
      nome: nome,
      email: email,
      password: password,
    },
    {
      where: { id_utilizador: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do utilizador.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.utilizador_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await Utilizador.destroy({ where: { id_utilizador: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o utilizador.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

//login do utilizador (POST)
controllers.login_create = async (req, res) => {
  const { nome, password } = req.body;
  const dados = await Utilizador.findOne({
    where: { nome: nome }
  })
  if (!dados) {
    return res.status(400).send({
      error: "O nome de utilizador não foi encontrado."
    })
  }

  if (password !== dados.password) {
    return res.status(400).send({
      error: "A password que inseriu está errada."
    })
  } else {
    res.json({
      success: true,
      dados: dados,
    });
  }
};

module.exports = controllers;