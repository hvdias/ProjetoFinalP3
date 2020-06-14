const express = require('express');
const router = express.Router();

//importar o controlador
const utilizadorController = require('../controllers/utilizador.controller');
const quizController = require('../controllers/quiz.controller.js');
const perguntaQuizController = require('../controllers/pergunta_quiz.controller');
const opcaoPerguntaController = require('../controllers/opcao_pergunta.controller');
const respostaUtilizadorController = require('../controllers/resposta_utilizador.controller');

//endpoints da API
router.get('/utilizadores', utilizadorController.utilizador_list);
router.get('/utilizador/:id', utilizadorController.utilizador_detail);
router.post('/utilizador', utilizadorController.utilizador_create);
router.put('/utilizador/:id', utilizadorController.utilizador_update);
router.delete('/utilizador/:id', utilizadorController.utilizador_delete);

router.post('/login', utilizadorController.login_create);

router.get('/quizs', quizController.quiz_list);
router.get('/quiz/:id', quizController.quiz_detail);
router.post('/quiz', quizController.quiz_create);
router.put('/quiz/:id', quizController.quiz_update);
router.delete('/quiz/:id', quizController.quiz_delete);

router.get('/perguntas', perguntaQuizController.pergunta_list);
router.get('/pergunta/:id', perguntaQuizController.pergunta_detail);
router.post('/pergunta', perguntaQuizController.pergunta_create);
router.put('/pergunta/:id', perguntaQuizController.pergunta_update);
router.delete('/pergunta/:id', perguntaQuizController.pergunta_delete);

router.get('/opcoes', opcaoPerguntaController.opcao_list);
router.get('/opcao/:id', opcaoPerguntaController.opcao_detail);
router.post('/opcao', opcaoPerguntaController.opcao_create);
router.put('/opcao/:id', opcaoPerguntaController.opcao_update);
router.delete('/opcao/:id', opcaoPerguntaController.opcao_delete);

router.get('/respostas', respostaUtilizadorController.resposta_list);
router.get('/resposta/:id', respostaUtilizadorController.resposta_detail);
router.post('/resposta', respostaUtilizadorController.resposta_create);
router.put('/resposta/:id', respostaUtilizadorController.resposta_update);
router.delete('/resposta/:id', respostaUtilizadorController.resposta_delete);

module.exports = router;