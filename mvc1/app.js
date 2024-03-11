console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentID()}`);

const student = require('./student');

const http = require("http");

const PORT = 3000;

const server = http.createServer(requestListener);

server.listen(PORT);

function requestListener(request, response) {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentID()}`);
    response.setHeader("Content-Type", "text/html");
    response.write("html")
    response.write("<head><title>About student</title></head>")
    response.write(`<body><h2>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentID()}</h2></body>`)
    response.end();
    console.log("requestListener", response)
}
