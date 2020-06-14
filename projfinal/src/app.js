const express = require('express');
const app = express();
//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const quizApi = require('./routes/main.route');
app.use('/api/v1', quizApi);

//servidor
app.listen(app.get('port'), () => {
console.log('Servidor iniciado na porta: '+ app.get('port'));
});