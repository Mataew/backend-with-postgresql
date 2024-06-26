const express = require('express');
const mainRouter = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', mainRouter);

const connect = () => {
    app.listen(port, () => {
        console.log(`Сервер успешно запущен http://localhost:${port}`);
    });
};

connect();
