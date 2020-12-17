const express    = require('express'),
     mongoose    = require('mongoose'),
         port    = 3000,
expressSanitizer = require('express-sanitizer'),
   bodyParser    = require('body-parser'),
            app  = express()

app.listen(port, () => console.log(`App is listening on port ${port}!`))

//APP CONFIG
mongoose.connect('mongodb://localhost/blog_app', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'js')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSanitizer())


app.get('/', (req, res) =>{
    res.render('home')
})

