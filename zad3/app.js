const express = require('express');
const bodyParser = require('body-parser');

const homeRouter = require('./view/home.js');
const studentRouter = require('./view/student.js');
const addStudentRouter = require('./view/addStudent.js');
const usersRouter = require('./view/users.js');

const app = express();
const PORT = 3000;

let students = [];

app.use((req, res, next) => {
    const date = new Date().toLocaleString();
    console.log(`Request ${req.method} on path ${req.url} ${date}`);
    next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);
app.use('/student', studentRouter);
app.use('/addStudent', addStudentRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});