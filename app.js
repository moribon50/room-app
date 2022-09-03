const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ootukacorp',
    database: 'room_app'
});

connection.connect((err) => {
    if(err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

app.get('/', (req, res) => {
    res.render('top.ejs');
});

app.get('/query', (req, res) => {
    res.render('query.ejs');
})

app.post('/index/', (req, res) => {
    //フォームから送信された値をコンソールへ出力
    console.log(req.body.semester);
    console.log(req.body.dayOfTheWeek);
    console.log(req.body.period);

    connection.query(
        'SELECT name FROM rooms WHERE id NOT IN (SELECT room_id FROM classes WHERE semester = ? AND day_of_the_week = ? AND period = ?);',
        [req.body.semester, req.body.dayOfTheWeek, req.body.period],
        (error, results) => {
            console.log(results);
            res.render('index.ejs', {rooms: results});
        }
    );

});



app.listen(3000);