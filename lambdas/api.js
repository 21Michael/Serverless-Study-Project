const serverless = require('serverless-http');
const express = require('express')
const router = express.Router();

const app = express()

router.get('/testGET', function (req, res) {
  res.send('Hello World!')
})
router.post('/testPOST', function (req, res) {
  const data = JSON.parse(req.body);
  const response = {
    message: "Data POST succeed!",
    data,
  };
  res.send(response);
})
router.put('/testPUT', function (req, res) {
  const data = JSON.parse(req.body);
  const response = {
    message: "Data PUT succeed!",
    data,
  };
  res.send(response);
})

app.use(router);

module.exports.api = serverless(app);