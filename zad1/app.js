const express = require('express');
const homeRouter = require('./view/home.js');
const studentRouter = require('./view/student.js');
const addStudentRouter = require('./view/addStudent.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/home', homeRouter);
app.use('/student', studentRouter);
app.use('/addStudent', addStudentRouter);

app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});