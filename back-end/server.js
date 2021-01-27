const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { favFood, User, Tweet } = require('./models/user.js');
// const {a,b}=obj

console.log(favFood);
/* ============================================== */
// to can see the body from req instead of undefined
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mongooseAssociationsInClass', {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('DB IS CONNECTED :)');
});
/* ============================================== */

app.get('/', (req, res) => {
  console.log('GET /');
  res.json('SERVER IS WORKING :P');
});

//MESHAL: write the code for app.get (to get all the products) 


//get all prouct 
app.get('/product', (req, res) => {
    console.log('GET /product');
    Product.find({}, function (err, data) {
      res.json(data);
    });
  });

//another app.get (to get ONE product only by ID)

app.get('/getById', (req, res) => {
    console.log(req.query.id);
    console.log('GET /getById');
    Product.findById(req.query.id, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });


/* ============================================== */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});

console.log(1);

var a_2 = 7;