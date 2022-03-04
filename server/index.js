const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


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

app.post("/api/fortune", (req, res) => {
  let require = req.body
  res.status(200).send(require)
  })



app.get("/api/checkbox", (req, res) => {
    let alert = 'whatever you choose is good'
    res.status(200).send(alert)
})

app.listen(4000, () => console.log("Server running on 4000"));
