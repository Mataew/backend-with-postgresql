const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'BOOGOOZ API Documentation',
            version: '1.0.0',
            description: 'API Information',
            contact: {
                name: 'https://t.me/boogooz'
            },
            servers: [{
                url: 'http://localhost:3000'
            }]
        }
    },
    apis: ['./swagger/swaggerComments/*.js'] // Путь к файлам с комментариями для Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
    swaggerUi,
    swaggerDocs,
};
