const express = require('express');
const mainRouter = require('./routes/index');
const { swaggerDocs } = require('./swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/api', mainRouter);

const connect = () => {
    app.listen(port, () => {
        console.log(`Сервер успешно запущен http://localhost:${port}`);
    });
};

connect();
