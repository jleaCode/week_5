let express = require("express");
let app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.static('css'));

let toDo = [];


app.get('/', function (req, res) {

    res.render('homePage.html');
})
app.get('/listAllTasks', function (req, res) {

    res.render('listAllTasks.html', { toDo: toDo });
})
app.get('/addNewTask', function (req, res) {

    res.render('addNewTask.html');
})

app.post('/newTask', function (req, res) {
    let newTask = {
        taskName: req.body.taskName,
        taskDueDate: req.body.taskDueDate,
        taskDesc: req.body.taskDesc
    }
    toDo.push(newTask);
    console.log(newTask);
    res.render('addNewTask');
});

app.listen(8080);