// server outputs a webpage and runs application

const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')

// const PORT = process.env.PORT || 3005

app.set('view engine', 'ejs')

// this creates the webpage
app.get('/', (req, res) => {
    console.log('here')
    // this links the html to a path
    res.sendFile(path.join(__dirname+'/index.ejs.html'))

    // this renders the html file
    // res.render('index')
    
    // res.download('server.js')

    // these are different ways to send a 500 error message
    // res.sendStatus(500)
    // res.status(500).send('Error')
    // res.status(500).json({message: 'Error'})
    // res.json({message: 'Error'})
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// this assigns the page to a specific port
app.listen(3005, () => 
    console.log(`App running on port 3002`)
)
// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}`);
//   });

