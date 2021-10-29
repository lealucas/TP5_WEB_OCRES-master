const express = require('express');
var router = express.Router();

const hostname='localhost';
const port = 3000;

const app = express();

app.listen(port, hostname,() => {
  console.log('Mon serveur fonctionne sur http://${hostname}:${port} \n')
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET */
app.get('/test', (req, res)=>{
  res.json({
    req: req.method,
    data: "This is a GET"
  });
});

/* PUT */
app.put('/test', (req, res)=>{
  res.json({
    req: req.method,
    data: "This is a PUT"
  });
});