const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const pool = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'boogooz',
    password: 'Boogooz228',
    port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
