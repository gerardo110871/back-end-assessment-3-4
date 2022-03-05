const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const fortunes = []
const list = []

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = ['Go take a rest; you deserve it.', 'Imagination rules the world.', 
  'It takes courage to admit fault.', 'Practice makes perfect.', 
  'Please visit us at www.wontonfood.com'];
  
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
});

app.get("/api/loveFood", (req, res) => {
  let alert = 'You are awesome for loving food!'
  res.status(200).send(alert)
});

app.post("/api/add", (req, res) => {
  console.log(req.body)
  
  const {newFortune} = req.body

  fortunes.push(newFortune)
  res.status(200).send(fortunes)
})

app.delete("/api/delete/:id", (req, res) => { //delete/:id is the key name, you name it whatever you like
  console.log(req.params)

  if(+req.params.id) { //+req.params.id is saying that if the id is a number then do this:
    //in this case we are deleting so we are going to splice the array created before named fortunes
        //req.params.id is the value, the number after is the number of items to delete
    fortunes.splice(req.params.id, 1)
    res.status(200).send(fortunes)

  } else {
    console.log('dont have a number')
    res.status(400).send('Please Enter a Number')
  }
})

app.post("/api/cars", (req, res) => {
  console.log(req.body)

  const {selection} = req.body

  list.push(selection)
  res.status(200).send(list)
})

app.listen(4000, () => console.log("Server running on 4000"));