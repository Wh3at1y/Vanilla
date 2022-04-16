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

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    'A beautiful, smart, and loving person will be coming into your life.',
   'A lifetime friend shall soon be made.', 
   'A soft voice may be awfully persuasive', 
   'Adventure can be real happiness',
   'Well, a double rainbow is a phenomenon of optics that displays a spectrum of light due to the sun shining on droplets of moisture in the atmosphere. Does that explain it?'
  ];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomFortuneIndex]

  res.status(200).send(randomFortune)
})

let movieArr = ['Lord of the Rings', 'Hush', 'War of the Worlds',]

app.get("/api/movie", (req,res) => {
  return res.status(200).send(movieArr)
})

app.post("/api/movie", (req,res) => {
  if(req.body.movieName.trim() === '' ){
    return res.status(400).send('ERROR: Movie name is blank!')
  }
  movieArr.push(req.body.movieName)
  return res.status(200).send(movieArr)
})

app.delete("/api/movie/:index", (req,res) => {
  movieArr.splice(req.params.index, 1)
  return res.status(200).send(movieArr)
})

app.put("/api/movie", (req,res) => {
  movieArr = movieArr.map(movie => {
    if(req.body.movieToUpdate === movie){
      return req.body.updatedMovie
    } else {
      return movie
    }
  })
  return res.status(200).send(movieArr)
})

app.listen(4000, () => console.log("Server running on 4000"));
