const express = require('express');

const app = express();


app.use(express.static(__dirname ))

app.listen(3000,() => {
    console.log('启动成功 http://localhost:3000/');
})